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
          <p>
            KillRoy Was Here isn't just an NFT film. It's a revolutionary NFT
            drop connecting a creator who’s already made it — Kevin Smith — with
            the creators of tomorrow. A KillRoy Was Here PFP provides the
            following benefits to collectors:
          </p>

          <p>&nbsp; &nbsp;• 1 KillRoy Was Here PFP</p>
          <p>
            &nbsp; &nbsp;• Access to the KillRoy Was Here full-length feature
            film
          </p>
          <p style={{ paddingBotton: "35px" }}>
            &nbsp; &nbsp;• 1 of 20 PDFs of different script chapters signed by
            Kevin
          </p>
          <p>&nbsp; &nbsp;&nbsp;&nbsp;Smith</p>
          <p style={{ marginBottom: "13%" }}>
            &nbsp; &nbsp;• 1 of 20 different comic videos
          </p>

          <a href="https://scrt.network/blog/legendao-kevin-smith-killroy-secret-network">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
