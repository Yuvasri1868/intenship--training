import react from "react";
import Mobile from "./Mobile";
function Electronics(props) {
  return (
    <>
      <h2>Electronics page</h2>
      <Mobile name={props.name} />

    </>
  );
}
export default Electronics;