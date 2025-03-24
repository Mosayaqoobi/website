import './styling/Contact.css';

function Contact() {
  const email = "mosayaqoobi@example.com";

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you'd like to work together or just say hi, hit me up!</p>
      <a href={`mailto:${email}`} className="email-link">{email}</a>
    </div>
  );
}

export default Contact;

