import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { userAgent } from "next/server";
import { toast } from "react-toastify";
import Message from "../components/Message";
import Link from "next/link";

export default function Post() {
  const route = useRouter();
  //   console.log(route);
  const routeData = route.query;

  const [user, loading] = useAuthState(auth);
  // Form State
  const [post, setPost] = useState({ description: "" }); // set state will typing
  // Create a state with all the posts
  const [allPosts, setAllPosts] = useState([]);

  // Submit Post
  const submitPost = async (e) => {
    e.preventDefault(); // avoid when submit post form re-render

    /* Run Checks for Description */
    if (!post.description) {
      // if no description
      toast.error("Description Field empty 😅", {
        // second is the object
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500, // ms
      });
      return; // stop the post from running
    }
    if (post.description.length > 300) {
      toast.error("Description too long 😅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return;
    }

    if (post?.hasOwnProperty("id")) {
      const docRef = doc(db, "posts", post.id);
      const updatedPost = { ...post, timestamp: serverTimestamp() }; // so we are able to modify it
      await updateDoc(docRef, updatedPost); // updateDoc from firebase
      return route.push("/dashboard");
      //   return;
    } else {
      //Make a new post
      const collectionRef = collection(db, "posts"); // Reference of the collection we want to make
      // Add a document to the collection
      await addDoc(collectionRef, {
        ...post,
        timestamp: serverTimestamp(),
        user: user.uid,
        avatar: user.photoURL,
        username: user.displayName,
      });
      setPost({ description: "" });
      toast.success("Post has been made 🚀", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      //   return route.push("/");
      return;
    }
  };

  /* CHECK OUR USER */
  const checkUser = async () => {
    if (loading) return;
    if (!user) route.push("/auth/login");
    // from the edit button to this page, we have the routeData.id
    if (routeData.id) {
      // get the data from the routeData, set the description and the id (automatically fill it for us)
      setPost({ description: routeData.desciption, id: routeData.id });
    }
  };

  useEffect(() => {
    checkUser();
  }, [user, loading]);

  /* GET POST */
  const getPosts = async () => {
    const collectionRef = collection(db, "posts"); // get posts content in the db
    const q = query(collectionRef, orderBy("timestamp", "desc")); // sort it by date
    // update in real time, snapshot=docs=querySnapshot
    // snapshot enable the update - this will also keep looking for changes for us as well
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // for each of the snapshot, set the post => return an object
      setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // passing the data in each document by spread operator
    });
    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []); // run onMount once

  return (
    <>
      <div className="my-2 p-12 shadow-lg rounded-lg xmax-w-md max-w-full mx-auto ">
        <form onSubmit={submitPost}>
          <h1 className="text-2xxl font-bold">
            {post.hasOwnProperty("id") ? "Edit your post" : "Create a new post"}
          </h1>
          <div className="py-2">
            <h3 className="text-lg font-base py-2">Description</h3>
            <textarea
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              } // spread it and only add the description value
              className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-sm sm:h-48 md:h-36 lg:h-20"
            ></textarea>
            {post.description && (
              <p
                className={`text-cyan-600 font-medium text-sm ${
                  post.description.length > 300 ? "text-red-600" : ""
                }`}
              >
                {post.description.length}/300
              </p>
            )}
          </div>
          <button
            type="submit"
            className=" btn-primary w-full p-2 xmax-w-md"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="my-12 text-lg font-medium">
        <h2 className=" xtext-2xl">See what other people are saying</h2>
        <Message></Message>
        {allPosts.map((post) => {
          return (
            <Message
              {...post}
              key={post.id}
            >
              <Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
                <button>
                  {post.comments?.length > 0
                    ? `${post.comments?.length} comments`
                    : `0 comment`}
                </button>
              </Link>
            </Message>
          );
        })}
      </div>
    </>
  );
}
