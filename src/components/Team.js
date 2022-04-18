const Team = (props) => {
    return(
        <section id="team-footer-background">
            <div className="OUR-TEAM">
                <h3>OUR TEAM</h3> </div>
            <div className="live">
                <div className="mobilecol">
                    <div className="live-img-1"> <img src="./image/scrt1.jpeg" alt="" />
                        <div className="live-img-1-content content-absolute show-wide">
                            <h3>The SCRT Labs Team</h3>
                        </div>
                    </div>
                    <div className="live-img-1-2"> <img src="./image/scrt2.jpeg" alt="" />
                        <div className="live-img-1-content content-absolute hide-wide">
                            <h3>The SCRT Labs Team<span style={{marginLeft: '1rem'}}><a href="https://discord.gg/EaMnsZztRX" target={"_blank"}><img style={{width:'17px'}} src="./image/discord.svg" alt="" /></a> <a href={"https://twitter.com/scrt_labs"} target={"_blank"}><img style={{width:'17px'}} src="./image/twitter.svg" alt="" /></a></span></h3>
                        </div>
                        <div className="live-img-1-content content-absolute show-wide" style={{width:'276px'}}>
                            <span style={{marginLeft: '1rem', marginTop:'0.3rem'}}><a href="https://discord.gg/EaMnsZztRX" target={"_blank"}><img style={{width:'17px'}} src="./image/discord.svg" alt="" /></a> <a href={"https://twitter.com/scrt_labs"} target={"_blank"}><img style={{width:'17px'}} src="./image/twitter.svg" alt="" /></a></span>
                        </div>
                    </div>
                    {/*<div className="live-img-1-3"> <img src="./image/scrt3.jpeg" alt="" />*/}
                    {/*    <div className="live-img-1-content content-absolute hide-wide">*/}
                    {/*        <h3>The SCRT Labs Team<span style={{marginLeft: '1rem'}}><img src="./image/Vector (3).png" alt="" /> <img src="./image/Vector (4).png" alt="" /></span></h3>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="live-img-3"> <img src="./image/designer.jpeg" alt="" />
                    <div className="live-img-1-content">
                        <h3>ANS<span><a href={"https://twitter.com/CreationSinkGFX"} target={"_blank"}><img style={{width:'17px'}} src="./image/twitter.svg" alt="" /></a></span></h3>
                        <p className={"team-role"}>Art</p>
                    </div>
                </div>
                <div className="live-img-4"> <img src="./image/developer.jpeg" alt="" />
                    <div className="live-img-1-content">
                        <h3>Kevin<span><a href={"https://twitter.com/KevinAKidd"} target={"_blank"}><img style={{width:'17px'}} src="./image/twitter.svg" alt="" /></a></span></h3>
                        <p className={"team-role"}>Dev</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team