import { Route, Routes } from "react-router-dom";

import { Booking } from "../user/pages/booking/view/index";
import { Dashboard } from "../user/pages/dashboard/view";
import Home from "../user/pages/home";
import { Payment } from "../components/khalti/khalti";

const UserRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Dashboard />}>
        <Route path="/booking" element={<Booking />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Route>

    </Routes>
  );
};

export default UserRoutes;
