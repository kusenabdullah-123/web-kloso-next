import Image from "next/image";
const footer = () => {
  return (
    <footer className="footer bg-dark-green d-flex align-items-center justify-content-center">
      <div className="container-fluid row text-white d-flex flex-wrap">
        <div className="col-sm-3">
          <Image
            src="/footer.png"
            alt="logo"
            className="img-fluid"
            height={57}
            width={216}
          />
        </div>
        <div className="col">
          <h5>Jasa</h5>
          <ul>
            <li>Ui/Ux</li>
            <li>Front End Dev</li>
            <li>Back End Dev</li>
            <li>Fullstack Dev</li>
          </ul>
        </div>
        <div className="col">
          <h5>Blog</h5>
          <ul>
            <li>Program Kerja</li>
            <li>Pertemuan Mingguan</li>
          </ul>
        </div>
        <div className="col">
          <h5>Galeri</h5>
          <ul>
            <li>Foto Anggota</li>
            <li>Foto Kegiatan</li>
          </ul>
        </div>
        <div className="col">
          <h5>Tentang Kami</h5>
          <ul>
            <li>Susunan Kepengurusan</li>
            <li>Kontak</li>
          </ul>
        </div>
        <div className="col">
          <Image
            src="/logos.png"
            srcSet=""
            className="footer-logo"
            alt="logo"
            height={72}
            width={69}
          />
          <Image
            src="/logok.png"
            srcSet=""
            className="footer-logo"
            alt="logo"
            height={72}
            width={69}
          />
        </div>
      </div>
    </footer>
  );
};
export default footer;
