import { useState } from 'react';
import './styling/home.css';
import sponge from '../assets/sponge.webp';
import github from '../assets/github.svg';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linked.png';
import doc from '../assets/doc.png';
import minion from '../assets/minion-events.png'
import firebrick from '../assets/firebrick.png'

//modal component that displays project details
function Modal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{project.title}</h2>

        {/* Image */}
        {project.image && (
          <div className="modal-image">
            <img src={project.image} alt={`${project.title} preview`} />
          </div>
        )}

        <h3>overview</h3>
        <p>{project.overview}</p>

        <h3>link</h3>
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {"click here to view the project"}
          </a>
        </p>
        <h3>instructions</h3>
        <p>{project.instructions}</p>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
}

//home component
function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  //sample projects with new fields for overview, link, and instructions
  const projects = [
    {
      id: 1,
      title: "Social Networking",
      overview:
        "Firebrick social networking is an application built on the idea of socializing between others on the app. it allows you to post videos, share updates, and connect with friends.",
      link: "https://github.com/uofa-cmput404/w25-project-mod-firebrick",
      instructions:
        "to use the app, create an account, then log in to post content and interact with friends.",
        image: firebrick
    },
    {
      id: 2,
      title: "Minion Event App",
      overview:
        "Minion Event App is a mobile app that lets a user sign up for events within their area by scanning a qr code. it also allows organizers to create and manage events.",
      link: "https://github.com/CMPUT301F24minion/minion-vector",
      instructions:
        "download the app, make an account of whether you are an organizer or a user, than start scanning qr codes, or make events for others to join.",
        image: minion
    },
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
    navigator.clipboard
      .writeText("your.email@example.com")
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
            <h1>Hello, My name is Mosa Yaqoobi, a Computing Science student</h1>
            <h2></h2>
          </div>
        </section>
        <div className="right-column">
          <section className="about">
            <h1>about me</h1>
            <p>Hello there, I am a 3rd year computing science student at the University of Alberta. I love to learn new things especially in my field,
              and I also love to code new things, keeps me sane I guess. outside of education, I love to go to the gym. I not only find it relaxing and 
              keeps my mind off school for a short period of time, but to also have something to work towards-trying to hit a specific weight ofcourse. other hobbies include playing badminton, going hiking or 
              just climbing indoors. I’m always looking for ways to grow—both mentally and physically. Always down to learn, connect, and take on new adventures!
            </p>
          </section>

          <section className="contact">
            <h1>contact me</h1>
            <div className="contact-boxes">
              <a
                href="https://github.com/Mosayaqoobi"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/mosa-yaqoobi/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a onClick={copyEmail} className="contact-box">
                <img src={gmail} alt="email" />
              </a>
              <a href="/resume.pdf" download className="contact-box">
                <img src={doc} alt="resume" />
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
              <p>{project.overview.substring(0, 30)}...</p>
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