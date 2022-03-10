import Navbar from "./component/navbar";
import Image from "next/image";
import Footer from "./component/footer";
import Unauthorized from "./component/unauthorized";
import { useContext, useState, useEffect } from "react";
import AppContext from "../context/appContext";
import Cookie from "js-cookie";
import axios from "axios";

const gallery = () => {
  const contex = useContext(AppContext);
  const cloud_server =
    process.env.CLOUD || "https://kloso-strapi-mongo.herokuapp.com/";
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const token = Cookie.get("token");
    if (token) {
      try {
        // contex.isAuthenticated = true;
        const response = await axios.get(`${cloud_server}Galleries/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return contex.isAuthenticated ? (
      <>
        <Navbar />
        <header className="d-flex justify-content-center">
          <h1>Gallery</h1>
        </header>
        <section style={{ height: "100vh" }} className="p-3">
          <div className="row">
            {images.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <Image
                    priority
                    src={item.image.url}
                    className="w-100 shadow-1-strong rounded mb-"
                    alt={item.alt}
                    width={464}
                    height={261}
                  />
                </div>
              );
            })}
            {/* <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <Image
              src="/fullstack.jpg"
              className="w-100 shadow-1-strong rounded mb-"
              alt="water"
              width={464}
              height={261}
            />
          </div> */}
          </div>
        </section>

        <Footer />
      </>
    ) : (
      <Unauthorized />
    );
  }
};
export default gallery;
