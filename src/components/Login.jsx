import React from "react";
import "./Login.css";
import { loginUrl } from "../constants/Heavens";
import Logo from "../assets/images/Logo.png";

const Login = () => {
	return (
		<div className="Login">
			<img src={Logo} alt="HeavensMusic Logo" />
			<a href={loginUrl}>Click here to Login</a>
		</div>
	);
};

export default Login;
