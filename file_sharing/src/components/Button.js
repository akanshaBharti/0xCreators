import React, { useState } from 'react';
import './Css/button.css';

const Button = () => {
  const [isRequestPending, setIsRequestPending] = useState(false);

  const connectWallet = async () => {
    if (isRequestPending) {
      console.log('Permission request already pending.');
      return;
    }

    setIsRequestPending(true);

    if (window.ethereum) {
      try {
        await window.ethereum.send('eth_requestAccounts');
        console.log('MetaMask is enabled');
        alert('Metamask wallet connected');
      } catch (error) {
        console.error('Error enabling MetaMask:', error);
        alert('Go to your metamask extension and accept the request to connect.');
      } finally {
        setIsRequestPending(false);
      }
    } else {
      console.error('MetaMask extension not found');
      setIsRequestPending(false);
    }
  };

  return (
    <button className="btn" type="button" onClick={connectWallet}>
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
};

export default Button;
