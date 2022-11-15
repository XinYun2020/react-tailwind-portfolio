import React from "react";

const meta = () => {
  return (
    <>
      <main className="px-24 py-12">
        <div>
          <div className=" font-burtons">meta.</div>
        </div>
        <div className="py-6"></div>
        <div className="grid grid-cols-3 gap-4 h-32">
          <div className=" col-span-1 bg-teal-400 w-full h-full shadow-lg rounded-lg"></div>
          <div className=" col-span-2 dark:bg-white w-full h-full shadow-lg rounded-lg dark:bg-opacity-20 bg-slate-700 text-white">
            <div className="grid grid-cols-2 gap-4 h-full p-4">
              {[...Array(4)].map((e, i) => (
                <div className="col-span-1 xbg-white w-full h-full ">
                  <div>TITLE</div>
                  <div>DESC.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-6"></div>

        <section>
          <div>Configure your gestures</div>
          <div className="py-4"></div>

          <div className="btn-group flex flex-row gap-4 text-center justify-center align-middle h-12">
            <button className=" shadow-lg rounded-full w-fit h-full px-4 py-2 bg-gray-900 bg-opacity-5 dark:bg-opacity-20 dark:bg-white hover:bg-teal-400">
              Left Hand
            </button>
            <button className=" shadow-lg rounded-full w-fit h-full px-4 py-2 bg-gray-900 bg-opacity-5 dark:bg-opacity-20 dark:bg-white hover:bg-teal-400">
              Right Hand
            </button>
            <button className=" shadow-lg rounded-full w-12 h-full px-4 py-2 bg-gray-900 bg-opacity-5 dark:bg-opacity-20 dark:bg-white hover:bg-teal-400">
              btn
            </button>
          </div>
          <div className="py-4"></div>

          <div className="relative w-fit m-6 inline-flex">
            <div className="img-container w-96 h-20 bg-teal-400 rounded-lg shadow-2xl border border-white mx-auto "></div>
            <div
              className="absolute inline-block top-auto left-auto bottom-0 right-0 
            translate-x-2/4 -translate-y-2/4
            rounded-full w-12 h-12 bg-white z-10"
            >
              +
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default meta;
