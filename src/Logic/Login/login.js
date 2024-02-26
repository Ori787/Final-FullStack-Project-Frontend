import axios from "axios";
import React, { useState } from 'react';
import { SigninSchema } from "../../Validation/SigninJoi";


const LoginLogic = () => {

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

//todo change url to a real url
const URL = "https://www.google.com";

const HandleLoginClick = async () => {
    try {
        const validation = SigninSchema.validate(loginValue);
        if (validation.error) {
            throw new Error(validation.error.details[0].message);
        }
        
        await axios.post(URL, request);
    } catch (err) {
        console.log("Error", err);
        alert("Could not sign in. Please try again later");
    }
};

return { loginValue, HandleInputChange, HandleLoginClick };
};


export { LoginLogic };