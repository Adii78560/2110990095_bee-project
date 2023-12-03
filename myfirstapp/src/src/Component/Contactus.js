import React, { useState } from "react";

export default function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validInfo, setValidInfo] = useState(false);

  const handleSubscribe = () => {
    if (name && email) {
      // Simulate a subscription request here (you can replace this with your actual logic)
      // For this example, we're showing a success message using a browser alert.
      window.alert("Our Team Will Contact you Shortly:)");
      setValidInfo(false);

      // You can add your subscription logic here
    } else {
      // Show an error alert if information is missing
      window.alert("Enter valid information");
      setValidInfo(true);
    }
  };

  return (
    <div className="newslettermain">
      <div className="newsletter">
        <div className="nlleft">NEWSLETTER</div>
        <div className="nlright">
          <input
            placeholder="Your name"
            className={`input2 ${validInfo && !name ? "error" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Your email id"
            className={`input3 ${validInfo && !email ? "error" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" className="newsbtn" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
