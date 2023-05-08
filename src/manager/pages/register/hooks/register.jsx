import { registerOwner } from "../../../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import { useRegisterOwnerMutation } from "../../../../store/service/authentication";

export const RegisterHook = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const [registerRequest, registerResponse] = useRegisterOwnerMutation();
  const [register, setRegister] = useState({
    userName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  // useEffect(()=>{
  //   if(!registerResponse?.isSuccess){
  //     console.log(registerResponse);
  //   }

  //  if( registerResponse?.isSuccess){
  //   navigate('/ownerLogin')
  //  }

  // },[registerResponse])

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
      const res = await dispatch(registerOwner(register)).unwrap();

      if (res) {
        navigate("ownerLogin");
      }
    }
  };

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  return { register, setRegister, handleSubmit, handleChange };
};
