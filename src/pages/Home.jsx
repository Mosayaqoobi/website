import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>Hey, I'm Mosa yaqoobi 👋</h1>
        <h2>Software Developer | Tech Enthusiast</h2>
        <p>
          I love learning about machine learning and just everything about CS in general
        </p>
        <Link to="/projects" className="cta-button">View My Projects</Link>
      </div>
    </div>
  );
}

export default Home;