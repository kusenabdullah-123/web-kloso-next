import Image from "next/image";
const blog = () => {
  return (
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
              <div className="card col-lg-2 p-1" style={{ borderRadius: 10 }}>
                <div className="image">
                  <Image
                    src="/IMG_9118.JPG"
                    className="card-img-top"
                    width={290}
                    height={190}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
              <div className="card col-lg-2 p-1" style={{ borderRadius: 10 }}>
                <div className="image">
                  <Image
                    src="/IMG_9118.JPG"
                    className="card-img-top"
                    width={290}
                    height={190}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
              <div className="card col-lg-2 p-1" style={{ borderRadius: 10 }}>
                <div className="image">
                  <Image
                    src="/IMG_9118.JPG"
                    className="card-img-top"
                    width={290}
                    height={190}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
              <div className="card col-lg-2 p-1" style={{ borderRadius: 10 }}>
                <div className="image">
                  <Image
                    src="/IMG_9118.JPG"
                    className="card-img-top"
                    width={290}
                    height={190}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default blog;
