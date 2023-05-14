import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HeaderWrapper } from "./styleHeader";
import { logout } from "../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const name = localStorage.getItem("auth");

  const auth = JSON.parse(name);

  const userName = auth.name;
  const email = auth.email;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("hello");
    dispatch(logout());
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <div className="box">
        <div className="profile">
          <div className="iconContainer">
            <FaUserAlt className="icon" />
            <div className="detail">
              <p>
                {userName} <span>{email}</span>
              </p>
            </div>
          </div>
          <div className="logout">
            <p>Log Out</p>
            <button onClick={handleClick}>
              <FiLogOut />
            </button>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
