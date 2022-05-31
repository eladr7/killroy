import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function MobileNavbar(props) {
  return (
    <div className="group-776">
      <div className="group-666 flex-col-hcenter">
        <div className="group-965 flex-col-hcenter">
          <div className="group-079 flex-row">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ilj0tijsqw-810%3A2190?alt=media&token=378bf47d-74d5-400f-a461-00940e7df126"
              alt="Not Found"
              className="lgnd-logo-red-111"
            />
            {/* <p className="txt-438">x</p> */}
          </div>
          <div className="button flex-col-hcenter-vcenter">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/ilj0tijsqw-810%3A2108?alt=media&token=8a86807e-1327-48bb-81a0-653204274e14"
              alt="Not Found"
              className="wallet-41"
            />
            <p className="txt-469 flex-hcenter">Wallet</p>
          </div>
          <div className="line-49" />
          <Link to="/" onClick={(e) => props.toggleMobileMenu(e)}>
            <p className="txt-571 flex-hcenter">Homepage</p>
          </Link>
          <div className="line-43" />
          <Link to={"/mycollection"} onClick={(e) => props.toggleMobileMenu(e)}>
            <p className="txt-097 flex-hcenter">My Collection</p>
          </Link>
          <div className="line-43" />
          <Link
            smooth
            to="/#roadmap-background"
            onClick={(e) => props.toggleMobileMenu(e)}
          >
            <p className="txt-418 flex-hcenter">Roadmap</p>
          </Link>
          <div className="line-45" />
          <Link
            smooth
            to="/#accordian-background"
            onClick={(e) => props.toggleMobileMenu(e)}
          >
            <p className="txt-418 flex-hcenter">F.A.Q.</p>
          </Link>
          <div className="line-46" />
        </div>
        <div className="line-47" />
      </div>
    </div>
  );
}
