import "../styles/email-subscription.css";

const EmailSubscription = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email submitted!");
  };

  return (
    <section className="subscription-section">
      <div className="subscription-card">
        <div className="subscription-text">
          <h2 className="subscription-heading">
            Get all my latest projects — just drop your email below.
          </h2>
        </div>

        <form className="subscription-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="email-input"
            required
          />
          <button type="submit" className="submit-sub-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSubscription;
