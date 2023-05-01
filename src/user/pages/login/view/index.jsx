import { React, useState } from "react";

import Button from "../../../../components/button/button";
import InputField from '../../../../components/input-field/inputField';
import { LoginWrapper } from "./loginStyle";
import userLogin from '../hooks/userLogin'

export const Login = () => {

  
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });

  console.log(login);

  const { onLogin } = userLogin();

  return (
    <LoginWrapper>
      <div className = 'box'>

      <h2>Login</h2>
      
      <form onSubmit = {onLogin}>
        
      <InputField
      icon='userName'
        placeholder="Enter name"
        type='text'
        label="userName"
        name="userName"
        value={login.userName}
        onChange={(e) =>
          setLogin({ ...login, [e.target.name]: e.target.value })
        }
        />

      <InputField
      icon='password'
      type="password"
      placeholder="Enter password"
      label="Password"
      name="password"
      value={login.password}
      onChange={(e) =>
        setLogin({ ...login, [e.target.name]: e.target.value })
      }
      />

      </form>


<Button name='Login' type='submit' />

        </div>




    </LoginWrapper>
  );

return {login}

};
