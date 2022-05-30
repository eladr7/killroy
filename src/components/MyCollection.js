import SecureValueToggler from "./secureValueToggler";
import Footer from "./Footer";

const MyCollection = (props) => {
  const imgBaseUrl = props.backendService + "/ipfstoimage?uri=";
  const hasNFTs = props.nftCollection.length > 0;
  return (
    <div className={"collection-item-background"}>
      <div>
        <div className="my-collection">
          <h1 className="grim-title">MY COLLECTION</h1>
        </div>
      </div>
      {!hasNFTs && (
        <div className="no-nfts">
          Oh no. <br />
          No NFTs were minted. Return to the home page and mint
          <br />
          one.
        </div>
      )}
      {hasNFTs &&
        props.nftCollection.map((nft, index) => {
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
      <Footer bgClass="footer-bg-my-collection" />
    </div>
  );
};

export default MyCollection;
