import Link from "next/link";
import Head from "next/head";
import { BsFillCartFill, BsPersonFill } from "react-icons/bs";
import { AiOutlineBarcode, AiFillHome } from "react-icons/ai";
import { GoBell } from "react-icons/go";

export default function Nav() {
  const hoverStyle = `hover:text-blue-500`;

  const NavDropdown = (props) => {
    return <li className="">dropdowns{props.children}</li>;
  };
  return (
    <>
      <nav className="flex justify-between items-center shadow-md px-2">
        <ul className="flex flex-row gap-3 align-middle ">
          <li>
            <Link href={"/"}>TILLIE</Link>
          </li>
          <li className="text-lg pt-1">
            <AiFillHome />
          </li>
          <NavDropdown></NavDropdown>
          <NavDropdown></NavDropdown>
          <NavDropdown></NavDropdown>
          <NavDropdown></NavDropdown>
          <NavDropdown></NavDropdown>
          <NavDropdown></NavDropdown>
        </ul>

        <ul className="flex flex-row gap-6 align-middle text-lg pt-3">
          <li className={`${hoverStyle} `}>
            <AiOutlineBarcode />
          </li>
          <li>
            <BsFillCartFill />
          </li>
          <li className="relative ">
            <GoBell />
            <span className=" absolute -top-3 -right-4 justify-center items-center w-7 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white text-sm text-center">
              10
            </span>
          </li>

          <li className="flex flex-row align-middle gap-1 ">
            <BsPersonFill className=" text-xl" />
            <span className="my-auto relative -top-1">Alice</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
