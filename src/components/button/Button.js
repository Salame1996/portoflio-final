import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Button.css'; // Import your CSS file here

function Button() {
  return (
    <Link to="/projects"> {/* Use Link component with the desired route */}
      <button className="button-56">Projects</button>
    </Link>
  );
}

export default Button;
