import Message from "../components/message";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { toast } from "react-toastify";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

export default function Details() {
  const router = useRouter(); // Define router
  const routeData = router.query;
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessages] = useState([]);

  /* Submit a message */
  const submitMessage = async () => {
    //Check if the user is logged
    if (!auth.currentUser) return router.push("/auth/login");

    if (!message) {
      // console.log(message);/
      toast.error("Don't leave an empty message 😅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return;
    }
    const docRef = doc(db, "posts", routeData.id); // routeData.id go to the one post that we are on
    await updateDoc(docRef, {
      // second argument, is the update we want to do to it
      // new comments in the database

      // arrayUnion: push in a object to a new array
      // if we update more info it will update too
      comments: arrayUnion({
        message, // push in the message in this input
        avatar: auth.currentUser.photoURL, // current user information
        userName: auth.currentUser.displayName,
        time: Timestamp.now(), // whenever they posted the comment
      }),
    });
    setMessage(""); // reset the message
  };

  /* Get Comments */
  const getComments = async () => {
    const docRef = doc(db, "posts", routeData.id);
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      setAllMessages(snapshot.data().comments);
    });

    /* Alternatively - Only get once, dont have the live update */
    // const docSnap = await getDoc(docRef);
    // setAllMessages(docSnap.data().comments);
    return unsubscribe;
  };

  useEffect(() => {
    if (!router.isReady) return; // dont comment if dont have the access to the document
    getComments();
  }, [router.isReady]);
  return (
    <div>
      <Message {...routeData}></Message>
      <div className="my-4">
        <div className="flex">
          <input
            onChange={(e) => setMessage(e.target.value)}
            type={`text`}
            value={message}
            placeholder="Send a message 😀"
            className="bg-gray-800 w-full p-2 text-white text-sm xrounded-md pl-4"
          />
          <button
            onClick={submitMessage}
            className="btn-primary
            hover:rounded-3xl rounded-none
            transition-all duration-100 ease-in
            cursor-pointer shadow-lg
             "
          >
            Submit
          </button>
        </div>
        <div className="py-6">
          <h2 className="font-bold">Comments</h2>
          {allMessage?.map((message) => (
            <div
              className="bg-white p-4 my-4 border-2 xshadow-md"
              key={message.time}
            >
              <div className="flex items-center gap-2 mb-4">
                <img
                  className="w-10 rounded-full"
                  src={message.avatar}
                  alt=""
                />
                <h2>{message.userName}</h2>
              </div>
              <h2>{message.message}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
