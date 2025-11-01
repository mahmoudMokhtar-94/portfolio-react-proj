import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/contact-info.css";

const ContactInfo = () => {
  const contactData = {
    phone: "0102 534 8105",
    email: "mahmoudmo5tar294@gmail.com",
    linkedin: "#",
    github: "#",
    instagram: "#",
  };

  return (
    <div className="contact-info-section">
      <div className="social-connect-text-wrapper">
        <h3 className="social-title">Find Me Online</h3>
        <p className="social-description">
          I'm active across various platforms. Follow me to see my updates and
          latest work.
        </p>
      </div>

      <div className="social-icons-container">
        <a
          href={contactData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin-icon"
        >
          <FaLinkedin />
        </a>

        <a
          href={contactData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github-icon"
        >
          <FaGithub />
        </a>

        <a
          href={contactData.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram-icon"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
export default ContactInfo;
