import React from "react";
import ConnectWallet from '../components/connectWallet';
import Drive from '../contracts/Drive.sol/Drive.json'
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import FileUpload from "./addFile.tsx";
import Modal from "./Modal.js";
import Display from "./display.js";

function MainPage(){

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

  
  
    useEffect(() => { 
      const provider = new ethers.BrowserProvider(window.ethereum)
  
      const loadProvider = async () => {
        if (provider) {
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          }); 
  
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
          await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);
          let contractAddress = "0xF6e64ffE0E83a798a2532E5aC5b1c4006D6b9863";
   
          const contract = new ethers.Contract(
            contractAddress,
            Drive.abi,
            signer
          );
          console.log(contract);
          setContract(contract);
          setProvider(provider);
        } else {
          console.error("Metamask is not installed");
        }
      };
      provider && loadProvider();
    }, []);
    return(
      <>
      <div>
          <Navbar account={account} />
          {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
          <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
         <Display  contract={contract} account={account}></Display>
        </div>
      </>
        
    )
}
export default MainPage