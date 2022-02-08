import { Icon } from "@iconify/react";
const sectionProgam = (props) => {
  console.log(props);
  return (
    <div
      className="content-3-2 container-xxl mx-auto mt-5 position-relative"
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3
          className="text-center"
          style={{
            borderBottom: "#3d7d41 solid",
            display: "flex",
            justifyContent: "center",
            height: 50,
            width: 350,
          }}
        >
          Program Kerja Tahun Ini
        </h3>
      </div>
      <div className="row mt-5">
        <div className="col-lg-2 offset-lg-1">
          <div className="d-flex flex-row" style={{ height: 50 }}>
            <Icon
              icon="teenyicons:linux-solid"
              width="40"
              height="30"
              inline={true}
            />
            <h5 className="ms-2" style={{ fontSize: 18 }}>
              Install Linux
            </h5>
          </div>
          <p>Instalasi Linux Wajib Untuk Seluruh Anggota K.L.O.S.O</p>
        </div>
        <div className="col-lg-2">
          <div className="d-flex flex-row" style={{ height: 50 }}>
            <Icon
              icon="teenyicons:linux-solid"
              width="40"
              height="30"
              inline={true}
            />
            <h5 className="ms-2" style={{ fontSize: 18 }}>
              Pelatihan Web Desain
            </h5>
          </div>
          <p>
            Pelatihan Web Desain Selama 2 Hari Untuk Seluruh Anggota K.L.O.S.O
            &amp; SMA/SMK Se-derajat
          </p>
        </div>
        <div className="col-lg-2">
          <div className="d-flex flex-row" style={{ height: 50 }}>
            <Icon
              icon="teenyicons:linux-solid"
              width="40"
              height="30"
              inline={true}
            />
            <h5 style={{ fontSize: 18 }}>Out-Bond</h5>
          </div>
          <p>Out Bond Dengan Seluruh Anggota K.L.O.S.O</p>
        </div>
        <div className="col-lg-2">
          <div className="d-flex flex-row" style={{ height: 50 }}>
            <Icon
              icon="teenyicons:linux-solid"
              width="40"
              height="30"
              inline={true}
            />
            <h5 className="ms-2" style={{ fontSize: 18 }}>
              Pelatihan &amp; Lomba Fullstack
            </h5>
          </div>
          <p>
            Pelatihan Fullstack Selama 4 Hari Untuk Seluruh Anggota K.L.O.S.O
            &amp; SMA/SMK Se-derajat &amp; Lomba Fullstack
          </p>
        </div>
        <div className="col-lg-2">
          <div className="d-flex flex-row" style={{ height: 50 }}>
            <Icon
              icon="teenyicons:linux-solid"
              width="40"
              height="30"
              inline={true}
            />
            <h5 className="ms-2" style={{ fontSize: 18 }}>
              CangKir GaDing
            </h5>
          </div>
          <p>CangKir GaDing Anggota UKM K.L.O.S.O dengan pembina</p>
        </div>
      </div>
    </div>
  );
};

export default sectionProgam;
