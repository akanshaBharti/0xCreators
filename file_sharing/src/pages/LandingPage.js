import React from "react";
import Loader from '../components/Loader.js';
import Wallet from "../components/Wallet.js";
import { useState,useEffect } from "react";

function LandingPage (){
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    // Simulate loading for 2 seconds and then switch to the Wallet component
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);
    return(
        <div>
             {loading ? <Loader /> : <Wallet />}

        </div>
    )
}

export default LandingPage;
