import { useEffect, useState } from "react";

import { loginUser } from "../../../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const userLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isUserLogin, setUserLogin] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onLogin = async(e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("All field required");
    } else {
   
    const res =  await dispatch(loginUser(login)).unwrap();
    if(!res.error){
      navigate('/home');
    }

    if(res.error){
      alert(res.error)
    }

  }
}


  return {
    onLogin,
    login,
    setLogin,
    isUserLogin,
  };
};

export default userLogin;
