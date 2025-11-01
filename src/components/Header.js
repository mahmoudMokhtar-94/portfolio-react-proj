import "../styles/header.css";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          Portfolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#tabbedSection">
                Projects
              </a>
            </li>

            <li className="nav-item d-flex align-items-center gap-2 ms-lg-3">
              <a href="#" className="social-icon linkedin-icon">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon facebook-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon instagram-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon github-icon">
                <FaGithub />
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <button className="btn btn-outline-light fw-semibold px-3 connect-btn position-relative">
                <span>Let’s Connect</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
