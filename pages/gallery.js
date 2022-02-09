import Navbar from "./component/navbar";
import Image from "next/image";
import Footer from "./component/footer";
const gallery = () => {
  return (
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
  );
};
export default gallery;
