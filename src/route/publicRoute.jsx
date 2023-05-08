import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../user/pages/login/view/index";
import { ManagerRegister } from "../manager/pages/register/view";
import { OwnerLogin } from "../manager/pages/login/view";
import { Register } from "../user/pages/register/view";

const PublicRoutes = () => {
  return (    
      <Routes>
          {/* User page */}
        <Route path="/" element={<Login />} />
        <Route path="/userRegister" element={<Register />}/>
        {/* Manager Page */}
        <Route path="/ownerRegister" element={<ManagerRegister />} />
        <Route path="/ownerLogin" element={<OwnerLogin/>} />
      </Routes>
  
  );
};

export default PublicRoutes;
