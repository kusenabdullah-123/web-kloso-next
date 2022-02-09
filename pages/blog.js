import Navbar from "./component/navbar";
import BlogArticle from "./component/blogarticle";
import AsideArticle from "./component/asidearticle";
import Footer from "./component/footer";
const blog = () => {
  const dataArticle = [
    {
      image: "gambar.png",
      title:
        "Daftar Tim, Grup, Format, Jadwal, dan Cara Nonton PMPL SEAChampionship S4",
      desc: "20 tim PUBG Mobile terbaik se-Asia Tenggara sudah siap memperebutkan total prize pool senilai Rp2,8 miliar di PMPL SEA Championship S4 mulai pekan depan.",
    },
    {
      image: "gambar.png",
      title:
        "Daftar Tim, Grup, Format, Jadwal, dan Cara Nonton PMPL SEAChampionship S4",
      desc: "20 tim PUBG Mobile terbaik se-Asia Tenggara sudah siap memperebutkan total prize pool senilai Rp2,8 miliar di PMPL SEA Championship S4 mulai pekan depan.",
    },
  ];
  const asideArticleData = [
    {
      time: "2 days ago",
      image: "gambar.png",
      title: "11 game pc yang lagi rame berdasarkan jumlah pemain di steam",
    },
  ];
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
        </div>
      </section>
      <div className="container-fluid row article mt-4">
        <div className="content col-lg-12 col-md-12 row">
          <section className="mt-3 col-lg-7">
            <h1>Blog Terbaru</h1>
            <div className="articles">
              {/* article */}
              {dataArticle.map((data, index) => {
                return (
                  <BlogArticle
                    key={index}
                    title={data.title}
                    image={data.image}
                    desc={data.desc}
                  />
                );
              })}
              {/* end Article */}
              <div className="page">
                <ul className="pagination">
                  <li className="page-item disable">
                    <span className="page-link"> Page 1 Of 36 </span>
                  </li>
                  <li className="page-item">
                    <a href="/blog?page=2" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="/blog?page=2" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="/blog?page=2" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="/blog?page=2" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="/blog?page=2" className="page-link">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="/blog?page=2" className="page-link">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <aside className="col-lg-5">
            <section>
              <h1>Blog</h1>
              {/* aside article */}
              {asideArticleData.map((aside, index) => {
                return (
                  <AsideArticle
                    key={index}
                    title={aside.title}
                    image={aside.image}
                    time={aside.time}
                  />
                );
              })}
            </section>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default blog;
