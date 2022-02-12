import CardProgam from "./cardProgam";

const sectionProgam = (props) => {
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
        {props.prokers.map((data, index) => {
          if (index == 0) {
            return (
              <CardProgam
                key={data.id}
                configIcon={data.icon}
                offset={"offset-lg-1"}
                clas={"col-lg-2"}
                title={data.title}
                desc={data.desc}
              />
            );
          } else {
            return (
              <CardProgam
                key={data.id}
                configIcon={data.icon}
                clas={"col-lg-2"}
                title={data.title}
                desc={data.desc}
              />
            );
          }
        })}
        {/* <CardProgam
          configIcon={"teenyicons:linux-solid"}
          offset={"offset-lg-1"}
          clas={"col-lg-2"}
          title={"Install Linux"}
          desc={"Instalasi Linux Wajib Untuk Seluruh Anggota K.L.O.S.O"}
        />
        <CardProgam
          configIcon={"clarity:nodes-line"}
          clas={"col-lg-2"}
          title={"Pelatihan Web Desain"}
          desc={
            "Instalasi Linux Wajib Untuk Seluruh Anggota K.L.O.S.O dan Pengurus"
          }
        />
        <CardProgam
          configIcon={"clarity:nodes-line"}
          clas={"col-lg-2"}
          title={"Out-Bond"}
          desc={"Out Bond Dengan Seluruh Anggota K.L.O.S.O"}
        />
        <CardProgam
          configIcon={"clarity:nodes-line"}
          clas={"col-lg-2"}
          title={"Pelatihan & Lomba Fullstack"}
          desc={
            "Instalasi Linux Wajib Untuk Seluruh Anggota K.L.O.S.O dan Pengurus"
          }
        />
        <CardProgam
          configIcon={"clarity:nodes-line"}
          clas={"col-lg-2"}
          title={"CangKir GaDing"}
          desc={"CangKir GaDing Anggota UKM K.L.O.S.O dengan pembina"}
        /> */}
      </div>
    </div>
  );
};

export default sectionProgam;
