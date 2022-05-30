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
              <div style={{ marginRight: "10%" }}>Mint Price: (WL price)</div>
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
              <div className="mint-price">75 $sSCRT</div>
              <div>Remaining : {props.totalMints}</div>
            </div>
          </div>
        </div>
        <div className="kevin-smith-img">
          <img
            src="kevin_smith.png"
            alt=""
            style={{
              width: "1400px",
              height: "1400px",
              marginLeft: "-40%",
              marginTop: "-20%",
              zIndex: "-1",
            }}
          />
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Hero;
