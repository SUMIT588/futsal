import { useState, React } from "react";
import { LoginWrapper } from "./loginStyle";
import Button from "../../../components/button/button";
import InputField from '../../../components/input-field/inputField';



export const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  console.log(login);

  return (
    <LoginWrapper>
      <div className = 'box'>

      <h2>Login</h2>

      <InputField
      icon='username'
        placeholder="Enter name"
        type='text'
        label="Name"
        name="username"
        value={login.username}
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



<Button name='Login' type='submit' />

        </div>




    </LoginWrapper>
  );
};
