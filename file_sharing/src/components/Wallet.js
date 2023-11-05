import React, { useState } from 'react';
import Button from './Button';
import Heading from './Heading';
import MainPage from './MainPage.js';

function Wallet() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = (connected) => {
    setIsConnected(connected);
  };

  return (
    <div className='mt-[500px]'>
      {isConnected ? (
       <MainPage />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
          <div className="pt-28 pb-20">
            <Heading />
          </div>
          <div className="pt-8">
            <Button isConnected={isConnected} onConnect={handleConnect} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
