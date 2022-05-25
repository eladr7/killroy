import React, { useState } from "react";

function SecureValueToggler(props) {
  const [show, setShow] = useState(false);

  return (
    <table>
      <tr
        style={{
          background: "rgb(94 20 20)",
        }}
      >
        <td
          style={{
            marginLeft: "35%",
            border: "2px solid",
            borderRadius: "25px",
          }}
        >
          <button
            style={{ background: "none", width: "100%", border: "none" }}
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? "Hide" : "Show"}
          </button>
        </td>
        <td
          style={{
            marginLeft: "2%",
            border: "2px solid",
            borderRadius: "25px",
          }}
        >
          {show ? props.secureValue : ""}
        </td>
      </tr>
    </table>
  );
}

export default SecureValueToggler;
