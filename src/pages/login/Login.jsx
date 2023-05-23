import React from "react";
import  '../login/Login.css';
import FormLogin from "../../components/FormLogin";
import wallpaper from '../../assets/fonts/wallpaper.jpg';
const Login = () => {

    return (
        <div>
            <div className="Login">
                <div className="Login-image">
                    <img src={wallpaper} alt="" />
                </div>
                <div className="Login-form">
                    <FormLogin/>
                </div>
            </div>
        </div>

    )
};

export default Login;