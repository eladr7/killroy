const MyCollection = (props) => {
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
                            <div className="my-collection-yeti"><img src="./image/our-team img 1.png" alt=""/>
                                <div className="live-my-collection">
                                    <h4>{nft.name} <span>Total Score: 222.22</span></h4>
                                    <p>{nft.id} <span>Rank: 225</span></p>
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
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
                                    <div className="customerTablerow">
                                        <div style={{flexGrow: 3}}>
                                            <p className="paraText">Background</p>
                                        </div>
                                        <div style={{flexGrow: '3.5'}}>
                                            <p className="paraText">{nft.background}</p>
                                        </div>
                                        <div style={{flexGrow: 1}}>
                                            <p className="paraText">68.36</p>
                                        </div>
                                        <div style={{flexGrow: 3}}>
                                            <p className="paralast">22.5%</p>
                                        </div>
                                    </div>
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