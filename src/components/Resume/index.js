import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

function Resume() {
  return (
    <div>
      <h1 className="skills-header mt-20">My Skills</h1>
      <div className="skills-sections flex justify-center mt-20">
        <div className="skill-section-left px-4">
          <h2 className="skill-section-header">Front-End Proficiencies</h2>
          <div className="flex flex-wrap frontend-skills">
            <div className="frontend-skill">HTML</div>
            <div className="frontend-skill">CSS</div>
            <div className="frontend-skill">JavaScript</div>
            <div className="frontend-skill">JQuery</div>
            <div className="frontend-skill">Responsive Design</div>
            <div className="frontend-skill">React</div>
            <div className="frontend-skill">Bootstrap</div>
            <div className="frontend-skill">Tailwind</div>
            <div className="frontend-skill">Bulma</div>
          </div>
        </div>
        <div className="skill-border"></div>
        <div className="skill-section-right px-4">
          <h2 className="skill-section-header">Back-End Proficiencies</h2>
          <div className="flex flex-wrap backend-skills">
            <div className="backend-skill">APIs</div>
            <div className="backend-skill">Node</div>
            <div className="backend-skill">Express</div>
            <div className="backend-skill">MySQL</div>
            <div className="backend-skill">Sequelize</div>
            <div className="backend-skill">MongoDB</div>
            <div className="backend-skill">Mongoose</div>
            <div className="backend-skill">REST</div>
            <div className="backend-skill">GraphQL</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-40 ml-4">
        <h1 className="resume-download px-4">Resume</h1>
        <div className="resume-download animate-bounce">
          <a
            href={require(`../../assets/resume/Mitchell_Armstrong_Resume_8.pdf`)}
            download
          >
            <FaFileDownload></FaFileDownload>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Resume;
