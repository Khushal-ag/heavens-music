import React from "react";
import "./Login.css";
import { loginUrl } from "../constants/heavens";

const Login = () => {
	return (
		<div className="Login">
			<img
				src="/assets/image/HeavenMusic Logo.png"
				alt="HeavensMusic Logo"
			/>
			<a href={loginUrl}>Click Here</a>
		</div>
	);
};

export default Login;
