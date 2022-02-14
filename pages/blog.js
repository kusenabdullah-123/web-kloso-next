import Navbar from "./component/navbar";
import BlogArticle from "./component/blogarticle";
import AsideArticle from "./component/asidearticle";
import Footer from "./component/footer";
import Link from "next/link";
export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:1337/Blogs/");
  const blogs = await res1.json();
  return { props: { blogs } };
};
const blog = (props) => {
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
              {props.blogs
                ? props.blogs.map((data, index) => {
                    return (
                      <BlogArticle
                        key={index}
                        title={data.title}
                        image={data.image}
                        desc={data.desc}
                      />
                    );
                  })
                : null}
              {/* end Article */}
              <div className="page">
                <ul className="pagination">
                  <li className="page-item disable">
                    <span className="page-link"> Page 1 Of 36 </span>
                  </li>
                  <li className="page-item">
                    <Link href="/blog?page=2">
                      <a className="page-link">1</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/blog?page=2">
                      <a className="page-link">2</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/blog?page=2">
                      <a className="page-link">3</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/blog?page=2">
                      <a className="page-link">4</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/blog?page=2">
                      <a className="page-link">5</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/blog?page=2">
                      <a className="page-link">Next</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <aside className="col-lg-5">
            <section>
              <h1>Blog</h1>
              {/* aside article */}
              {/* {asideArticleData.map((aside, index) => {
                return (
                  <AsideArticle
                    key={index}
                    title={aside.title}
                    image={aside.image}
                    time={aside.time}
                  />
                );
              })} */}
            </section>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default blog;
