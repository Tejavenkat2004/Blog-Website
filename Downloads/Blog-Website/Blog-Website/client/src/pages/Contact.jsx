import  { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !message) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/contact/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setName('');
        setEmail('');
        setMessage('');
        alert('Successfully created')
        window.location.reload()
      } else {
        setError(data.message || 'An error occurred.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "24px", color: "#333", marginBottom: "10px" }}>
        Contact Us
      </h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
        For any inquiries, please contact us using the information below:
      </p>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li style={{ fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px" }}>
          Email: example@example.com
        </li>
        <li style={{ fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px" }}>
          Phone: +1234567890
        </li>
        <li style={{ fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px" }}>
          Address: 123 Main Street, City, Country
        </li>
      </ul>
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
        Alternatively, you can use the contact form below:
      </p>
      <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label style={{ display: "block", fontSize: "16px", marginBottom: "8px", color: "#333" }}>
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />
        <label style={{ display: "block", fontSize: "16px", marginBottom: "8px", color: "#333" }}>
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />
        <label style={{ display: "block", fontSize: "16px", marginBottom: "8px", color: "#333" }}>
          Message:
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "10px",
            minHeight: "150px",
          }}
        ></textarea>
        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        />
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
        Follow us on social media:
      </p>
      {/* Add social media icons/links here if needed */}
    </div>
  );
};

export default Contact;