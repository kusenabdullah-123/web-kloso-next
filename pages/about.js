import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Image from "next/image";
import { Icon } from "@iconify/react";
const about = () => {
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
        {/* main */}
        <section className="gallery container-fluid row justify-content-center pe-4 ps-4 mt-4 mb-5">
          <h1 className="text-center">Struktur Organisasi UKM K.L.O.S.O</h1>
          <Image src="/struktur kloso-1.png" alt="" height={600} width={500} />
        </section>
        <section
          className="h-100 w-100 bg-white"
          style={{ boxSizing: "border-box", marginBottom: 40 }}
        >
          <div
            className="container-xxl mx-auto p-0 position-relative header-2-2"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <div>
              <div
                className="mx-auto d-flex flex-lg-row flex-column hero"
                style={{ backgroundColor: "#4d9651" }}
              >
                {/* Left Column */}
                <div
                  className="d-flex flex-lg-grow-1 flex-column align-items-lg-center text-lg-center align-items-center text-center"
                  style={{ margin: "auto" }}
                >
                  <h1
                    className="title-text-big text-white"
                    style={{ fontSize: 30 }}
                  >
                    Gabung Menjadi Bagian Kami?
                  </h1>
                  <a
                    className="btn btn-success"
                    href="Form/index.html"
                    role="button"
                    style={{
                      width: 198,
                      height: 48,
                      backgroundColor: "#f3fff4",
                      color: "#4d9651",
                      border: "none",
                      borderRadius: 10,
                      fontSize: 22,
                    }}
                  >
                    Daftar
                  </a>
                </div>
                {/* Right Column */}
                <div className="right-column row text-center d-flex pe-0">
                  <div
                    className="image"
                    style={{ marginLeft: 15, marginRight: 15 }}
                  >
                    <Image
                      id="img-fluid"
                      width={300}
                      height={75}
                      src="/footer.png"
                      alt=""
                    />
                  </div>
                  <p style={{ fontSize: 12, color: "#fff" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi aliquid quia veniam architecto numquam sed
                    voluptates quod esse dolor in, magnam atque repellat
                    recusandae aspernatur nihil sapiente nam doloribus aut.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      margin: 5,
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ margin: 5, color: "#fff" }}>
                      <Icon
                        icon="bi:github"
                        width="50"
                        height="30"
                        inline={true}
                      />
                      <p style={{ fontSize: 10, color: "#fff" }}>
                        klosoStikomBwi
                      </p>
                    </div>
                    <div style={{ margin: 5, color: "#fff" }}>
                      <Icon
                        icon="entypo-social:instagram-with-circle"
                        width="30"
                        height="30"
                        inline={true}
                      />
                      <p style={{ fontSize: 10, color: "#fff" }}>
                        kloso_stikombwi
                      </p>
                    </div>
                    <div style={{ margin: 5, color: "#fff" }}>
                      <Icon
                        icon="entypo-social:youtube-with-circle"
                        width="30"
                        height="30"
                        inline={true}
                      />
                      <p style={{ fontSize: 10, color: "#fff" }}>
                        KLOSO STIKOM PGRI BWI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer />
      </div>
    </section>
  );
};
export default about;
