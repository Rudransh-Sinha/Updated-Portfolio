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
                <h4>Team Leader</h4>
                <h5>Student Management System</h5>
              </div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                2023
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
                  alt="Python Logo" 
                  style={{ height: '1em', width: 'auto', objectFit: 'contain' }} 
                />
              </h3>
            </div>
            <p>
              Led the development of a Student Management System with Python & MySQL. Managed database architecture for records, grades, and attendance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee</h4>
                <h5>Infosys</h5>
              </div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                Aug 2025
                <img 
                  src="https://tse3.mm.bing.net/th/id/OIP.FOpTLuDOaWc_z1AtdwkDrQHaHk?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Infosys Logo" 
                  style={{ height: '1em', width: 'auto', objectFit: 'contain', borderRadius: '2px' }} 
                />
              </h3>
            </div>
            <p>
              Completed a 10-day program focused on professional communication, teamwork, and problem-solving skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Virtual Intern</h4>
                <h5>Deloitte Australia</h5>
              </div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                Sept 2025
                <img 
                  src="https://tse3.mm.bing.net/th/id/OIP.fsbOp1RNjiWJ8g_-z2MCXAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Deloitte Logo" 
                  style={{ height: '1em', width: 'auto', objectFit: 'contain', borderRadius: '2px' }} 
                />
              </h3>
            </div>
            <p>
              Completed a virtual job simulation involving development and coding. Wrote a proposal for creating a dashboard and strengthened technical problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
