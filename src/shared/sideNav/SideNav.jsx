import React from "react";
import { Nav } from "react-bootstrap";

//custom style
import "./sideNav.style.css";

//image
import avatar from "../../assets/img/avatar.jpg";
import dollar from "../../assets/img/dollar.svg";
import nft from "../../assets/img/nft.svg";
import carbon_badge from "../../assets/img/carbon_badge.svg";
import profile from "../../assets/img/profile.svg";
import question from "../../assets/img/question.svg";
import store from "../../assets/img/store.svg";
import users from "../../assets/img/users.svg";

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
            $ 100
          </div>
        </Nav.Link>
        <Nav.Link href="#Earn">
          <img src={dollar} alt="dollar" /> Earn
        </Nav.Link>
        <Nav.Link href="#NFT">
          <img src={nft} alt="nft" />
          NFT
        </Nav.Link>
        <Nav.Link href="#Refferrals">
          <img src={carbon_badge} alt="carbon_badge" />
          Refferrals
        </Nav.Link>
        <Nav.Link href="#Profile">
          <img src={profile} alt="profile" />
          Profile
        </Nav.Link>
        <Nav.Link href="#Manage">
          {/*<img src={question} alt="question" />*/}
          Manage
        </Nav.Link>
        <Nav.Link href="#Questions">
          <img src={question} alt="question" />
          Questions
        </Nav.Link>
        <Nav.Link href="#Store">
          <img src={store} alt="store" />
          NFT Store
        </Nav.Link>
        <Nav.Link href="#Users">
          <img src={users} alt="users" />
          Users
        </Nav.Link>
      </div>
    </div>
  );
};

export default SideNav;
