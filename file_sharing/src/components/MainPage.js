import React from "react";
// import ConnectWallet from '../components/connectWallet';
import abi from '../contracts/Drive.json'
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import FileUpload from "./addFile.tsx";
import Modal from "./Modal.js";
import Display from "./display.js";
import './Css/mainPage.css';

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
          let contractAddress = "0x0768F877FA5F5d5fe1496fdF3BfA81370D75488F";
   
          const contract = new ethers.Contract(
            contractAddress,
            abi.abi,
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
      <div className="w-screen px-4">
          <Navbar account={account} />
         <div className="m-5 w-screen flex">
         <div>
         {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      </div>
      <div>
       </div>
         </div>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
          <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <div>
        <Display  contract={contract} account={account}></Display>
        </div>
        </div>
      </>
        
    )
}
export default MainPage