import Image from "next/image";
const header = () => {
  return (
    // <div>
    //   <div
    //     className="mx-auto d-flex flex-lg-row flex-column hero"
    //     style={{ backgroundColor: "#62b867" }}
    //   >
    //     {/* Left Column */}
    //     <div className="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
    //       <p className="text-caption">UKM K.L.O.S.O</p>
    //       <h1 className="title-text-big text-white">
    //         Komunitas Linux
    //         <br className="d-lg-block d-none" />
    //         Open Source (K.L.O.S.O)
    //       </h1>
    //       <p className="text-white">
    //         Komunitas ini berdiri sejak 03 Juni 2015. Komunitas ini merupakan
    //         salah satu UKM yang ada di STIKOM PGRI Banyuwangi.
    //       </p>
    //       <p className="text-white">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
    //         cum debitis rerum sequi exercitationem vitae autem eligendi
    //         laboriosam impedit voluptates aut dignissimos asperiores fugiat,
    //         repellat perferendis. Sit reiciendis fugit fuga.
    //       </p>
    //     </div>
    //     {/* Right Column */}
    //     <div className="right-column text-center d-flex justify-content-center pe-0">
    //       <Image
    //         id="img-fluid"
    //         className="h-auto mw-100"
    //         src="/Saly-10.png"
    //         width={578}
    //         alt=""
    //         height={457}
    //         priority
    //       />
    //     </div>
    //   </div>
    // </div>

    <header className="header bg-light-green d-flex align-items-center">
      <div className="container bg-light-green d-flex flex-wrap align-items-center">
        <div className="col-sm-6">
          <p className="text-caption text-white">UKM K.L.O.S.O</p>
          <h1 className="title-text-big text-white">
            Komunitas Linux
            <br className="d-lg-block d-none" />
            Open Source (K.L.O.S.O)
          </h1>
          <p className="text-white desc">
            Berdiri sejak 03 Juni 2015, komunitas ini merupakan salah satu UKM
            yang ada di STIKOM PGRI Banyuwangi. KLOSO bergerak dibidang
            pemrograman dan sistem operasi linux
          </p>
        </div>
        <div className="col-sm-6">
          <Image
            src="/Saly-10.png"
            alt="image home"
            className="img-fluid"
            height={442}
            width={558}
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default header;
