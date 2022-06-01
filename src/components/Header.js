import { HashLink as Link } from "react-router-hash-link";
import MobileNavbar from "./MobileNav";

const Header = (props) => {
  return (
    <section id="header-background">
      <header>
        <div id="brand">
          <a href={"https://legendao.io"} rel="noreferrer" target={"_blank"}>
            <img
              src="./image/Legendao_logo.svg"
              alt={""}
              className="logo"
              width="100%"
              height="auto"
            />
          </a>
        </div>
        <nav style={{ width: "100%", marginRight: "-17%", marginLeft: "25%" }}>
          <ul className="nav-list">
            <li>
              <Link to={"/"}>Homepage</Link>
            </li>
            <li style={{ whiteSpace: "nowrap" }}>
              <Link to={"/mycollection"}>My Collection</Link>
            </li>
            <li>
              <Link smooth to="/#roadmap-background">
                Roadmap
              </Link>
            </li>
            <li>
              <Link smooth to="/#accordian-background">
                F.A.Q.
              </Link>
            </li>
            {/*<li><Link smooth to="/#team-footer-background">Our Team</Link></li>*/}
            {/*<li><img src="./image/stashh.png" alt="" /></li>*/}
            <div style={{ display: "flex" }}>
              {/* <li>
                <a
                  href={"https://stashh.io/"}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="./image/ruby.svg" alt="" />
                </a>
              </li> */}
              <li style={{ marginTop: "2%" }}>
                <a
                  href={"https://discord.gg/w84egv2Enb"}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="./image/DiscordRed.svg" alt="" />
                </a>
              </li>
              <li>
                <a
                  href={"https://twitter.com/LegendaoNFT"}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="./image/TwitterRed.svg" alt="" />
                </a>
              </li>
            </div>
            {props.addressContainer}
            {/*<a className="ctn" href="#popup2" onClick={() => props.getBalance()}>Balance</a>*/}
          </ul>
        </nav>
        <div
          id="hamburger-icon"
          onClick={(e) => props.toggleMobileMenu(e)}
          className={props.mobileMenuOpen ? "open" : ""}
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        {props.mobileMenuOpen && (
          <div className="open">
            <div className="mobile-menu">
              <MobileNavbar toggleMobileMenu={props.toggleMobileMenu} />
            </div>
          </div>
        )}
      </header>
      {/* nav bar end */}
    </section>
  );
};

export default Header;
