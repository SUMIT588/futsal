import { Route, Routes } from "react-router-dom";

import { Booking } from "../user/pages/booking/view/index";
import { BookingHistory } from "../user/pages/bookingHistory/bookingHistory";
import { Dashboard } from "../user/pages/dashboard/view";
import Home from "../user/pages/home";
import Map from "../components/map/map";
import { Notice } from "../user/pages/notice/view";
import { Payment } from "../components/khalti/khalti";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/booking" element={<Booking />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/map" element={<Map />} />
        <Route path="/bookingHistory" element={<BookingHistory />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
