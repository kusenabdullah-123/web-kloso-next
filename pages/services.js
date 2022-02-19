import Navbar from "./component/navbar";
import Image from "next/image";
import Footer from "./component/footer";
const services = () => {
  return (
    <>
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
          <section
            className="h-100 w-100 bg-white"
            style={{ boxSizing: "border-box" }}
          >
            <div
              className="container-xxl mx-auto p-0 position-relative header-2-2"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <div>
                <div
                  className="mx-auto d-flex flex-lg-row flex-column hero"
                  style={{ backgroundColor: "#62b867" }}
                >
                  {/* Left Column */}
                  <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
                    <h1 className="title-text-big text-white">
                      Develope Website Kamu Sendiri
                    </h1>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas cum debitis rerum sequi exercitationem vitae
                      autem eligendi laboriosam impedit voluptates aut
                      dignissimos asperiores fugiat, repellat perferendis. Sit
                      reiciendis fugit fuga.
                    </p>
                    <button
                      className="btn btn-success"
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
                      Book Now
                    </button>
                  </div>
                  {/* Right Column */}
                  <div className="right-column text-center d-flex justify-content-center pe-0">
                    <Image
                      id="img-fluid"
                      className="h-auto mw-100"
                      src="/Saly-31.png"
                      width={578}
                      alt=""
                      height={457}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section
        className="h-100 w-100"
        style={{ boxSizing: "border-box", backgroundColor: "#f2f6ff" }}
      >
        <div
          className="content-3-7 overflow-hidden container-xxl mx-auto position-relative"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <div className="container mx-auto">
            <div
              className="d-flex flex-column text-center w-100"
              style={{ marginBottom: "2.25rem" }}
            >
              <h2 className="title-text">Layanan Yang Kami Sediakan</h2>
              <p className="caption-text mx-auto">
                Pilih layanan terbaik kami sesuai kebutuhan anda dengan harga
                yang efisien dan pelayanan yang cepat
              </p>
            </div>
            <div className="d-flex flex-wrap">
              <div className="mx-auto card-item position-relative">
                <div className="card-item-outline bg-white d-flex flex-column position-relative overflow-hidden h-100">
                  <h2 className="price-title text-lg-center">Fullstack</h2>
                  <p className="price-caption">
                    Suitable for those of you
                    <br />
                    who are beginners
                  </p>
                  <div className="price-list">
                    <p className="d-flex align-items-center check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      Developing Web
                    </p>
                    <p className="d-flex align-items-center check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      Database
                    </p>
                    <p className="d-flex align-items-center no-check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      Mock Up
                    </p>
                  </div>
                  <a
                    className="btn btn-success"
                    href="https://api.whatsapp.com/send?phone=6283847068886&text=Saya%20Ingin%20Book%20Fullstack"
                    role="button"
                    style={{
                      width: 198,
                      height: 48,
                      backgroundColor: "#fff",
                      color: "#4d9651",
                      border: "#4d9651 1px solid",
                      borderRadius: 10,
                      fontSize: 22,
                    }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
              <div className="mx-auto card-item position-relative">
                <div className="card-item-outline bg-white d-flex flex-column position-relative overflow-hidden h-100">
                  <h2 className="price-title text-lg-center">UI/UX Design</h2>
                  <p className="price-caption">
                    Suitable for those of you
                    <br />
                    who want to grow
                  </p>
                  <div className="price-list">
                    <p className="d-flex align-items-center check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      Corel Draw
                    </p>
                    <p className="d-flex align-items-center check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      PhotoShop
                    </p>
                    <p className="d-flex align-items-center check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      Figma
                    </p>
                  </div>
                  <a
                    className="btn btn-success"
                    href="https://api.whatsapp.com/send?phone=6283847068886&text=Saya%20ingin%20pesan%20UI/UX%20Design"
                    role="button"
                    style={{
                      width: 198,
                      height: 48,
                      backgroundColor: "#fff",
                      color: "#4d9651",
                      border: "#4d9651 1px solid",
                      borderRadius: 10,
                      fontSize: 22,
                    }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
              <div className="mx-auto card-item position-relative">
                <div
                  className="card-item-outline d-flex flex-column position-relative overflow-hidden h-100"
                  style={{ backgroundColor: "#4d9651" }}
                >
                  <h2 className="price-title text-white text-lg-center">
                    Service Laptop/Smartphone
                  </h2>
                  <p
                    className="price-caption"
                    style={{ color: "rgb(192, 189, 189)" }}
                  >
                    Suitable to make your
                    <br />
                    company grow rapidly
                  </p>
                  <div className="price-list">
                    <p className="d-flex align-items-center check text-white">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      Install Ulang
                    </p>
                    <p className="d-flex align-items-center check text-white">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      Install Software
                    </p>
                    <p className="d-flex align-items-center check text-white">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          className="img-fluid"
                          src="/centang.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </span>
                      Perbaikan
                    </p>
                  </div>
                  <a
                    className="btn btn-success"
                    href="https://api.whatsapp.com/send?phone=6283847068886&text=Saya%20ingin%20service%20Laptop %20SmartPhone"
                    role="button"
                    style={{
                      width: 198,
                      height: 48,
                      backgroundColor: "#fff",
                      color: "#4d9651",
                      border: "#4d9651 1px solid",
                      borderRadius: 10,
                      fontSize: 22,
                    }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};
export default services;
