import { Login } from "../view";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const userLogin = () =>{

const {login} = Login();    

const navigate = useNavigate();

const dispatch = useDispatch();

const [loginRequest, loginResponse] = useLoginMutation();

const onLogin = (e) => {

    e.preventDefault();

    loginRequest(login);

    

    
}

return {
    onLogin, 
}


}

export default userLogin;