import axios from "axios";
import React, { useEffect, useState } from 'react';
import { SigninSchema } from "../../Validation/SigninJoi";
import { useNavigate } from "react-router-dom";


const LoginLogic = () => {

    const navigate = useNavigate();


const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
});

const HandleInputChange = (e) => {

setLoginValue((currentState) => ({
...currentState, 
[e.target.id] : e.target.value
}));

};


const request = loginValue;


const URL = "http://localhost:8080/users/login";

const HandleLoginClick = async (e) => {
    e.preventDefault();
    try {
        const validation = SigninSchema.validate(loginValue);
        if (validation.error) {
            console.log("Validation Error:", validation.error);
        }
        
       const response = await axios.post(URL, request);

       const data = response.data;
if (data) {
    console.log("data", data)
    navigate("/")
}
    } catch (err) {
        console.log("Error", err);
        alert("could not sign in. please try again")
    }
};

return { loginValue, HandleInputChange, HandleLoginClick };

};


export default LoginLogic;