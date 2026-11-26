import React, { useContext } from "react";
import { MobileContext } from "./MobileContext";

function Mobile() {

  const mobile = useContext(MobileContext);

  console.log(mobile);

  return (
    <>
      <h2>Mobiles page</h2>

      <h3>Mobile: {mobile.name}</h3>
      <h3>Price: {mobile.price}</h3>
      <h3>Color: {mobile.color}</h3>
    </>
  );
}

export default Mobile;