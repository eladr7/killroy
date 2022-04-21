const Hero = (props) => {
    return(
        <div className={"hero-background"}>
            <div className="hero-section-main">
                <div className="hero-section-text">
                    <h3>The Council of Gyld</h3>
                    <p>The Council of Gyld is the vehicle through which the Cryptids will achieve their eternal
                        missions:
                        to connect creators and collectors on the Secret Network, creating financial opportunity,
                        community, and the chance to go to the moon for all who know the secret.
                    </p> <a href={"https://discord.gg/w84egv2Enb"} rel="noreferrer" target={"_blank"}>Get Whitelist</a></div>
                <div className="hero-text-img"><img src="Group 715.png" alt="" />
                    <div className="hero-img-time">
                        <p><span style={{fontWeight:'800'}}>Public minting is now open!</span></p>
                        <p><span style={{fontSize:'18px'}}>Remaining : {props.totalMints} (out of 2321)</span></p>
                    </div>
                    <div className="mintPrice">
                        <div className="priceTitle">
                            <p><span>Mint Price</span>
                                <br/>
                                100 $sSCRT</p>
                        </div>
                        {/*<div className="mint"><a href="#" onClick={() => {props.handleMint()}}>MINT</a></div>*/}
                        <div className="mint"><a href="#popup3">MINT</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
