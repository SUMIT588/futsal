import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HeaderWrapper } from "./styleHeader";
import { Modal } from "../confirmButton/modal";
import { logout } from "../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const name = localStorage.getItem("auth");

  const [showModal, setShowModal] = useState(false);

  const auth = JSON.parse(name);

  const userName = auth.name;
  const email = auth.email;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
   setShowModal(true);
  };

 const handleConfirmClose = () =>{
  setShowModal(false);
  dispatch(logout());
  navigate("/");
 }
  
 
 const handleCloseModal = () => {
   setShowModal(false);
   
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

      {showModal && (
        <Modal
          title="Confirm Logout"
          message="Are you sure want to log out?"
          onConfirm={handleConfirmClose}
          onCancel={handleCloseModal}
        />
      )}
    </HeaderWrapper>
  );
};
