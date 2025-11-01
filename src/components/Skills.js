import Slider from "react-slick";
import CircularProgress from "./CircularProgress";
import "../styles/skills.css";

const skillsData = [
  { id: 1, name: "HTML5", percentage: 95 },
  { id: 2, name: "CSS3", percentage: 90 },
  { id: 3, name: "Responsive Design", percentage: 90 },
  { id: 4, name: "JavaScript", percentage: 85 },
  { id: 5, name: "React JS", percentage: 80 },
  { id: 6, name: "Git & GitHub", percentage: 75 },
];

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">What I Bring to the Table</p>

      <div className="slider-container">
        <Slider {...settings}>
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-item-wrapper">
              <CircularProgress
                skill={skill.name}
                percentage={skill.percentage}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
