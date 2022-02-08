import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="#">
        <div className="images">
          <Image src="/Logo.jpg" height={50} width={131} priority />
        </div>
      </a>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#targetModal-item"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="modal-item modal fade"
        id="targetModal-item"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="targetModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content bg-white border-0">
            <div
              className="modal-header border-0"
              style={{ padding: "2rem", paddingBottom: 0 }}
            >
              <a className="modal-title" id="targetModalLabel"></a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              className="modal-body"
              style={{ padding: "2rem", paddingTop: 0, paddingBottom: 0 }}
            >
              <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="gallery.html">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services.html">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog.html">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="gallery.html">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
