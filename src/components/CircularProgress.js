import "../styles/skills.css";

const CircularProgress = ({ skill, percentage }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-bar-container">
      <svg
        className="progress-svg"
        width="160"
        height="160"
        viewBox="0 0 160 160"
      >
        <circle className="progress-circle-bg" r={radius} cx="80" cy="80" />

        <circle
          className="progress-circle-fg"
          r={radius}
          cx="80"
          cy="80"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      <div className="percentage-text">{percentage}%</div>
      <p className="skill-label">{skill}</p>
    </div>
  );
};

export default CircularProgress;
