import { useState } from "react";

export const RegisterHook = () => {
  const [register, setRegister] = useState({
    userName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) =>{

    e.preventDefault();

    console.log(register)
  }

  const handleChange = (e) =>{
   setRegister({...register, [e.target.name]:e.target.value})
  }

  return { register, setRegister,handleSubmit,handleChange };
};
