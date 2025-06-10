import BigCard from "../components/Card-big";
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
    </div>
  );
}

export default Contact;