import Navbar from "./component/navbar";
import Header from "./component/header";
import SectionProgamKerja from "./component/sectionProgam";
import Benefit from "./component/benefit";
import HomeService from "./component/homeService";
import Image from "next/image";
export default function Home() {
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
        <section
          className="h-100 w-100 bg-white mb-5 mt-5"
          style={{ boxSizing: "border-box" }}
        >
          <div
            className="container-xxl mx-auto p-0 position-relative header-2-2"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <div>
              <div className="title-blog d-flex flex-row justify-content-center">
                <h1
                  style={{
                    fontSize: 22,
                    paddingBottom: 6,
                    margin: 50,
                    borderBottom: "#3d7d41 solid",
                    display: "inline-block",
                  }}
                >
                  Blog Terbaru
                </h1>
              </div>
              <div className="container-fluid">
                <div className="row justify-content-around">
                  <div
                    className="card col-lg-2 p-1"
                    style={{ borderRadius: 10 }}
                  >
                    <div className="image">
                      <Image
                        src="/IMG_9118.JPG"
                        className="card-img-top"
                        width={290}
                        height={190}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                  <div
                    className="card col-lg-2 p-1"
                    style={{ borderRadius: 10 }}
                  >
                    <div className="image">
                      <Image
                        src="/IMG_9118.JPG"
                        className="card-img-top"
                        width={290}
                        height={190}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                  <div
                    className="card col-lg-2 p-1"
                    style={{ borderRadius: 10 }}
                  >
                    <div className="image">
                      <Image
                        src="/IMG_9118.JPG"
                        className="card-img-top"
                        width={290}
                        height={190}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                  <div
                    className="card col-lg-2 p-1"
                    style={{ borderRadius: 10 }}
                  >
                    <div className="image">
                      <Image
                        src="/IMG_9118.JPG"
                        className="card-img-top"
                        width={290}
                        height={190}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <section
          style={{ boxSizing: "border-box", backgroundColor: "#4d9651" }}
        >
          <footer
            className="row m-0 p-0"
            style={{ backgroundColor: "#4d9651", height: 180 }}
          >
            <div className="col-lg-3 ps-5 row align-items-center">
              <Image src="/footer.png" width={216} height={57} />
            </div>
            <div className="col-lg-7 row align-items-center">
              <div className="row">
                <div className="col-lg-3" style={{ color: "white" }}>
                  <div className="title">
                    <h4>Services</h4>
                  </div>
                  <ul>
                    <li>Ui/Ux</li>
                    <li>Front-End Dev</li>
                    <li>Back-End Dev</li>
                    <li>Fullstack Dev</li>
                  </ul>
                </div>
                <div className="col-lg-3" style={{ color: "white" }}>
                  <h4>Blog</h4>
                  <ul>
                    <li>Program Kerja</li>
                    <li>Pertemuan Mingguan</li>
                  </ul>
                </div>
                <div className="col-lg-3" style={{ color: "white" }}>
                  <h4>Gallery</h4>
                  <ul>
                    <li>Foto Anggota</li>
                    <li>Foto Kegiatan</li>
                  </ul>
                </div>
                <div className="col-lg-3" style={{ color: "white" }}>
                  <h4>About</h4>
                  <ul>
                    <li>Susunan Kepengurusan</li>
                    <li>Kontak</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 row align-items-center">
              <div className="col-lg-5">
                <Image src="/logos.png" height={70} width={70} alt />
              </div>
              <div className="col-lg-5">
                <Image src="/logok.png" height={70} width={70} alt />
              </div>
            </div>
          </footer>
        </section>
      </div>
    </section>
  );
}
