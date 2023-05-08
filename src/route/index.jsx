import { BrowserRouter } from "react-router-dom";
import OwnerRoutes from "./ownerRoute";
import PublicRoutes from "./publicRoute";
import UserRoutes from "./userRoute";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const auth = useSelector((state) => state.authSlice.user);

  return (
    <BrowserRouter>
      {!auth && <PublicRoutes />}
      {auth && auth.roleCode === '001' && <UserRoutes />}
      {auth && auth.roleCode === '222' && <OwnerRoutes />}
    </BrowserRouter>
  );
};

export default AppRoutes;
