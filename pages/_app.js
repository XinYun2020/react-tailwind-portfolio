import "../styles/globals.css";
import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer limit={1} /> {/* limit to only one at a time */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
