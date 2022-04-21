const MyCollection = (props) => {
    const imgBaseUrl = props.backendService + "/ipfstoimage?uri=";
    return(
        <div>
            <div>
                <div className="my-collection">
                    <h1>MY COLLECTION</h1>
                    <div style={{marginTop:"3rem"}}><a className={"rarity-rank-button"} href={"#"} target={"_blank"}>Rarity Rank</a></div>
                </div>
            </div>

            {props.nftCollection.map((nft, index) => {
                return(
                    <div key={index} className={"collection-item-background"}>
                        <section>
                            <div className="my-collection-yeti"><img src={imgBaseUrl + nft.nft_dossier.private_metadata.extension.image} alt=""/>
                                <div className="live-my-collection">
                                    <h4>{nft.nft_dossier.public_metadata.extension.name} <span>Total Score: {nft.totals.total.toFixed(0)}</span></h4>
                                    <p>#{nft.token_id} <span>Rank: {nft.totals.rank}</span></p>
                                </div>
                            </div>
                        </section>
                        <div>
                            <div className="customerTable">
                                <div className="customerbodyTable">
                                    <div className="customerTablehead">
                                        <div className="customerTableheadInner">
                                            <div style={{flexGrow: 3}}>
                                                <p className="headText">Trait</p>
                                            </div>
                                            <div style={{flexGrow: 4}}>
                                                <p className="headTextcenter">Value</p>
                                            </div>
                                            <div style={{flexGrow: 4}}>
                                                <p className="headTextcenter">Score</p>
                                            </div>
                                            <div style={{flexGrow: 2}}>
                                                <p className="headTextlast">Percentage</p>
                                            </div>
                                        </div>
                                    </div>
                                    {nft.scores.map((attr) => {
                                        return (
                                            <div className="customerTablerow" key={`${nft.token_id}${attr.type}`}>
                                                <div style={{flexGrow: 3}}>
                                                    <p className="paraText">{attr.type}</p>
                                                </div>
                                                <div style={{flexGrow: '3.5'}}>
                                                    <p className="paraText">{attr.value}</p>
                                                </div>
                                                <div style={{flexGrow: 1}}>
                                                    <p className="paraText">{attr.score.toFixed(2)}</p>
                                                </div>
                                                <div style={{flexGrow: 3}}>
                                                    <p className="paralast">{(attr.percentage * 100).toFixed(2)}%</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MyCollection;
