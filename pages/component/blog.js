import CardBlogHome from "./cardBlogHome";
import Image from "next/image";
const blog = (props) => {
  return (
    <section className="blog container d-flex align-items-center justify-content-center flex-column pt-5 pb-5">
      <h2 className="second-title mb-4">Blog Terbaru</h2>
      <div className="container d-flex flex-wrap justify-content-evenly align-items-center">
        <div className="card" style={{ width: "18rem" }}>
          <Image
            src="/fullstack.jpg"
            className="card-img-top"
            height={160}
            width={286}
            alt="#"
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn text-white bg-dark-green">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default blog;
