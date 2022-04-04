import React from "react";
import { Nav } from "react-bootstrap";

import { Link, Outlet } from "react-router-dom";

//custom style
import "./sideNav.style.css";

//image
import avatar from "../../assets/img/avatar.jpg";
import dollar from "../../assets/img/dollar.svg";
import nft from "../../assets/img/nft.svg";
import carbon_badge from "../../assets/img/carbon_badge.svg";
import profile from "../../assets/img/profile.svg";
import store from "../../assets/img/store.svg";

const SideNav = () => {
  return (
    <div className="sidenav-dash p-0">
      <div className="d-flex flex-column justify-content-center align-items-center align-items-sm-start text-white min-vh-100 p-5">
        <Nav.Link
          href="#home"
          className="d-flex flex-column w-100 align-items-center"
        >
          <img className="avatar" src={avatar} alt="avatar" />

          <div className="balance d-flex justify-content-center mt-2">
            Balance : 100
          </div>
        </Nav.Link>
        <Link to={"/Dashboard/Earn"} className="nav-link">
          <img src={dollar} alt="dollar" /> Earn
        </Link>
        <Link to={"/Dashboard/Nft"} className="nav-link">
          <img src={nft} alt="nft" />
          NFT
        </Link>
        <Link to={"/Dashboard/Profile"} className="nav-link">
          <img src={profile} alt="profile" />
          Profile
        </Link>
        <Nav.Link href="#Refferrals">
          <img src={carbon_badge} alt="carbon_badge" />
          Refferrals
        </Nav.Link>

        <Nav.Link href="#Store">
          <img src={store} alt="store" />
          NFT Store
        </Nav.Link>
      </div>
    </div>
  );
};

export default SideNav;
