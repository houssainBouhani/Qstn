/********************************* pages  ***********************************/

// auth
import Register from "./pages/authentication/register/Register";
import Login from "./pages/authentication/login/Login";

//landing
import Landing from "./pages/landing/Landing";
import NavigationMenu from "./shared/navbar/NavigationMenu";
import Terms from "./pages/terms/Terms";

// end user components
import Dashboard from "./pages/end-user/dashboard/Dashboard";
import WalkThrough from "./pages/end-user/walkthrough/WalkThrough";
import Nft from "./pages/end-user/nft/Nft";
import Earn from "./pages/end-user/earn/Earn";
import Profile from "./pages/end-user/profile/Profile";

//react router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="position-relative">
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth/Register" element={<Register />} />
        <Route path="/Auth/Login" element={<Login />} />
        <Route path="/Terms-conditions" element={<Terms />} />
        <Route path="/Tutorial" element={<WalkThrough />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<Earn />} />
          <Route path="/Dashboard/Earn" index element={<Earn />} />
          <Route path="/Dashboard/Nft" element={<Nft />} />
          <Route path="/Dashboard/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
