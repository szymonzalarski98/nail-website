import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const gtmId = "GTM-K6J97XJ";
  useEffect(() => {
    TagManager.initialize({ gtmId });
  }, []);
  return (
    <div className="bg-white">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
