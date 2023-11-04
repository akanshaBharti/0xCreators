import Button from './components/Button'
import Heading from './components/Heading';
import './App.css';
import ConnectWallet from './components/connectWallet';
import Drive from './contracts/Drive.sol/Drive.json'
// import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Loader from './components/Loader.js';
import FileUpload from './components/addFile.tsx';
import Wallet from "./components/Wallet.js"


function App() {
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
        let contractAddress = "0x6481321f1fC160321eAC3A47104CE595301CF3e3";
 
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

  return (
    <div>

    <FileUpload/>
    </div>    
  );
}

export default App;
