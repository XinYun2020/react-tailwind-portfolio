import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  /* IF LOGGED IN REDIREACT TO DASHBOARD  */
  useEffect(() => {
    if (user) route.push("/dashboard");

    console.log("login");
  }, [user]);

  return (
    <>
      <div className=" shadow-xl mt-32 p-10 text-gray-700 rounded-lg mx-auto w-80 md:w-96">
        <h2 className="text-3xl font-medium">Join Today</h2>
        <div className=" py-4">
          <h3 className=" py-4">Sign in with one of the providers</h3>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              console.log("should login");
            }}
            className=" text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
          >
            <FcGoogle className=" text-2xl" />
            Sign in with Google
          </button>
        </div>
      </div>
      <div className=" shadow-xl mt-32 p-10 text-gray-700 rounded-lg mx-auto xw-96  "></div>
    </>
  );
}
