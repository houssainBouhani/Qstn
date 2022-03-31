import React from "react";

//side nav
import SideNav from "../../../shared/sideNav/SideNav";
import WalkThrough from "../walkthrough/WalkThrough";

const Dashboard = () => {
  return (
    <div className="background-container">
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <div className="dashboard-content">
          <WalkThrough />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
