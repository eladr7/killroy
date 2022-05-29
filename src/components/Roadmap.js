import Faq from "./Faq";

const Roadmap = () => {
  return (
    <section id="roadmap-background">
      <div className="OUR-TEAM">
        <h3 className="grim-title">ROADMAP</h3>{" "}
      </div>
      <div className="background-zig-zag">
        <div className="main-content">
          <div className="title">
            <h3>25% Stage 1</h3>{" "}
          </div>
          <div className="content-text">
            <h3>The Premiere Drop</h3>
            <p>
              The KillRoy Was Here Premiere NFT Bundle is made available to the
            </p>
            <p>
              public and to whitelist/Council of Gyld holders on June 2nd, 2022.
            </p>
          </div>
        </div>
        <div className="main-content-two">
          <div className="title-two">
            <h3>50% Stage 2</h3>{" "}
          </div>
          <div className="content-text-two">
            <h3>The KillRoy Live Screening</h3>
            <p>
              Collectors in Austin enjoy an in-person screening of KillRoy Was
              Here with Kevin Smith, as well as an intimate Q&A with him
              afterwards and a wild afterparty with Kevin and the Secret Labs
              team.
            </p>
          </div>
        </div>
        <div className="main-content-three">
          <div className="title-three">
            <h3>75% Stage 3</h3>{" "}
          </div>
          <div className="content-text-three">
            <h3>The KillRoy Was Here NFT Drop on Legendao</h3>
            <p>KillRoy Was Here drops on the legendao.io Mint Lab.</p>
          </div>
        </div>
        <div className="main-content-four">
          <div className="title-four">
            <h3>100% Stage 4</h3>{" "}
          </div>
          <div className="content-text-four">
            <h3>The Legendary NFTs Drop</h3>
            <p>
              Burning four KillRoy Was Here PFPs guarantees a Legendary Golden
              KillRoy, awarding a collector a free $LGND airdrop. The higher
              rank ed the Golden KillRoy you receive, the higher the reward.
            </p>
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
};

export default Roadmap;
