import Services from "./Services";

const Hero = (props) => {
  return (
    <div
      className={"hero-background"}
      style={{ overflowX: "hidden", overflow: "hidden" }}
    >
      <div className="hero-section-main">
        <div className="hero-section-text">
          <h1>KEVIN SMITH</h1>
          <h3>KillROY WAS HERE</h3>
          <div style={{ width: "870px" }}></div>
          <div style={{ width: "750px" }}>
            <p>
              Only 300 KillRoy PFPs are available as part of the KillRoy Was
              Here Premiere NFT bundle. Collectors can mint on June 2nd in time
              for the Austin crypto events. A KWH Premiere NFT gets you one pass
              to the following events at Austin's The Venue:
            </p>
            <p>
              &nbsp; &nbsp;• A live screening of KillRoy Was Here with Kevin
              Smith
            </p>
            <p>&nbsp; &nbsp;• An intimate Q&A with Kevin</p>
            <p style={{ paddingBotton: "35px" }}>
              &nbsp; &nbsp;• Entrance to a killer afterparty with Kevin and the
              Secret Labs team
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="hero-text-img"
          >
            <div
              style={{ display: "flex", marginBottom: "-12%" }}
              className="priceTitle"
            >
              <div style={{ marginRight: "14%" }}>Mint Price:</div>
              <div className="mint">
                <a
                  href="#"
                  onClick={() => {
                    props.handleMint();
                  }}
                >
                  MINT
                </a>
              </div>
            </div>

            <div style={{ display: "flex" }} className="hero-img-time">
              <div style={{ fontSize: "1.2em", marginRight: "14%" }}>
                75 $sSCRT
              </div>
              <div>Remaining : {props.totalMints}</div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "850px",
            height: "872px",
            position: "relative",
            marginTop: "9%",
          }}
        >
          <div className="kevin-smith-img-bg"></div>
          <div className="kevin-smith-img-wrapper">
            <img
              className="kevin-smith-img"
              src="kevin_smith.png"
              alt=""
              style={{ width: "378px", height: "535px" }}
            />
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Hero;
/*<div className="hero-text-img">
            <div className="mintPrice">
              <div className="priceTitle" style={{ display: "flex" }}>
                <div>
                  <div
                    style={{
                      marginBottom: "-5%",
                      fontSize: "1.2em",
                      letterSpacing: "0.1em",
                      marginBottom: "10%",
                      marginTop: "22%",
                    }}
                  >
                    Mint Price:
                  </div>
                  <br />
                  <span style={{ fontSize: "1.5em" }}>75 $sSCRT</span>
                </div>
                <div className="mint">
                  <a
                    href="#"
                    onClick={() => {
                      props.handleMint();
                    }}
                  >
                    MINT
                  </a>
                  <div className="hero-img-time">
                    <p>
                      <span style={{ fontSize: "18px" }}>
                        Remaining : {props.totalMints}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="mint">
              <a>SOLD OUT</a>
            </div> */
//  </div>
// </div>
