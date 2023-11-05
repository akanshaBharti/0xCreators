import React from "react";
import ConnectWallet from './components/connectWallet';
import Drive from './contracts/Drive.sol/Drive.json'
import { ethers } from "ethers";
import { useState, useEffect } from "react";

function EtherSetup({address}){
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
  
  
  
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
    <div>
        <Navbar address={address}></Navbar>

    </div>
 )  
}
export default EtherSetup