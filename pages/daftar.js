import Navbar from "./component/navbar";
import Image from "next/image";
const daftar = () => {
  return (
    <section
      className="h-100 w-100 bg-white"
      style={{ boxSizing: "border-box" }}
    >
      <div
        className="container-xxl mx-auto p-0 position-relative header-2-2"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {/* navbar */}
        <Navbar />
        {/* header */}
        <div
          className="content-3-5 d-flex flex-column align-items-center h-100 flex-lg-row"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <div className="position-relative d-flex justify-content-center d-none d-lg-block h-100 width-left">
            <div className="p-3">
              <Image src="/IMG_9118.JPG" height={500} width={700} alt="" />
            </div>
          </div>
          <div className="d-flex mx-auto align-items-left justify-content-left width-right mx-lg-0">
            <div className="right mx-lg-0 mx-auto">
              <h3 className="title-text text-lg-center mb-5">
                Formulir Pendaftaran UKM K.L.O.S.O
              </h3>
              <form action="" method="post">
                <div style={{ marginBottom: "1.75rem" }}>
                  <label className="d-block input-label">Nama Lengkap</label>
                  <div className="d-flex w-100 div-input">
                    <input
                      className="input-field border-0"
                      type="text"
                      placeholder="Nama Lengkap"
                      autoComplete="on"
                      required
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label className="d-block input-label">Angkatan</label>
                  <div className="d-flex w-100 div-input">
                    <input
                      className="input-field border-0"
                      type="text"
                      placeholder="Tahun Angkatan"
                      autoComplete="on"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <h1 className="judul">Jurusan :</h1>
                  <div className="radio d-flex flex-row">
                    <div className="form-check me-5">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="jurusan"
                        id="jurusan1"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="jurusan1">
                        S1 TI
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="jurusan"
                        id="jurusan2"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="jurusan2">
                        D3 MI
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <h1 className="judul">Jenis Kelamin :</h1>
                  <div className="radio d-flex flex-row">
                    <div className="form-check me-5">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gender1"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="gender1">
                        Laki -Laki
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="gender2"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="gender2">
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label className="d-block input-label">Alasan</label>
                  <div className="d-flex w-100">
                    <textarea
                      className="form-control"
                      id="alasan"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="foto"
                    className="form-label"
                    style={{ color: "#4d9651" }}
                  >
                    Foto :
                  </label>
                  <input className="form-control" type="file" id="foto" />
                </div>
                <button
                  className="btn btn-fill text-white d-block w-50"
                  type="submit"
                >
                  Gabung
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default daftar;
