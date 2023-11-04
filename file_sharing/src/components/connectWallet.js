import React from "react";

const ConnectWallet = ({ connectWallet }) => {
  return (
    <>
      <button className="bg-blue-500 mt-2" onClick={connectWallet}>
        Connect Wallet
      </button>
    </>
  );
};

export default ConnectWallet;
