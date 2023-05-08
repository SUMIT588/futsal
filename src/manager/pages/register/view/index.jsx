import Button from "../../../../components/button/button";
import ErrorMessage from "../../../../components/errorMessage";
import InputField from "../../../../components/input-field/inputField";
import React from "react";
import { RegisterHook } from "../hooks/register";
import { RegisterWrapper } from "./registerStyle";

export const ManagerRegister = () => {
  const { register, handleSubmit, handleChange } = RegisterHook();

const confirmPasswordError = (register) =>{

  if(register?.password != register?.confirmPassword){
    return <ErrorMessage errorMessage = 'Password not match' />
  }

  return null;

}

console.log({register})

  return (
    <React.Fragment>

<RegisterWrapper >

<form className = 'box' onSubmit = {handleSubmit}>

    <h2> Manager Register</h2>

      <InputField
        icon="username"
        placeholder="Enter name"
        name='userName'
        type="text"
        value={register.userName}
        onChange={handleChange}
        label="Name"
        />

      <InputField
        icon="email"
        placeholder="Enter email"
        name="email"
        type="email"
        value={register.email}
        onChange={handleChange}
        label="Email"
        />

      <InputField
        icon="number"
        placeholder="Enter password"
        name="contact"
        type="tel"
        value={register.contact}
        onChange={handleChange}
        label="Contact Number"
        />

      <InputField
        icon="password"
        placeholder="Enter password"
        name="password"
        type="password"
        value={register.password}
        onChange={handleChange}
        label="Password"
        />

      <InputField
        icon="password"
        placeholder="Enter confirm password"
        name="confirmPassword"
        type="password"
        value={register.confirmPassword}
        onChange={handleChange}
        label="Confirm Password"
        />
{register?.confirmPassword && confirmPasswordError(register)}
        
<Button type='submit' name = 'Register' />

        </form>
        </RegisterWrapper>
    </React.Fragment>
  );
};
