import Button from './components/Button'
import Heading from './components/Heading';
import './App.css';
import ConnectWallet from './components/connectWallet';
import Drive from './contracts/Drive.sol/Drive.json'
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Loader from './components/Loader.js';
import FileUpload from './components/addFile.tsx';
import Wallet from "./components/Wallet.js"
// import Wallet from "./components/Wallet";
// import Loader from "./components/Loader";



function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds and then switch to the Wallet component
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

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
   {loading ? <Loader /> : <Wallet />}
   <FileUpload account={account}
          provider={provider}
          contract={contract}/>
    </div>    
  );
};

export default App;
