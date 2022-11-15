import React from "react";

const articles = () => {
  return (
    <>
      <main className="justify-center align-middle text-center dark:bg-gray-800">
        <div className=" dark:bg-gray-700 bg-gray-400 bg-opacity-10">
          <div className="py-12"></div>
          <div className="text-5xl font-bold font-burtons">Articles</div>
          <div className="text-[14em]  font-bold font-burtons opacity-20">
            Newest
          </div>
          <div className=" text-lg font-light font-burtons">
            by Xinyun Zhang
          </div>
          <div className="py-12"></div>
        </div>

        <section className="bg-white dark:bg-gray-900 dark:bg-opacity-20 relative align-middle justify-center text-center my-auto">
          <ul className=" tabs w-full h-12 ">
            <li className="py-2 px-4 h-fit my-auto mx-auto border-b max-w-fit">
              TypeScript
            </li>
          </ul>
          <div
            className="mx-12
            divide-y-2 divide-gray-900 divide-opacity-10 divide-dashed 
           dark:divide-white dark:divide-opacity-10 dark:divide-dashed
          "
          >
            {[...Array(3)].map((e, i) => (
              <div key={`article-${i}`}>
                <div className="py-4"></div>
                <div className="uppercase font-bold text-3xl font-burtons">
                  Title
                </div>
                <div className=" font-base text-md">CreateData</div>
                <div className="py-3"></div>
                <div className=" font-base">Brief</div>
                <div className="py-3"></div>
                <button className="text-400 bg-transparent shadow-lg border-2 border-white border-opacity-10 px-4 py-2 rounded-lg">
                  Read More
                </button>
                <div className="py-4"></div>
                {/* {i !== 2 && (
                <div className="h-1 mx-12 bg-gray-900 dark:bg-white opacity-10 rounded-full"></div>
              )} */}
              </div>
            ))}
          </div>
        </section>

        <div className=" dark:bg-gray-700 bg-gray-400 bg-opacity-10">
          <div className="py-6"></div>

          <div className="font-bold text-lg font-burtons">
            Subscribe to articles by Xinyun Zhang
          </div>
          <p className="text-sm">Reason why should follow/subscribe me</p>
          <div className="py-2"></div>

          <div className=" h-8 overflow-hidden">
            <input type="text" className=" h-8 pl-2"></input>
            <button className=" inline-block btn-primary rounded-none">
              Sign Up
            </button>
          </div>

          <div className="py-2"></div>

          <p className=" text-[.75em]">
            Only original content from Xinyun Zhang. Never gonna have spam.
          </p>
          <div className="py-6"></div>
        </div>
      </main>
    </>
  );
};

export default articles;
