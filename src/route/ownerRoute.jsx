import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddBooking } from "../manager/pages/addBooking/view";
import AddNotice from "../manager/pages/addNotice/view";
import { CustomerManagement } from "../manager/pages/customerManagement/view";
import { CustomerManagementWrapper } from "../manager/pages/customerManagement/customerManStyle";
import { ManagerDashboard } from "../manager/pages/dashboard/view";

const OwnerRoutes = () => {
  return (
    <Routes>
      {/* Manager Page */}

      <Route path="/" element={<ManagerDashboard />}>
        <Route path="/addBooking" element={<AddBooking />} />
        <Route path="/customerManagement" element={<CustomerManagement />} />
        <Route path="/addNotice" element={<AddNotice />} />
      </Route>
    </Routes>
  );
};

export default OwnerRoutes;
