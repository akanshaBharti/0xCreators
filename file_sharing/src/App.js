import React, { useState, useEffect } from "react";
import Wallet from "./components/Wallet";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds and then switch to the Wallet component
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Wallet />}
    </>
  );
};

export default App;
