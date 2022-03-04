import Navbar from "./component/navbar";
import Heads from "./component/heads";
import HomeService from "./component/homeService";
import Image from "next/image";
import Script from "next/script";
import Footer from "./component/footer";
const services = () => {
  return (
    <>
      <Heads />
      <div>
        {/* Navabr */}
        <Navbar />

        {/* Home Service */}
        <HomeService />
        {/* order service */}
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
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                      </span>
                      Developing Web
                    </p>
                    <p className="d-flex align-items-center check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                      </span>
                      Database
                    </p>
                    <p className="d-flex align-items-center no-check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
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
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                      </span>
                      Corel Draw
                    </p>
                    <p className="d-flex align-items-center check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                      </span>
                      PhotoShop
                    </p>
                    <p className="d-flex align-items-center check">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                      </span>
                      Figma
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
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                      </span>
                      Install Ulang
                    </p>
                    <p className="d-flex align-items-center check text-white">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                      </span>
                      Install Software
                    </p>
                    <p className="d-flex align-items-center check text-white">
                      <span className="span-icon d-inline-flex align-items-center justify-content-center flex-shrink-0">
                        <Image
                          src="/centang.png"
                          alt="centang-icon"
                          className="img-fluid"
                          width={20}
                          height={20}
                        />
                      </span>
                      Perbaikan
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
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" />
    </>
  );
};
export default services;
