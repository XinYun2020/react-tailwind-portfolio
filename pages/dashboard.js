import { useRouter } from "next/router";

export default function Dashboard() {
  const route = useRouter();
  // if logged in
  return (
    <>
      <div className="">
        <h1>
          Welcome to Your dashboard <span className=" text-teal-500"></span>
        </h1>
        <button
          onClick={() => {}}
          className="font-burtons bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        >
          Sign out
        </button>
      </div>
    </>
  );
}
