import Image from "next/image";
const benefit = () => {
  return (
    <div
      className="content-3-2 container-xxl mx-auto position-relative"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <div className="d-flex flex-lg-row flex-column align-items-center">
        {/* Left Column */}
        <div className="img-hero d-flex me-5">
          <Image
            id="hero"
            className="img-fluid"
            height={500}
            width={500}
            src="/Vector.png"
          />
        </div>
        {/* Right Column */}
        <div className="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
          <h2
            className="title-text"
            style={{ borderBottom: "#3d7d41 solid", fontSize: 30 }}
          >
            3 Keuntungan Mengikuti UKM K.L.O.S.O
          </h2>
          <ul style={{ padding: 0, margin: 0 }}>
            <li className="list-unstyled" style={{ marginBottom: "2rem" }}>
              <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                <span className="circle text-white d-flex align-items-center justify-content-center">
                  1
                </span>
                Pembina Yang Terpercaya &amp; Berpengalaman
              </h4>
              <p className="text-caption">
                We have provided highly experienced mentors
                <br className="d-sm-inline d-none" />
                for several years.
              </p>
            </li>
            <li className="list-unstyled" style={{ marginBottom: "2rem" }}>
              <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                <span className="circle text-white d-flex align-items-center justify-content-center">
                  2
                </span>
                Mempelajari Fullstack Web Development
              </h4>
              <p className="text-caption">
                Are you busy at work so it's hard to consult? don't
                <br className="d-sm-inline d-none" />
                worry because you can access anytime.
              </p>
            </li>
            <li className="list-unstyled" style={{ marginBottom: "4rem" }}>
              <h4 className="title-caption d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                <span className="circle text-white d-flex align-items-center justify-content-center">
                  3
                </span>
                Relasi Dengan Jangkauan Yang Luas
              </h4>
              <p className="text-caption">
                We provide economical packages for those of you
                <br className="d-sm-inline d-none" />
                who are still in school or workers.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default benefit;
