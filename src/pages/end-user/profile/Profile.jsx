import React, { useState } from "react";

import { Tabs, Tab } from "react-bootstrap";
import EditProfile from "./components/edit/EditProfile";

const Profile = () => {
  const [key, setKey] = useState("Profile");

  return (
    <div className="container profile-container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Profile" title="Edit Profile">
          <EditProfile />
        </Tab>
        <Tab eventKey="Badges" title="Badges">
    
        </Tab>
        <Tab eventKey="Wallet" title="Wallet Address">
       
        </Tab>
      </Tabs>
    </div>
  );
};

export default Profile;
