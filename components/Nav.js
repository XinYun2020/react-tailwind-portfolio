import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export const ThemeContext = React.createContext();

export default function Nav() {
  const [user, loading] = useAuthState(auth); // do we have a user

  // console.log(user);

  return (
    <>
      <nav className="flex justify-between items-center py-10 ">
        <ul className="flex flex-row items-center gap-4">
          <Link href={"/"}>
            <a className="text-xl font-burtons">DevelopedbyXinyunZhang</a>
          </Link>
          <Link href={"/"}>
            <a className="font-burtons align-baseline">About me</a>
          </Link>
        </ul>

        <ul className="flex">
          <Link href={"/resume"}>
            <a
              className="btn-primary font-burtons ml-8 text-base"
              // href="#"
            >
              Resume
            </a>
          </Link>
          {!user && (
            <Link href={"/auth/login"}>
              <a className="btn-primary font-burtons ml-8 text-base">
                Join now
              </a>
            </Link>
          )}
          {user && (
            <div className="flex flex-row items-center align-middle gap-4">
              <Link href="/post">
                <button className=" btn-primary">Post</button>
              </Link>

              <h2 className="font-burtons my-auto">{user.displayName}</h2>
              {/* <span className="cursor-pointer"> */}
              <Link href={"/dashboard"}>
                <img
                  src={user.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                  className="rounded-full w-12 cursor-pointer"
                />
              </Link>
              {/* </span> */}
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}
