import Navbar from "./component/navbar";
// import Image from "next/image";

import Footer from "./component/footer";
import Unauthorized from "./component/unauthorized";
import { useContext } from "react";
import AppContext from "../context/appContext";
const gallery = () => {
  const { isAuthenticated } = useContext(AppContext);
  return isAuthenticated ? (
    <section
      className="h-100 w-100 bg-white"
      style={{ boxSizing: "border-box" }}
    >
      <div
        className="container-xxl mx-auto p-0 position-relative header-2-2"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {/* navbar */}
        <Navbar />
        {/* header */}

        {/* footer */}
        <Footer />
      </div>
    </section>
  ) : (
    <Unauthorized />
  );
};
export default gallery;
