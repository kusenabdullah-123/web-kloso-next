import Navbar from "./component/navbar";
import Header from "./component/header";
import SectionProgamKerja from "./component/sectionProgam";
import Benefit from "./component/benefit";
import HomeService from "./component/homeService";
import Blog from "./component/blog";
import Footer from "./component/footer";
import Script from "next/script";
import axios from "axios";
export const getStaticProps = async () => {
  const response = await axios.get("http://localhost:1337/Prokers/");
  const response2 = await axios.get("http://localhost:1337/Blogs/");
  const proker = response.data;
  const blogs = response2.data;

  return { props: { proker, blogs } };
};

export default function Home({ proker, blogs }) {
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
        <Header />
        {/* section progam kerja */}
        <SectionProgamKerja prokers={proker} />
        {/* benefit */}
        <Benefit />
        {/* services Home */}
        <HomeService />
        {/* blog */}
        <Blog blogs={blogs} />
        {/* footer */}
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" />
      </div>
    </section>
  );
}
