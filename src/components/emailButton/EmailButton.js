import React from "react";
import './EmailButton.css'

function EmailButton() {
  const emailAddress = "carlossalame96@gmail.com";

  // Handle the button click event to open the user's default email client
  const handleButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <button className="button-85" onClick={handleButtonClick}>Send Email</button>
  );
}

export default EmailButton;
