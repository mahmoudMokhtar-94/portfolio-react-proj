import { TypeAnimation } from "react-type-animation";
import { BsArrowRightCircle } from "react-icons/bs";
import "../styles/hero-section.css";

const HeroSection = () => {
  const name = "Mahmoud Mokhtar Abdelaziz,";
  const jobTitleAnimated = [
    "FrontEnd Developer",
    1500,
    "React Developer",
    1500,
    "UI/UX Enthusiast",
    1500,
  ];

  return (
    <div className="hero-container">
      <div className="text-content">
        <div className="welcome-tag">Welcome All To My Portfolio</div>
        <h1 className="main-title">Hi! I'm</h1>
        <h1 className="name">{name}</h1>
        <h1 className="job-title-container">
          <TypeAnimation
            sequence={jobTitleAnimated}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: "1em",
              display: "inline-block",
              color: "#fff",
              marginLeft: "5px",
            }}
            cursor={true}
            deletionSpeed={70}
          />
        </h1>
        <div className="contact-section mt-5">
          <p className="experience-text">
            Hello Everyone I have 3 years Of Experience In web Development
          </p>
          <a href="#contact" className="connect-button">
            Let's Connect
            {/* <span className="arrow-icon">→</span>  */}
            <BsArrowRightCircle />
          </a>
        </div>
      </div>

      <div className="illustration">
        <img
          src="/illustration.png"
          alt="Illustration"
          className="illustration-img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
