import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../login/view/index";

export const CustomRoute = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
        
        </BrowserRouter>
    )
}