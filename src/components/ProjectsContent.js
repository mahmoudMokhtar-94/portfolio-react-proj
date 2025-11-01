import "../styles/projects-styles.css";

const projectsData = [
  {
    id: 1,
    title: "constructX",
    description: "Simple Design With HTML & CSS",
    imageUrl: "/project-01.png",
    link: "https://mahmoudmokhtar-94.github.io/Project-01/",
  },
  {
    id: 2,
    title: "Nature's Bites",
    description: "E-commerce website (HTML5 & CSS3)",
    imageUrl: "/project-02.png",
    link: "https://mahmoudmokhtar-94.github.io/Project-02/",
  },
  {
    id: 3,
    title: "Electro",
    description: "Online Store (JS & ES6)",
    imageUrl: "/project-03.png",
    link: "https://mahmoudmokhtar-94.github.io/Project-04/index.html",
  },
];

const ProjectsContent = () => {
  return (
    <div className="projects-content-wrapper">
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-overlay"
            >
              <div className="overlay-text">
                <h3 className="overlay-title">{project.title}</h3>
                <p className="overlay-description">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
