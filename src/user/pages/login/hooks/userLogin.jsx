import { useEffect, useState } from "react";

import { loginUser } from "../../../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { changingLoadingStatus } from "../../../../store/slice/loadingSlice";
// import { useDispatch } from "react-redux";
// import { useLoginUserMutation } from "../../../../store/service/authentication";

const userLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isUserLogin, setUserLogin] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {

  //   if(loginResponse?.isLoading){
  //     dispatch(changingLoadingStatus(true))
  //   }
  //   if(loginResponse?.isError){
  //     dispatch(changingLoadingStatus(false))

  //   }
  // }, [loginResponse]);

  const onLogin = async(e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("All field required");
    } else {
   
    const res =  await dispatch(loginUser(login)).unwrap();
    if(res){
      navigate('/home');
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
