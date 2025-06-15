import BigCard from "../components/Card-big";

import Card from "../components/Card";

import './Contact.css';
function Contact() {
  return (
    <div className="contact-page">
      <BigCard
        title="Contact Me"
        description="For questions, feedback, or collaboration, feel free to reach out:"
        imageUrl="https://avatars.githubusercontent.com/u/167091453?v=4"
      />
      <div className="credits-section">
        <h2 className="bottom-line">References & Credits</h2>
        <div className="credits-cards">
          <Card
            title="Inspiration - Cyberpunk 2077"
            description="This website was heavily inspirted by the game Cyberpunk 2077 and its depiction of cybernetics."
            imageUrl="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/a757b56d2078be8b09a04e2ad531f1fefafaa129/capsule_616x353.jpg?t=1749198613v"
            sourceUrl="https://www.cyberpunk.net"
          />
          <Card
            title="Refrence/Research - Neuralink"
            description="Companty that is developing implantable brain–machine interfaces (BMIs)."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lgYcsSJsif5H9tho51_aY1QhOqbBvEOnig&s"
            sourceUrl="https://neuralink.com/"
          />
          <Card 
          title="Refrence/Research - Bionic Vision Technologies"
          description="The second-generation suprachoroidal retinal prosthesis, developed by Bionic Vision Technologies, is a device designed to restore some vision to individuals with retinitis pigmentosa (RP). It utilizes a 44-electrode array implanted in the suprachoroidal space, stimulating the retina and bypassing damaged photoreceptors."
          imageUrl="https://bionicvis.com/wp-content/uploads/2020/01/SiteIcon.jpg"
          sourceUrl="https://bionicvis.com/"
        />
        <Card 
          title="Refrence/Research - Open Bionics"
          description="Open Bionics is a company that designs and manufactures affordable, multi-grip prosthetic arms. Their Hero Arm is the world’s most affordable multi-grip prosthetic arm, with multi-grip functionality and empowering aesthetics."
          imageUrl="https://www.limbpower.co.uk/application/files/6316/4682/3283/Open_Bionics_Logo.png"
          sourceUrl="https://openbionics.com"
        />
          
        <Card 
          title="Refrence/Research - Cyberdyne"
          description="The Hybrid Assistive Limb is designed to support and expand the physical capabilities of its users, particularly people with physical disabilities. There are two primary versions of the system: HAL 3, which only provides leg function, and HAL 5, which is a full-body exoskeleton for the arms, legs, and torso. "
          imageUrl="https://wiki.starbasegame.com/images/4/4a/The_Cyberdyne_Systems_Corporation_Logotype1.png"
          sourceUrl="https://www.cyberdyne.jp"
        />
        <Card 
          title="Lockheed Martin ONYX Exoskeleton"
          description="ONYX is a powered, lower-body exoskeleton with artificial intelligence (AI) technology that augments human strength and endurance. "
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9aNAroQU6jebC5bQjJkrjuZDRpSSYQsI_A&s"
          sourceUrl="https://www.lockheedmartin.com/"
        />
        </div>
      </div>
    </div>
  );
}

export default Contact;