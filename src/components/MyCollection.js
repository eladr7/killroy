import SecureValueToggler from "./secureValueToggler";

const MyCollection = (props) => {
  const imgBaseUrl = props.backendService + "/ipfstoimage?uri=";

  return (
    <div className={"collection-item-background"}>
      <div>
        <div className="my-collection">
          <h1 className="grim-title">MY COLLECTION</h1>
        </div>
      </div>

      {props.nftCollection.map((nft, index) => {
        return (
          <div key={index}>
            <section>
              <div className="my-collection-yeti">
                <img
                  src={
                    imgBaseUrl +
                    nft.nft_dossier.private_metadata.extension.image
                  }
                  alt=""
                />
                <SecureValueToggler secureValue={nft.entranceMnemonic} />
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default MyCollection;
