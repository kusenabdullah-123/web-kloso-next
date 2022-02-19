import Link from "next/link";

const unauthorized = () => {
  return (
    <section
      className="h-100 w-100 bg-white"
      style={{ boxSizing: "border-box" }}
    >
      <div
        className="empty-2-2 container mx-auto d-flex align-items-center justify-content-center flex-column"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <h1>401</h1>
        <div className="text-center w-100">
          <h1 className="title-text">Opss! Unauthorized</h1>
          <p className="title-caption">
            Please Login We
            <br className="d-sm-block d-none" />
            suggest you Back to Login.
          </p>
          <div className="d-flex justify-content-center">
            <Link href="/login">
              <button className="btn btn-back d-inline-flex text-white">
                Back to Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default unauthorized;
