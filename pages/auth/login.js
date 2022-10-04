import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";

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

  return (
    <>
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
    </>
  );
}
