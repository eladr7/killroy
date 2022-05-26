const Hero = (props) => {
  debugger;
  return (
    <div className={"hero-background"}>
      <div className="hero-section-main">
        <div className="hero-section-text">
          <h1>KEVIN SMITH</h1>
          <h3>KillROY WAS HERE</h3>
          <p>
            Directed by Smith from a script by Smith and Andy McElfresh,
            “KillRoy Was Here” is a throwback anthology horror film featuring a
            creature that kills evil adults at the behest of victimized kids.
            The movie itself, exclusive content from the film, behind-the-scenes
            footage, and a commentary track will be launched as a 5,555-piece
            generative art NFT collection on Legendao, Secret Network’s primary
            NFT minting platform.
          </p>

          <div className="hero-text-img">
            <div className="mintPrice">
              <div style={{ display: "flex" }}>
                <div className="priceTitle">
                  <p>
                    <div
                      style={{
                        marginBottom: "-5%",
                        fontSize: "1.2em",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Mint Price:
                    </div>
                    <br />
                    <span style={{ fontSize: "1.5em" }}>75 $sSCRT</span>
                  </p>
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
                </div>
              </div>
              {/* <div className="mint">
              <a>SOLD OUT</a>
            </div> */}
            </div>
            <div className="hero-img-time">
              <p>
                <span style={{ fontSize: "18px" }}>
                  Remaining : {props.totalMints}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "972px",
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
    </div>
  );
};

export default Hero;
