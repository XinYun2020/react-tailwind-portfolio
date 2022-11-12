import React from "react";

const articles = () => {
  return (
    <>
      <main className="justify-center align-middle text-center">
        <div className=" dark:bg-gray-700">
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
          <div>
            <div className="py-4"></div>
            <div className="uppercase font-bold text-3xl">Title</div>
            <div className=" font-base text-md">CreateData</div>
            <div className="py-3"></div>
            <div className=" font-base">Brief</div>
            <div className="py-3"></div>
            <button className="btn-primary">Read More...</button>
            <div className="py-4"></div>
          </div>
        </section>
        <div>
          <div className="py-4"></div>

          <div>Subscribe to articles by Xinyun Zhang</div>
          <p>reason why should follow/subscribe me</p>
          <input type="text"></input>
          <button className=" inline-block">Sign Up</button>
          <p className=" text-sm">
            Only original content from Xinyun Zhang. Never gonna have spam.
          </p>
        </div>
      </main>
    </>
  );
};

export default articles;
