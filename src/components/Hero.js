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
          <div className="hero-section-p">
            <p>
              Only 300 KillRoy PFPs are available as part of the{" "}
              <span className="italicise">KillRoy Was Here</span> Premiere NFT
              bundle. Collectors can mint NOW in time for the Austin crypto
              events. Holders of the Premiere NFT will receive the
              <span className="italicise"> KillRoy Was Here</span> NFT for free.
              A KWH Premiere NFT gets you one pass to the following events at
              Austin’s{" "}
              <a
                href={
                  "https://thevenueatx.com/?gclid=Cj0KCQjwnNyUBhCZARIsAI9AYlHJB4oOvHKKwUxv9SC4iZVul1wC86K1zdwve8RwDSdw2NX34iNVygoaAjL_EALw_wcB"
                }
                rel="noreferrer"
                target={"_blank"}
              >
                The Venue ATX
              </a>
              :
            </p>
            <ul>
              <li>
                A live screening of{" "}
                <span className="italicise"> KillRoy Was Here</span> with Kevin
                SmitA live screening of{" "}
                <span className="italicise"> KillRoy Was Here</span> with Kevin
                Smith
              </li>
              <li>An intimate Q&A with Kevin</li>
              <li style={{ paddingBotton: "35px" }}>
                Entrance to a killer afterparty with Kevin and the SCRT Labs
                team
              </li>
            </ul>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="hero-text-img"
          >
            <div
              style={{ display: "flex", marginBottom: "-12%" }}
              className="priceTitle"
            >
              <div style={{ marginRight: "10%" }} className="mint-price">
                Mint Price: (WL price)
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

            <div style={{ display: "flex" }} className="hero-img-time">
              <div className="mint-price">75 $sSCRT</div>
              <div>Remaining : {props.totalMints}</div>
            </div>
          </div>
        </div>
        <div className="kevin-smith-img-wrapper">
          <img src="kevin_smith.png" alt="" className="kevin-smith-img" />
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Hero;
