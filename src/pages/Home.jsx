import { useState } from 'react';
import './styling/Home.css';
import sponge from '../assets/sponge.webp';

// Modal component that displays project details
function Modal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function Home() {
  // State to track the currently selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // Example list of projects
  const projects = [
    { id: 1, title: "Project 1", description: "Detailed explanation for project 1." },
    { id: 2, title: "Project 2", description: "Detailed explanation for project 2." },
  ];

  // Opens the modal with the given project details
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Closes the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="home-container">
      <div className="top-section">
        <section className="head">
          <div className="photo">
            <img src={sponge} alt="Mosa Yaqoobi" />
          </div>
          <div className="text">
            <h1>Hey, I'm Mosa Yaqoobi, A Computing Science student</h1>
            <h2></h2>
          </div>
        </section>
        <div className="right-column">
          <section className="about">
            <h1>About Me</h1>
            <h2>Talk about my hobbies and etc</h2>
          </section>
          <section className="contact">
            <h1>Contact Me</h1>
            <h2>List all my socials</h2>
          </section>
        </div>
      </div>

      <section className="projects">
        <h1>Projects</h1>
        <div className="project-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <h2>{project.title}</h2>
              <p>{project.description.substring(0, 30)}...</p>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default Home;