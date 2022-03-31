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
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
