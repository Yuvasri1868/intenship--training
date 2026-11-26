import React from "react";
import Flipkart from "./Components/Flipkart";
import { MobileContext } from "./Components/MobileContext";
import User from "./Hooks/Usereffect/User";



function App() {

  const mobileData = {
    name: "Samsung",
    price: 100000,
    color: "Black"
  };

  return (
    <>
    <center>
      <h1>Welcome to App Component</h1>
    
      

      <MobileContext.Provider value={mobileData}>
        <Flipkart />
      </MobileContext.Provider>
      <User />
      </center>

    </>
  );
}

export default App;