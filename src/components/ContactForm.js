import "../styles/contact-form.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We have recieved your message and will respond ASAP)");
  };

  return (
    <div className="contact-section-wrapper">
      <div className="contact-illustration-container">
        <img
          src="/contact-illustration.png"
          alt="illustration-Image"
          className="contact-illustration-img"
        />
      </div>

      <div className="contact-form-container p-5">
        <h3 className="contact-title">Get In Touch</h3>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />

          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone No." />

          <textarea placeholder="Message" rows="5" required></textarea>

          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
