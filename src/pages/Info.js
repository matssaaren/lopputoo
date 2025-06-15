import { Link } from 'react-router-dom';
import './Info.css';
function Info() {
  return (
    <div className='info-page'>
      <h1>Cybernetics in Action</h1>
      
      <p className="text2 mar0">
        Cybernetics works by connecting machines with the human body or brain using sensors, software, and control systems. These systems can read signals from the body (like brainwaves or muscle movements) and send commands back to machines — or even back into the body itself.
      </p>

      <p className="text2 mar0">
        For example, a robotic arm can be controlled by someone’s brain through electrodes that pick up nerve signals. Or a smart implant can deliver medicine based on body data in real time.
      </p>

      <h2>Where Is Cybernetics Used?</h2>
      <ul className="text2 mar0">
        <li><strong>Medical:</strong> Robotic limbs, brain implants, spinal cord stimulators, smart prosthetics, and artificial vision or hearing devices.</li>
        <li><strong>Military:</strong> Enhanced soldiers with exoskeletons, brain–machine interfaces for faster communication, and drone control using thought.</li>
        <li><strong>Industry:</strong> Workers using robotic suits for heavy lifting or high-precision tasks.</li>
        <li><strong>Space:</strong> Augmented astronauts who can better survive extreme environments or interface directly with spacecraft systems.</li>
        <li><strong>Everyday Life (Emerging):</strong> Wearables that monitor health, smart neural headsets, and even brain-connected AI tools.</li>
      </ul>

      <h2 className=''>Watch: TED - How we'll become cyborgs and extend human potential | Hugh Herr</h2>
      <div className="video-container">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/PLk8Pm_XBJE?si=t2cNC-UZGqFJDBzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <Link to={"/gallery"}><button>Gallery</button></Link>
    </div>
  );
}

export default Info;