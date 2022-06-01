const Footer = (props) => {
  return (
    <div className={props.bgClass}>
      <div className="footer-main">
        <div className="footer-text">
          {" "}
          <img src="./image/legendao.png" alt="" />
          <p>Bringing all legendary creators into the Cosmos.</p>
          <p>The immersive Mint Lab for all significant NFT projects.</p>
          <h5>Join our community</h5>
          <ul style={{ marginTop: "-13%" }}>
            <li>
              <a
                href={"https://discord.gg/w84egv2Enb"}
                rel="noreferrer"
                target={"_blank"}
              >
                <img src="./image/discord.png" alt="" />
              </a>
              <a
                href={"https://twitter.com/LegendaoNFT"}
                rel="noreferrer"
                target={"_blank"}
              >
                <img src="./image/twitter.png" alt="" />
              </a>
              {/* <a href={"https://stashh.io/"} rel="noreferrer" target={"_blank"}>
                <img src="./image/stashh.png" alt="" />
              </a> */}
            </li>
          </ul>
        </div>
        {/* <div className="footer-input">
          <p>Stay in the loop</p>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            aria-label="E-mail"
            aria-describedby="basic-addon1"
          />{" "}
          <span className="input-group-text" id="basic-addon1" />
          <img
            className="footer-img"
            src="./image/footer-arrow.png"
            alt=""
          />{" "}
        </div> */}
      </div>
      {/* FOOTER-LAST */}
      {/* <div className="empty-line"> </div> */}
      <div className="footer-main-last">
        <div className="footer-text-1">
          <h4> Copyright 2022, SCRT Labs</h4>{" "}
        </div>
        <div className="footer-input">
          {" "}
          {/* <img src="./image/footer logo.png" alt="" />{" "} */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
