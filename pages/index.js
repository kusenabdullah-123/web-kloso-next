import Navbar from "./component/navbar";
import Header from "./component/header";
import SectionProgamKerja from "./component/sectionProgam";
import Benefit from "./component/benefit";
import HomeService from "./component/homeService";
import Blog from "./component/blog";
import Footer from "./component/footer";
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/Prokers/");

  const proker = await res.json();
  return { props: { proker } };
};

export default function Home(props) {
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
        <SectionProgamKerja />
        {/* benefit */}
        <Benefit />
        {/* services Home */}
        <HomeService />
        {/* blog */}
        <Blog />
        {/* footer */}
        <Footer />
      </div>
    </section>
  );
}
