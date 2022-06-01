const Services = (props) => {
  return (
    <section id="services-background">
      <div className="services-section-main">
        <div className="services-img">
          {" "}
          <img src="./image/killroy.png" alt={""} />{" "}
        </div>
        <div className="services-text">
          <h3 className="grim-title" style={{ fontWeight: "1000" }}>
            KILLROY
          </h3>
          <p className="main-services-text">
            KillRoy Was Here isn't just an NFT film. It's a revolutionary NFT
            drop connecting a creator who’s already made it — Kevin Smith — with
            the creators of tomorrow. A KillRoy Was Here PFP provides the
            following benefits to collectors:
          </p>

          <div className="services-text-bullets">
            <ul>
              <li>1 KillRoy Was Here PFP</li>
              <li>Access to the KillRoy Was Here full-length feature film</li>
              <li>
                1 of 20 PDFs of different script chapters signed by Kevin Smith
              </li>
              <li style={{ marginBottom: "13%" }}>
                1 of 20 different comic videos
              </li>
            </ul>
          </div>

          <a href="https://scrt.network/blog/legendao-kevin-smith-killroy-secret-network">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
