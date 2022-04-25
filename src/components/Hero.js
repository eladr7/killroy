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
                    </p>
                </div>
                <div className="hero-text-img"><img src="Group 715.png" alt="" />
                    <div className="mintPrice">
                        {/* <div className="priceTitle">
                            <p><span>Mint Price</span>
                                <br/>
                                100 $sSCRT</p>
                        </div> */}
                        {/*<div className="mint"><a href="#" onClick={() => {props.handleMint()}}>MINT</a></div>*/}
                        <div className="mint"><a>SOLD OUT</a></div>
                    </div>
                    <div className="hero-img-time">
                        <p><span style={{fontWeight:'800'}}>See you in the LegenDAO Universe!</span></p>
                         {/* <p><span style={{fontSize:'18px'}}>Remaining : {props.totalMints}</span></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
