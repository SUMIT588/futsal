import { useEffect, useState } from "react";

import { registerUser } from "../../../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { useRegisterUserMutation } from "../../../../store/service/authentication";

export const RegisterHook = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  // const [registerRequest, registerResponse] = useRegisterUserMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    userName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !register.userName ||
      !register.email ||
      !register.contact ||
      !register.password ||
      !register.confirmPassword
    ) {
      alert("All field required");
    } else {
      const res = await dispatch(registerUser(register)).unwrap();
      if(res){
        navigate('/userRegister');
      }
    }
  };

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  return { register, setRegister, handleSubmit, handleChange };
};
