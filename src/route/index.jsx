import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddBooking } from "../manager/pages/addBooking/view";
import { Booking } from "../user/pages/booking/view/index";
import { CustomerManagement } from "../manager/pages/customerManagement/view";
import { Dashboard } from "../user/pages/dashboard/view";
import Home from "../user/pages/home";
import { Login } from "../user/pages/login/view/index";
import { ManagerDashboard } from "../manager/pages/dashboard/view";
import { ManagerRegister } from "../manager/pages/register/view";
import { Register } from "../user/pages/register/view";

export const CustomRoute = () => {
  return (
    <BrowserRouter>

    {/* User page */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<Register />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="/payment" />
          <Route path="/booking" element={<Booking />} />
          <Route path="/home" element ={<Home/>} />
        </Route>

        {/* Manager Page */}

        <Route path="/managerRegister" element={<ManagerRegister />} />

        <Route path="/" element={<ManagerDashboard />}>
          <Route path = "/addBooking" element = {<AddBooking />} />
          <Route path = "/customerManagement" element = {<CustomerManagement />} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};
