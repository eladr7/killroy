const Faq = (props) => {
  return (
    <section id="accordian-background">
      <div className="OUR-TEAM">
        <h3 className="grim-title">F.A.Q</h3>{" "}
      </div>
      <div className="faq-set">
        <button className="accordion">WHEN IS THE MINT?</button>
        <div className="panel">
          <p>
            {" "}
            The KillRoy Was Here Premiere NFT Bundle opens for mint on June 2nd.
            Mint here.
          </p>
          <p>The KillRoy Was Here NFT opens for mint in early July.</p>
        </div>
        <button className="accordion">
          HOW MANY PIECES ARE BEING SOLD IN THE KILLROY PREMIERE NFT BUNDLE?
        </button>
        <div className="panel">
          <p>
            The Premiere collection contains only 300 unique pieces. Mint here.
          </p>
        </div>
        <button className="accordion">
          HOW CAN I CONVERT MY PREMIERE NFT TO THE KILLROY WAS HERE NFT?
        </button>
        <div className="panel">
          <p>
            If you bought the Premiere NFT, the KillRoy Was Here NFT will be
            sent to you when the collection launch in July.
          </p>
        </div>
        <button className="accordion">
          HOW MANY PIECES ARE THERE IN THE KILLROY NFT COLLECTION?
        </button>
        <div className="panel">
          <p>
            KillRoy Was Here contains 5,555 1/1 generative comic art pieces.
          </p>
        </div>
        <button className="accordion">
          WHAT IS THE PRICE OF THE PREMIERE NFT?
        </button>
        <div className="panel">
          <p>$285 in sSCRT for public (no Whitelist) -5% off</p>
          <p>$210 in sSCRT for Whitelisted -30% off</p>
        </div>
        <button className="accordion">
          WHAT CAN I DO WITH MY KILLROY NFT?
        </button>
        <div className="panel">
          <p>
            Read more about the benefits and perks of a KillRoy Was Here NFT
            <a
              target={"_blank"}
              href="https://medium.com/legendao/make-a-killing-the-killroy-was-here-nft-for-creators-9fdc72ba5921"
            >
              here
            </a>
            .
          </p>
        </div>
        <button className="accordion">WHY SHOULD I BUY A KILLROY NFT?</button>
        <div className="panel">
          <p>
            Read more about the benefits and perks of a KillRoy Was Here NFT
            <a
              target={"_blank"}
              href="https://medium.com/legendao/make-a-killing-the-killroy-was-here-nft-for-creators-9fdc72ba5921"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
