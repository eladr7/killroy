import SecureValueToggler from "./secureValueToggler";

const MyCollection = (props) => {
  const imgBaseUrl = props.backendService + "/ipfstoimage?uri=";

  return (
    <div>
      <div>
        <div className="my-collection">
          <h1>MY COLLECTION</h1>
          <div style={{ marginTop: "3rem" }}>
            <a className={"rarity-rank-button"} href={"#"} target={"_blank"}>
              Rarity Rank
            </a>
          </div>
        </div>
      </div>

      {props.nftCollection.map((nft, index) => {
        return (
          <div key={index} className={"collection-item-background"}>
            <section>
              <div className="my-collection-yeti">
                <img
                  src={
                    imgBaseUrl +
                    nft.nft_dossier.private_metadata.extension.image
                  }
                  alt=""
                />
              </div>
            </section>
            <div>
              <div className="customerTable">
                <div className="customerbodyTable">
                  <div className="customerTablehead">
                    <div className="customerTableheadInner">
                      <div style={{ flexGrow: 3 }}>
                        <p className="headText">Entrance passphrase</p>
                      </div>
                    </div>
                  </div>
                  <div className="customerTablerow">
                    <div style={{ flexGrow: 3 }}>
                      <SecureValueToggler secureValue={nft.entranceMnemonic} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyCollection;
