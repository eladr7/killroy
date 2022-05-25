import React, { useState } from "react";

function SecureValueToggler(props) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    debugger;
    setShow(!show);
  };
  debugger;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <button onClick={toggleShow}>Show/Hide</button>
      <div style={{ display: show ? "block" : "none" }}>
        {props.secureValue}
      </div>
    </div>
  );
}

export default SecureValueToggler;
