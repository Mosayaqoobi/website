import { useState } from 'react';
import './styling/home.css';
import sponge from '../assets/sponge.webp';
import github from '../assets/github.svg';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linked.png';
import doc from '../assets/doc.png'

//modal component that displays project details
function Modal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
}

//home component
function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  //sample projects
  const projects = [
    { id: 1, title: "project 1", description: "detailed explanation for project 1." },
    { id: 2, title: "project 2", description: "detailed explanation for project 2." },
  ];

  //function to open modal
  const openModal = (project) => {
    setSelectedProject(project);
  };

  //function to close modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  //function to copy email to clipboard and show a custom toast
  const copyEmail = () => {
    navigator.clipboard.writeText('your.email@example.com')
      .then(() => {
        setShowCopyMessage(true);
        setTimeout(() => {
          setShowCopyMessage(false);
        }, 2000);
      })
      .catch(() => {
        setShowCopyMessage(true);
        setTimeout(() => {
          setShowCopyMessage(false);
        }, 2000);
      });
  };

  return (
    <div className="home-container">
      <div className="top-section">
        <section className="head">
          <div className="photo">
            <img src={sponge} alt="mosa yaqoobi" />
          </div>
          <div className="text">
            <h1>hey, i'm mosa yaqoobi, a computing science student</h1>
            <h2></h2>
          </div>
        </section>
        <div className="right-column">
          <section className="about">
            <h1>about me</h1>
            <p>talk about my hobbies and etc</p>
          </section>

          <section className="contact">
            <h1>contact me</h1>
            <div className="contact-boxes">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a onClick={copyEmail} className="contact-box">
                <img src={gmail} alt="email" />
              </a>

              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box"
              >
                <img src={doc} alt="github" />
              </a>
            </div>
          </section>

        </div>
      </div>

      <section className="projects">
        <h1>projects</h1>
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

      {showCopyMessage && (
        <div className="copy-toast">email copied to clipboard!</div>
      )}
    </div>
  );
}

export default Home;