import {Link, NavLink} from "react-router-dom";
const Popups = (props) => {
    return(
        <section>
            <div id="popup1" className="overlay">
                <div className="popup-width">
                    <div className="popup">
                        <h2>Mint Successful!</h2> <a className="close" href="#">×</a>
                        <div className="content"> Congratulations,you’ve successfully minted an NFT!</div>
                        <div className="popupBtn"><a className="bark" href="/mycollection">See my NFT</a> <a className="light"
                                                                                                 href="#">Mint
                            Again</a></div>
                    </div>
                </div>
            </div>
            {/* popup behance */}
            <div id="popup2" className="overlay">
                <div className="popup-width">
                    <div className="popup">
                        <h2>Balance</h2> <a className="close" href="#">×</a>
                        <div className="content">
                            <div className="innercontent"><img src="Group 718.png"/>
                                <p>{props.scrtWrapper}</p>
                            </div>
                            <div className="innercontent"><img src="Group 718.png"/>
                                <p>{props.sscrtWrapper}</p>
                            </div>
                        </div>
                        <div className="popupBtn"><NavLink className="barkbehance" to="https://www.patlid.com/posts/guide-how-to-convert-scrt-sscrt-keplr-wallet">Swap SCRT</NavLink></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popups;