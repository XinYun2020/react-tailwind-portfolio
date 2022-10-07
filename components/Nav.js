import Link from "next/link";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Nav() {
  const [user, loading] = useAuthState(auth); // do we have a user

  return (
    <>
      <nav className="flex justify-between items-center py-10 xbg-gradient-to-b xfrom-cyan-50">
        <ul className="flex flex-row gap-4">
          <Link href={"/"}>Logo</Link>
          <Link href={"/"}>About me</Link>
        </ul>
        <ul>
          {!user && (
            <Link href={"/auth/login"}>
              <a className=" font-burtons bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                Join now
              </a>
            </Link>
          )}
          {user && (
            <div className="flex flex-row align-middle gap-4">
              <h2 className=" font-burtons my-auto">Hi, {user.displayName}</h2>
              <span className="cursor-pointer">
                <Link href={"/dashboard"}>
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                    className="rounded-full w-12"
                  />
                </Link>
              </span>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}
