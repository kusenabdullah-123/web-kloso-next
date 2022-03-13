import Image from "next/image";
const homeService = () => {
  return (
    <section className="develop bg-light-green d-flex">
      <div className="container d-flex flex-wrap align-items-center">
        <div className="col-sm-6 p-4">
          <h1 className="title-text-big text-white">
            Develop Website Kamu Sendiri
          </h1>
          <p className="text-white desc">
            anda ingin membuat website portofolio atau company profile ? ,kami
            bisa membantu mewujudkan keinginan anda untuk memiliki website anda
            sendiri
          </p>
          <button className="btn btn-light text-green border-radius-sm btn-lg">
            Buat Sekarang
          </button>
        </div>
        <div className="col-sm-6">
          <Image
            src="/Saly-31.png"
            alt="hand shake"
            className="img-fluid"
            height={385}
            width={558}
          />
        </div>
      </div>
    </section>
  );
};

export default homeService;
