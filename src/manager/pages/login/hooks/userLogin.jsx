import { useEffect, useState } from "react";

import { loginOwner } from "../../../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { changingLoadingStatus } from "../../../../store/slice/loadingSlice";



// import { useLoginOwnerMutation } from "../../../../store/service/authentication";


const userLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [loginRequest, loginResponse] = useLoginOwnerMutation();

  

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  

  const onLogin =async(e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("All field required");
    } else {
      // console.log(login)

    const res =  await dispatch(loginOwner(login)).unwrap();
    if(res){
      navigate('/addBooking');
    }
      // console.log(loginResponse);
      // loginRequest(login);
      
    }
  };

  return {
    onLogin,
    login,
    setLogin,
    // loginResponse,
    
  };
};

export default userLogin;
