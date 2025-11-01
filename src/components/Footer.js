import "../styles/footer.css";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-title">Portfolio</div>

        <div className="social-icons">
          <a href="#" className="icon-link">
            <FaLinkedinIn />
          </a>
          <a href="#" className="icon-link">
            <FaFacebookF />
          </a>
          <a href="#" className="icon-link">
            <FaInstagram />
          </a>
          <a href="#" className="icon-link">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="copyright">
        &copy; Copyrights 2025 -- All Rights Reserved By Mahmoud Mokhtar
      </div>
    </footer>
  );
};

export default Footer;
