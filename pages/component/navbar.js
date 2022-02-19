import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import appContext from "../../context/appContext";

const Profile = (props) => {
  return (
    <>
      <Image
        src={props.foto}
        className="rounded-full"
        alt="profile"
        height={50}
        width={50}
      />
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props.user.username}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link href="/setting">
              <a className="dropdown-item" href="#">
                Setting
              </a>
            </Link>
          </li>
          <li>
            <Link href="/logout">
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};
const Navbar = (props) => {
  const { isAuthenticated, user, foto } = useContext(appContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link href="/">
        <a>
          <div className="images">
            <Image src="/Logo.jpg" height={50} width={131} priority alt="" />
          </div>
        </a>
      </Link>
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
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services">
                    <a className="nav-link">Services</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/gallery">
                    <a className="nav-link">Gallery</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog">
                    <a className="nav-link">Blog</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services">
              <a className="nav-link">Services</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/gallery">
              <a className="nav-link">Gallery</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>

          {isAuthenticated ? (
            <Profile user={user} foto={foto} url={props.url} />
          ) : (
            <li className="nav-item">
              <Link href="/login">
                <a
                  className="btn btn-success"
                  role="button"
                  style={{
                    width: 125,
                    height: 48,
                    backgroundColor: "#f3fff4",
                    color: "#4d9651",
                    border: "none",
                    borderRadius: 10,
                    fontSize: 22,
                  }}
                >
                  Login
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
