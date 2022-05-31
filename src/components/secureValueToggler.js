import React, { useState } from "react";

function SecureValueToggler(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="passphrase-box">
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
    </div>
  );
}

export default SecureValueToggler;
