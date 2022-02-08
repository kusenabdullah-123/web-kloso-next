import Image from "next/image";
const homeService = () => {
  return (
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
                Develop Website Kamu Sendiri
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas cum debitis rerum sequi exercitationem vitae autem
                eligendi laboriosam impedit voluptates aut dignissimos
                asperiores fugiat, repellat perferendis. Sit reiciendis fugit
                fuga.
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
                Check
              </button>
            </div>
            {/* Right Column */}
            <div className="right-column text-center d-flex justify-content-center pe-0">
              <Image
                id="img-fluid"
                className="h-auto mw-100"
                height={500}
                width={500}
                src="/Saly-31.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default homeService;
