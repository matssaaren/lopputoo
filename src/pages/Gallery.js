import './Gallery.css';
import Card from '../components/Card';

function Gallery() {
  return (
    <div>
      <h1 className='bottom-line'>Latest Advances in Cybernetics</h1>
      <div className="gallery-container">

        <Card 
          title="Pioneering Brain Computer Interfaces (Neuralink Brain Implant)"
          description="Neuralink places a small chip in the brain that reads neural signals. These signals can be used to move a mouse, control a computer, or even help people with spinal injuries regain function."          imageUrl="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F0e4815c4-a87d-11e9-90e9-fc4b9d9528b4?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
          sourceUrl="https://neuralink.com/"
        />
        <Card 
          title="The second-generation suprachoroidal retinal prosthesis (Prosthetic Eye)"
          description="The second-generation suprachoroidal retinal prosthesis, developed by Bionic Vision Technologies, is a device designed to restore some vision to individuals with retinitis pigmentosa (RP). It utilizes a 44-electrode array implanted in the suprachoroidal space, stimulating the retina and bypassing damaged photoreceptors."
          imageUrl="https://cdn.mos.cms.futurecdn.net/VDLbXnnNbVy2dSwD99PCRY.jpg"
          sourceUrl="https://bionicvis.com/"
        />
        <Card 
          title="Open Bionics Hero Arm"
          description="The Hero Arm is the world’s most affordable multi-grip prosthetic arm, with multi-grip functionality and empowering aesthetics."
          imageUrl="https://openbionics.com/wp-content/uploads/2021/05/MGS_Dan-00032-copy-4-scaled-e1712314888150.jpg"
          sourceUrl="https://openbionics.com"
        />
          
        <Card 
          title="Cyberdyne HAL Suit"
          description="The Hybrid Assistive Limb is designed to support and expand the physical capabilities of its users, particularly people with physical disabilities. There are two primary versions of the system: HAL 3, which only provides leg function, and HAL 5, which is a full-body exoskeleton for the arms, legs, and torso. "
          imageUrl="https://singularityhub.com/uploads/2009/08/cyberdyne-hal-suits-walking-streets-tokyo.jpg?auto=webp"
          sourceUrl="https://www.cyberdyne.jp"
        />
        <Card 
          title="Lockheed Martin ONYX Exoskeleton"
          description="ONYX is a powered, lower-body exoskeleton with artificial intelligence (AI) technology that augments human strength and endurance. "
          imageUrl="https://breakingdefense.com/wp-content/uploads/sites/3/2018/05/17Or577_38-scaled.jpg"
          sourceUrl="https://www.lockheedmartin.com/"
        />




      </div>
    </div>
  );
}

export default Gallery;
