import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import appContext from "../../context/appContext";

const Profile = (props) => {
  console.log("profile", props);
  return (
    <>
      <Image
        src={props.foto}
        className="rounded-circle img-profile"
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-green">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" href="">
            <Image
              src="/logok.png"
              alt="logo"
              width={40}
              height={40}
              className="d-inline-block align-text-top"
            />
            KLOSO
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active">Home</a>
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
                <a className="nav-link">Tentang Kami</a>
              </Link>
            </li>
            {isAuthenticated ? (
              <Profile user={user} foto={foto} />
            ) : (
              <li className="nav-item">
                <Link href="/login">
                  <button
                    className="btn btn-light border-radius-sm text-green"
                    type="submit"
                  >
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
