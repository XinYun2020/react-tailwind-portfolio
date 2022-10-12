import { userAgent } from "next/server";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Message from "../components/Message";
import { BsTrash2Fill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);

  // console.log(user); // check what user have (user.uid)

  // if (loading) return <h1>Loading...</h1>;

  // /* IF LOGGED IN REDIREACT TO LOGIN PAGE  */
  // if (!user) route.push("/auth/login");
  // if (user)

  /* GET USER DATA */
  const getData = async () => {
    if (loading) return <h1>Loading...</h1>;
    if (!user) route.push("/auth/login");
    // console.log("Dashboard-getData");
    // if there is a user => get back all of the post

    /* Only show own post on the Dashboard page */
    const collectionRef = collection(db, "posts"); // this will get back everything
    /* another way to do this:  collection(db, "posts", id: user.uid); */
    const q = query(collectionRef, where("user", "==", user.uid)); // only get back the data of this user
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  // Get users data
  useEffect(() => {
    getData();
  }, [user, loading]); // rerender

  /* DELETE POST */
  const deletePost = async (id) => {
    // we have the reference of the collection, now we need the reference of the deleting document
    // start from the beginning doc, navigate to the post and id
    const docRef = doc(db, "posts", id); // if have sub collections => doc(db, 'post', id, 'moreInfo', doc )
    await deleteDoc(docRef);
  };

  return (
    <>
      <div className="my-12 text-lg font-medium">
        <h1>My Posts</h1>
        <div>
          {posts.map((post) => {
            return (
              <Message
                {...post}
                key={post.id}
              >
                <div className="flex gap-4">
                  <button
                    onClick={() => deletePost(post.id)}
                    className=" text-pink-600 flex items-center justify-center gap-2 py-2 text-sm"
                  >
                    <BsTrash2Fill className=" text-2xl" />
                    Delete
                  </button>
                  <Link href={{ pathname: "/post", query: post }}>
                    <button className=" text-slate-600 flex items-center justify-center gap-2 py-2 text-sm">
                      <AiFillEdit className=" text-2xl" />
                      Edit
                    </button>
                  </Link>
                </div>
              </Message>
            );
          })}
        </div>
        <button
          onClick={() => auth.signOut()}
          className="btn-primary my-6 bg-gradient-to-b from-cyan-600 to-slate-600"
        >
          Sign out
        </button>
      </div>
    </>
  );
}
