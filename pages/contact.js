import React from "react";
import { ME } from "../src/constant/index";

const contact = () => {
  const { name, email, phone } = ME;

  return (
    <>
      <main className=" p-8 pt-14 text-center justify-center align-middle h-screen">
        <div className=" text-[#F7C86F] font-extrabold text-6xl uppercase py-2 font-burtons">
          {name}
        </div>
        <div>
          {email} | {phone}
        </div>
        <div className="py-6"></div>
        <div className=" flex flex-row gap-4 justify-center  py-2">
          <div className="left">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((e, i) => (
                <div
                  key={i}
                  className=" w-16 h-16 bg-white bg-opacity-25
                  hover:rounded-xl rounded-3xl
                transition-all duration-200 ease-in-out
                cursor-pointer shadow-lg
                  "
                >
                  skill
                </div>
              ))}
            </div>
          </div>
          <div className="gap px-4"></div>
          <div className="right my-auto">
            <button>
              <div
                className=" justify-center align-middle w-48 h-48 bg-white bg-opacity-25
              rounded-full
                              ring-0 hover:ring  hover:ring-teal-400 hover:ring-offset-2 
                              transition-all duration-200 ease-in-out
                              cursor-pointer shadow-lg"
              >
                <p className="">Download My Resume</p>
              </div>
            </button>
          </div>
        </div>
        <div className="py-6"></div>
        <div className="text-white uppercase text-md font-bold hover:text-teal-400 cursor-pointer">
          BACK TO MY WORK
        </div>
      </main>
      <footer className=" text-center">
        <div>LinkdIn</div>
        <div>Email | Phone</div>
        <div>@2023 by Xinyun Zhang</div>
      </footer>
    </>
  );
};

export default contact;
