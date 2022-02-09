import Image from "next/image";
const footer = () => {
  return (
    <section style={{ boxSizing: "border-box", backgroundColor: "#4d9651" }}>
      <footer
        className="row m-0 p-0"
        style={{ backgroundColor: "#4d9651", height: 180 }}
      >
        <div className="col-lg-3 ps-5 row align-items-center">
          <Image src="/footer.png" alt="" width={216} height={57} />
        </div>
        <div className="col-lg-7 row align-items-center">
          <div className="row">
            <div className="col-lg-3" style={{ color: "white" }}>
              <div className="title">
                <h4>Services</h4>
              </div>
              <ul>
                <li>Ui/Ux</li>
                <li>Front-End Dev</li>
                <li>Back-End Dev</li>
                <li>Fullstack Dev</li>
              </ul>
            </div>
            <div className="col-lg-3" style={{ color: "white" }}>
              <h4>Blog</h4>
              <ul>
                <li>Program Kerja</li>
                <li>Pertemuan Mingguan</li>
              </ul>
            </div>
            <div className="col-lg-3" style={{ color: "white" }}>
              <h4>Gallery</h4>
              <ul>
                <li>Foto Anggota</li>
                <li>Foto Kegiatan</li>
              </ul>
            </div>
            <div className="col-lg-3" style={{ color: "white" }}>
              <h4>About</h4>
              <ul>
                <li>Susunan Kepengurusan</li>
                <li>Kontak</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 row align-items-center">
          <div className="col-lg-5">
            <Image src="/logos.png" alt="" height={70} width={70} />
          </div>
          <div className="col-lg-5">
            <Image src="/logok.png" alt="" width={70} height={70} />
          </div>
        </div>
      </footer>
    </section>
  );
};
export default footer;
