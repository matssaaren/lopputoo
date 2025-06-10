import BigCard from "../components/Card-big";
import Card from "../components/Card";
import './Contact.css';
function Contact() {
  return (
    <div className="contact-page">
      <h1>Contacts</h1>
      <BigCard
        title="Contact Us"
        description="For inquiries, please reach out to us at:"
        imageUrl="https://placehold.co/600x400"
      />
      <div className="credits-section">
        <h2 className="bottom-line">References & Credits</h2>
        <div className="credits-cards">
          <Card
            title="Reference Article"
            description="Detailed information about cybernetic research."
            imageUrl="https://placehold.co/400"
            sourceUrl="https://example.com/reference"
          />
          <Card
            title="Inspiration Source"
            description="Original concept designs and imagery."
            imageUrl="https://placehold.co/400"
            sourceUrl="https://example.com/inspiration"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;