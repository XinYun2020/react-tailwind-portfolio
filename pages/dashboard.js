import { userAgent } from "next/server";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  if (loading) return <h1>Loading...</h1>;

  /* IF LOGGED IN REDIREACT TO LOGIN PAGE  */
  if (!user) route.push("/auth/login");
  if (user)
    // if logged in
    return (
      <>
        <div className="">
          <h1>
            Welcome to Your dashboard{" "}
            <span className=" text-teal-500">
              {user.displayName.toUpperCase()}
            </span>
          </h1>
          <button
            onClick={() => auth.signOut()}
            className="font-burtons bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          >
            Sign out
          </button>
        </div>
      </>
    );
}
