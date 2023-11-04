import './App.css';
import ConnectWallet from './components/connectWallet';
import Drive from './contracts/Drive.sol/Drive.json'
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Loader from './components/loader.js';
import AddFile from './components/addFile.js';

import Button from './components/Button'
import Heading from './components/Heading';

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


        let contractAddress = "0x5283920c5756907DA8279f175f1Ad1352a52E4A4";
 
        const contract = new ethers.Contract(
          contractAddress,
          Drive.abi,
          signer
        );
        console.log(contract);
        // console.log("connected account",account);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  

  return (
    <>
   
    <div className='App'>
      {/* <Loader/>
      <ConnectWallet/>
      <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p> 
    
    
    <div className='flex flex-col items-center justify-center h-screen bg-black border-dotted border-2 border-color: rgb(229 231 235) '>
      <div className=' pb-28'>
      <Heading/>
      </div>
    <div className=' pb-40'>
      <Button/>
    </div>
    </div>  */}
    <AddFile/>
    </div>
    </> 
  );
}

export default App;


