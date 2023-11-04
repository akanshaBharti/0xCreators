import './App.css';
import ConnectWallet from './components/connectWallet';
import Drive from './contracts/Drive.sol/Drive.json'
import { ethers } from "ethers";
import { useState, useEffect } from "react";

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
        console.log("connected account",account);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <div className='App'>
      <ConnectWallet/>
      <p style={{ color: "black" }}>
          Account : {account ? account : "Not connected"}
        </p> 
    </div>
    
  );
}

export default App;
