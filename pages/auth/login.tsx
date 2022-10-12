import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BsFillLightningFill,
  BsGearFill,
  BsHash,
  BsPlus,
} from "react-icons/bs";
import {
  FaChevronDown,
  FaChevronRight,
  FaFire,
  FaPlus,
  FaPoo,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiTicTacToe } from "react-icons/gi";
import StepForm from "../../components/StepForm";
import TicTacToe from "../../components/TicTacToe";
import { auth } from "../../utils/firebase";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  /* SIGN IN WITH GOOGLE */
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  /* SIGN IN WITH FACEBOOK */
  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credantial = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credantial.accessToken; // access token for the login
      let photoUrl = result.user.photoURL + "?height=500&access_token=" + token; // height: 500 & access_token=token (add token to URL)
      await updateProfile(auth.currentUser, { photoURL: photoUrl }); // update modify name etc...

      console.log(result);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  /* IF LOGGED IN REDIREACT TO DASHBOARD  */
  useEffect(() => {
    if (user) route.push("/dashboard");

    console.log("login");
  }, [user]);

  /*COMPONENTS*/

  const ChannelBar = () => {
    return (
      <div className="channel-bar shadow-lg">
        <ChannelBlock />
        <div className="channel-container">
          <Dropdown
            header="Topics"
            selections={topics}
          />
          {/* <Dropdown header='Topics' selections={['tailwind-css', 'react']} /> */}
          <Dropdown
            header="Questions"
            selections={questions}
          />
          <Dropdown
            header="Random"
            selections={random}
          />
        </div>
      </div>
    );
  };

  const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(true);

    return (
      <div className="dropdown">
        <div
          onClick={() => setExpanded(!expanded)}
          className="dropdown-header"
        >
          <ChevronIcon expanded={expanded} />
          <h5
            className={
              expanded
                ? "dropdown-header-text-selected"
                : "dropdown-header-text"
            }
          >
            {header}
          </h5>
          <FaPlus
            size="12"
            className="text-accent text-opacity-80 my-auto ml-auto"
          />
        </div>
        {expanded &&
          selections &&
          selections.map((selection) => (
            <TopicSelection selection={selection} />
          ))}
      </div>
    );
  };

  const ChevronIcon = ({ expanded }) => {
    const chevClass = "text-accent text-opacity-80 my-auto mr-1";
    return expanded ? (
      <FaChevronDown
        size="14"
        className={chevClass}
      />
    ) : (
      <FaChevronRight
        size="14"
        className={chevClass}
      />
    );
  };

  const TopicSelection = ({ selection }) => (
    <div className="dropdown-selection">
      <BsHash
        size="24"
        className="text-gray-400"
      />
      <h5 className="dropdown-selection-text">{selection}</h5>
    </div>
  );

  const ChannelBlock = () => (
    <div className="channel-block">
      <h5 className="channel-block-text">Channels</h5>
    </div>
  );

  const SideBar = () => {
    return (
      <div
        className="fixed top-0 left-0 h-screen w-16 flex flex-col
                    bg-white dark:bg-gray-900 shadow-lg"
      >
        <SideBarIcon icon={<FaFire size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
      </div>
    );
  };

  const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
    <div
      className="relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2 mx-auto  
  dark:bg-gray-800 
  bg-gradient-to-r  from-cyan-700 to-teal-700 text-white
  hover:from-cyan-500 hover:to-teal-500
    hover:rounded-xl rounded-3xl
    transition-all duration-300 ease-linear
    cursor-pointer shadow-lg
     group"
    >
      {icon}
      <span
        class="absolute w-auto p-2 m-2 min-w-max right-14 rounded-md shadow-md
        text-white bg-gray-900 
        text-xs font-bold 
        transition-all duration-100 scale-0 origin-left;
        group-hover:scale-100"
      >
        {text}
      </span>
    </div>
  );

  const Divider = () => <hr className="sidebar-hr" />;

  const SideBarIconDropdown = ({ icon, ...props }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <div>
        <div onClick={() => setExpanded(!expanded)}>{icon}</div>
        {expanded && props.children && (
          <div
            className="shadow-xl xmt-32 p-10 text-gray-700 rounded-lg mx-auto absolute right-28 -top-56
          duration-300 ease-linear
          "
          >
            {props.children}
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="relative">
      <div className="absolute top-0 right-5">
        <SideBarIconDropdown
          icon={
            <SideBarIcon
              icon={<GiTicTacToe size="28" />}
              text={"A Match? 🤩"}
            />
          }
        >
          <TicTacToe />
        </SideBarIconDropdown>
        <Divider></Divider>
        <SideBarIconDropdown
          icon={
            <SideBarIcon
              icon={<BsFillLightningFill size="28" />}
              text={"Nothing For Now"}
            />
          }
        ></SideBarIconDropdown>
        <Divider></Divider>
      </div>
      <div className=" shadow-xl mt-32 p-10 text-gray-700 rounded-lg mx-auto w-80 md:w-96">
        <h2 className="text-3xl font-medium">Join Today</h2>
        <div className=" py-4">
          <h3 className=" py-4">Sign in with one of the providers</h3>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={GoogleLogin}
            className=" text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
          >
            <FcGoogle className=" text-2xl" />
            Sign in with Google
          </button>
          {/* <button
            onClick={FacebookLogin}
            lassName=" text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
          >
            <AiFillFacebook className=" text-2xl text-blue-400" />
            Sign in with Facebook
          </button> */}
        </div>
      </div>

      <div
        className=" relative my-32 p-10 rounded-lg mx-auto w-1/2 
      border border-gray-300 shadow-xl 
      text-gray-700 min-w-fit max-w-fit
      "
      >
        <StepForm />
      </div>
    </div>
  );
}
