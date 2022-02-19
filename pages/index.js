import Navbar from "./component/navbar";
import Header from "./component/header";
import SectionProgamKerja from "./component/sectionProgam";
import Benefit from "./component/benefit";
import HomeService from "./component/homeService";
import Blog from "./component/blog";
import Footer from "./component/footer";
import Script from "next/script";
import Cookie from "js-cookie";
import { useState, useEffect, useContext } from "react";
import AppContext from "../context/appContext";
import axios from "axios";

export const getStaticProps = async () => {
  const url = process.env.SERVER || "http://localhost:1337/";
  const cloud_server =
    process.env.CLOUD || "https://kloso-strapi-mongo.herokuapp.com/";
  const response = await axios.get(
    "https://kloso-strapi-mongo.herokuapp.com/Prokers/"
  );
  const response2 = await axios.get(
    "https://kloso-strapi-mongo.herokuapp.com/Blogs/"
  );
  const proker = response.data;
  const blogs = response2.data;
  return { props: { proker, blogs } };
};

export default function Home({ proker, blogs }) {
  const url = process.env.SERVER || "http://localhost:1337/";
  const cloud_server =
    process.env.CLOUD || "https://kloso-strapi-mongo.herokuapp.com/";
  const [user, setUser] = useState(null);
  const [foto, setFoto] = useState("/profile.png");
  const contex = useContext(AppContext);
  useEffect(async () => {
    const token = Cookie.get("token");
    if (token) {
      try {
        const res = await axios.get(`${cloud_server}Users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status == 200) {
          contex.isAuthenticated = true;
          contex.user = res.data;

          setUser(res.data);
        }
      } catch (error) {
        contex.isAuthenticated = false;
        setUser(null);
        Cookie.remove("token");
      }
    } else {
      contex.isAuthenticated = false;
      setUser(null);
    }
  }, []);
  useEffect(async () => {
    const token = Cookie.get("token");

    if (user !== null && user.anggota_id !== undefined) {
      const response = await axios.get(
        `${cloud_server}Anggotas/${user.anggota_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      contex.foto = `${response.data.foto.url}`;
      setFoto(`${response.data.foto.url}`);
    }
  });
  return (
    <AppContext.Provider
      value={{
        isAuthenticated: !!user,
        user: user,
        foto: foto,
      }}
    >
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
        </div>
      </section>
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
    </AppContext.Provider>
  );
}
