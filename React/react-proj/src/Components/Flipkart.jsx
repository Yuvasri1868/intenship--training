import react from "react";
import Electronics from "./Electronics";
function Flipkart(props) {
  return (
    <>
    <hr />
    <hr />
      <h2>Welcome to Flipkart </h2>
      <Electronics name={props.name} />
    </>
  );
}
export default Flipkart;