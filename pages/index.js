import Head from "next/head";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillWechat } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  FaHashtag,
  FaMoon,
  FaRegBell,
  FaSearch,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import deved from "../public/dev-ed-wave.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import useDarkMode from "../utils/hooks/useDarkMode";

export default function Home() {
  const TopNavigation = () => {
    return (
      <div className="top-navigation">
        <HashtagIcon />
        <Title />
        <ThemeIcon />
        <Search />
        <BellIcon />
        <UserCircle />
      </div>
    );
  };

  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size="24" className="top-navigation-icon" />
        ) : (
          <FaMoon size="24" className="top-navigation-icon" />
        )}
      </span>
    );
  };

  const Search = () => (
    <div className="search">
      <input className="search-input" type="text" placeholder="Search..." />
      <FaSearch size="18" className="text-secondary my-auto" />
    </div>
  );
  const BellIcon = () => (
    <FaRegBell size="24" className="top-navigation-icon" />
  );
  const UserCircle = () => (
    <FaUserCircle size="24" className="top-navigation-icon" />
  );
  const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
  const Title = () => <h5 className="title-text">tailwind-css</h5>;

  const ContentContainer = () => {
    return (
      <div className="content-container">
        <TopNavigation />
        <div className="content-list">
          <Post
            name="Ada"
            timestamp="one week ago"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
          />
          <Post
            name="H.U.N.K"
            timestamp="Just now"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
          />
        </div>
        <BottomBar />
      </div>
    );
  };

  const BottomBar = () => (
    <div className="bottom-bar">
      <PlusIcon />
      <input
        type="text"
        placeholder="Enter message..."
        className="bottom-bar-input"
      />
    </div>
  );

  const Post = ({ name, timestamp, text }) => {
    const seed = Math.round(Math.random() * 100);
    return (
      <div className={"post"}>
        <div className="avatar-wrapper">
          <Image
            src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
            className="avatar"
          />
        </div>

        <div className="post-content">
          <p className="post-owner">
            {name}
            <small className="timestamp">{timestamp}</small>
          </p>
          <p className="post-text">{text}</p>
        </div>
      </div>
    );
  };

  const PlusIcon = () => (
    <BsPlusCircleFill
      size="22"
      className="text-green-500 dark:shadow-lg mx-2 dark:text-primary"
    />
  );
  return (
    <div>
      <Head>
        <title>Xinyun Zhang Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative px-10 md:px-20 lg:px-40">
        {/* <nav className="bg-gradient-to-b from-white dark:from-gray-900 py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="text-xl font-burtons">DevelopedbyXinyunZhang</h1>
          <ul className="flex items-center ">
            <li>
              <a
                className=" font-burtons bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav> */}
        <section className="min-h-screen ">
          <div className=" text-center p-10 ">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium  dark:text-teal-400 md:text-6xl ">
              Xinyun Zhang
            </h2>
            <h3 className=" text-2xl py-2 dark:text-white md:text-3xl">
              Developer and Designer.
            </h3>
            <p className=" text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto">
              about me... about me... about me... about me... about me... about
              me... about me... about me... about me... about me... about me...
              about me... about me...
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/XinYun2020">
              <AiFillGithub className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/xinyun2020/">
              <AiFillLinkedin />
            </a>
            <AiFillWechat />
          </div>
          <div className="relative mx-auto ">
            <div className=" absolute top-12 left-36 justify-center align-middle text-[10em] font-bold opacity-10 ">
              Hello World.
            </div>
            <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden shadow-lg md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="relative">
          <div>
            <h3 className=" text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              to be updated with my list of
              <span className="text-teal-500"> skill sets </span>
              including{" "}
              <span className="text-teal-500">language, frameword. </span>
              ... and other relevent skills
            </p>
            <div className="lg:flex gap-10">
              <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={design} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs design theory.
                </p>
                <h4 className=" py-4 text-teal-600">Design tools I use</h4>
                <p className=" text-gray-800 py-1">Photoshop</p>
                <p className=" text-gray-800 py-1">Illustrator</p>
                <p className=" text-gray-800 py-1">Figma</p>
              </div>
              <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Tech Skills</h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs design theory.
                </p>
                <h4 className=" py-4 text-teal-600">Language and Framework</h4>
                <p className=" text-gray-800 py-1">TypeScript</p>
                <p className=" text-gray-800 py-1">JavaScript</p>
                <p className=" text-gray-800 py-1">SQL</p>
                <p className=" text-gray-800 py-1">Swift</p>
                <p className=" text-gray-800 py-1">Python</p>
              </div>
              <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={consulting} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Experience</h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs design theory.
                </p>
                <h4 className=" py-4 text-teal-600">Design tools I use</h4>
                <p className=" text-gray-800 py-1">Photoshop</p>
                <p className=" text-gray-800 py-1">Illustrator</p>
                <p className=" text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className=" text-3xl py-1  dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
