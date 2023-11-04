import React from 'react';
import './Css/button.css'; // Import your CSS file

const Button = () => {
  return (
    <button className="btn" type="button">
      <strong className='text-xl text-white'>Connect Wallet</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
 
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
}

export default Button;
