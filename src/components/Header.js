import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <section id="header-background">
            <header>
                <div id="brand">
                    <Link to={"/"} ><img src="./image/Cryptids.png" alt={""} className="logo"/></Link>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><Link to={"/mycollection"}>My Collection</Link></li>
                        <li><a href="#roadmap-background"> Roadmap</a></li>
                        <li><a href="#accordian-background">F.A.Q.</a></li>
                        <li><a href="#team-footer-background">Our Team</a></li>
                        {/*<li><img src="./image/stashh.png" alt="" /></li>*/}
                        <li><a href={"https://discord.gg/w84egv2Enb"} target={"_blank"}><img src="./image/discord.png" alt="" /></a></li>
                        <li><a href={"https://twitter.com/LegendaoNFT"} target={"_blank"}><img src="./image/twitter.png" alt="" /></a></li>
                        {props.addressContainer}
                        {/*<a className="ctn" href="#popup2" onClick={() => props.getBalance()}>Balance</a>*/}
                    </ul>
                </nav>
                <div id="hamburger-icon" onClick={(e) => props.toggleMobileMenu(e)} className={props.mobileMenuOpen? 'open' : ''}>
                    <div className="bar1"/>
                    <div className="bar2"/>
                    <div className="bar3"/>
                    <ul className="mobile-menu">
                        <li><a href="/mycollection">My Collection</a></li>
                        <li><a href="#roadmap-background"> Roadmap</a></li>
                        <li><a href="#accordian-background">F.A.Q.</a></li>
                        <li><a href="#team-footer-background">Our Team</a></li>
                        <div className="social-icons">
                            {/*<li><img src="./image/stashh.png" alt="" /></li>*/}
                            <li><img src="./image/discord.png" alt="" /></li>
                            <li><img src="./image/twitter.png" alt="" /></li>
                        </div>
                        <div className="mobile-btn">{props.addressContainer}
                            {/*<a className="ctn" href="#popup2" onClick={() => props.getBalance()}>Balance</a>*/}
                        </div>
                    </ul>
                </div>
            </header>
            {/* nav bar end */}
        </section>
    )
}

export default Header;