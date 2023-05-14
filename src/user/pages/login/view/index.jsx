import { React, useState } from "react";

import Button from "../../../../components/button/button";
import InputField from "../../../../components/input-field/inputField";
import { Link } from "react-router-dom";
import { LoginWrapper } from "./loginStyle";
import futsalLogin from '../../../../common/img/futsalLogin.jpg'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import userLogin from "../hooks/userLogin";

export const Login = () => {
  const { onLogin, setLogin, login } = userLogin();
  const dispatch = useDispatch();

  return (
    <LoginWrapper>
     

     <div className= 'containerForm'>
      
      <div className="box">
        <h2>User Login</h2>

        <form onSubmit={onLogin}>
          <InputField
            icon="email"
            placeholder="Enter name"
            type="email"
            label="Email"
            name="email"
            value={login.email}
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
            />

          <InputField
            icon="password"
            type="password"
            placeholder="Enter password"
            label="Password"
            name="password"
            value={login.password}
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
            />

          <Button name="Login" type="submit" />
        </form>

        <p>If don't have account!</p>

        <Link to="/userRegister">Sign up</Link>

        <div>
          <Link to="/ownerLogin">Manager Sign In</Link>
        </div>
            </div>
      </div>
    </LoginWrapper>
  );
};
