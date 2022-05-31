import React, { useState } from "react";

function SecureValueToggler(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <span class="tooltiptext">Click to {!show ? "reveal" : "conceal"}</span>

      {!show && (
        <div
          className="abs-box stack-top"
          onClick={() => {
            setShow(!show);
          }}
        >
          <img className="passphrase-lock" src="./image/lock.png" alt={""} />
        </div>
      )}

      {/* <div className="box" style={{ background: "red" }}></div> */}
      <button
        style={{ filter: `${!show ? "blur(7px)" : ""}` }}
        className="abs-box passphrase-text2"
        onClick={() => {
          setShow(!show);
        }}
      >
        {props.secureValue}
      </button>
    </div>
  );
}

export default SecureValueToggler;
{
  /* <div className="passphrase-box">
<div className="lock-image-wrapper">
  {!show && (
    <img
      className="passphrase-lock"
      src="./image/lock.png"
      alt={""}
      onClick={() => {
        setShow(!show);
      }}
    />
  )}
</div>
<button
  style={{ filter: `${!show ? "blur(5px)" : ""}` }}
  className="passphrase-text"
  onClick={() => {
    setShow(!show);
  }}
>
  {props.secureValue}
</button>
</div> */
}
