import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../contexts/ThemeContext";

// export const ThemeContext = React.createContext();

export default function Nav() {
  const [user, loading] = useAuthState(auth); // do we have a user
  const { darkMode, setDarkMode } = useTheme();

  // console.log(user);

  return (
    <>
      <nav
        className="flex justify-between items-center py-2 px-4
        bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50
     sticky top-0 left-0 right-0 z-50
      "
      >
        {/* <img src={logo} alt="mylogo" className="w-[124px] h-[32px]"></img> */}

        <ul className="flex flex-row items-center gap-4 list-none sm:flex xhidden">
          {/* {navLinks.map((nav, i) => (
            <li key={nav.id} className={`font-normal `}>
              <Link href={nav.link}></Link>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))} */}

          <Link href={"/"}>
            <a className="text-xl font-burtons">x. z </a>
          </Link>

          <Link href={"/"}>
            <a className="text-xl font-burtons">DevelopedbyXinyunZhang</a>
          </Link>
          <Link href={"/"}>
            <a className="font-burtons align-baseline">About me</a>
          </Link>
        </ul>

        <ul className="flex gap-4 flex-row items-center align-middle">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl "
          >
            <BsFillMoonStarsFill />
          </button>
          <Link href={"/resume"}>
            <a
              className="btn-primary"
              // href="#"
            >
              Resume
            </a>
          </Link>
          {!user && (
            <Link href={"/auth/login"}>
              <a className="btn-primary">Join now</a>
            </Link>
          )}
          {user && (
            <>
              <Link href="/post">
                <button className="btn-primary">Post</button>
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
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
