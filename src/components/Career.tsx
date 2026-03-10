import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>EduSlide AI</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built an AI-powered tool that converts educational content into structured presentation slides. Focused on automation, productivity, and modern web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Hospital Management System</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed a web-based hospital appointment and management system allowing patients to book appointments, receive tokens, and manage medical visit records digitally.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Developer & Freelancer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building web products, AI tools, and developer utilities while experimenting with scalable software systems and modern web frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

