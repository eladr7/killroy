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
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.{" "}
          </p>
          <a href="">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
