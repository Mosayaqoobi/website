import './styling/Home.css';
import sponge from '../assets/sponge.webp';

function Home() {
  return (
    <div className="home-container">
      <div className='top-section'>

        <section className="head">

        <div className="photo">
            <img src={sponge} alt="Mosa Yaqoobi"></img>
          </div>
          
          <div className="text">
            <h1>Hey, I'm Mosa yaqoobi, A Computing Science student</h1>
            <h2> </h2>
          </div>

        </section>
        <div className='right-column'>
          <section className='about'>
            <h1>About Me</h1>
            <h2> talk about my hobbies and etc</h2>
          </section>
          <section className='contact'>
          <h1> Contact  Me</h1>  
          <h2> list all my socials</h2>
          </section> 
        </div>
      </div>

      <section className='projects'>
        <h1>Projects</h1>
          <div className='project-list'>
            <div className='project-card'> 
              <h2>Project 1</h2>
              <p>description of this project.</p>
            </div>
          <div className='project-card'> 
            <h2>Project 2</h2>
            <p>Description of this project goes here.</p>
          </div>
          </div>
      </section>
    </div>
  );
}

export default Home;