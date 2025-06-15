import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  return (
    <div className="home">
      <img src="https://ychef.files.bbci.co.uk/624x351/p027b1pn.jpg" alt="Cyborg human" />
      <h1 className='bottom-line'>What are Cybernetics?</h1>
      <p>Cybernetics is the study of how humans and machines can work together. Today, it's helping us build advanced technology that connects with the human body. This includes robotic arms, brain implants, and devices that help people move, see, or hear again. These tools can change lives—helping people with injuries, disabilities, or medical conditions live more fully. Cybernetics is not just about the future; it's already making a big difference in medicine today.</p>
      <Link to={'/info'}><button>Learn More</button></Link>
    </div>
  );
}

export default Home;