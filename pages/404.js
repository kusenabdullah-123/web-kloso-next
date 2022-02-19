import Image from "next/image";
import Link from "next/link";
const Custom404 = () => {
  return (
    <section
      className="h-100 w-100 bg-white"
      style={{ boxSizing: "border-box" }}
    >
      <div
        className="empty-2-2 container mx-auto d-flex align-items-center justify-content-center flex-column"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <Image
          className="main-img img-fluid"
          src="/404.png"
          alt=""
          height={330}
          width={345}
        />
        <div className="text-center w-100">
          <h1 className="title-text">Opss! Something Missing</h1>
          <p className="title-caption">
            The page you’re looking for isn’t found. We
            <br className="d-sm-block d-none" />
            suggest you Back to Homepage.
          </p>
          <div className="d-flex justify-content-center">
            <Link href="/">
              <button className="btn btn-back d-inline-flex text-white">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom404;
