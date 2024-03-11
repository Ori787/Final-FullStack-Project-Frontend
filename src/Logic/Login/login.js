import axios from "axios";
import React, { useEffect, useState } from 'react';
import { SigninSchema } from "../../Validation/SigninJoi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice";
import { jwtDecode } from "jwt-decode";
import ROUTES from "../../Routes/routesModel";
import { getToken, storeToken } from "../../services/tokenStorage";

const LoginLogic = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();


const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
});

const [rememberMe, setRememberMe] = useState(false);

const HandleInputChange = (e) => {

setLoginValue((currentState) => ({
...currentState, 
[e.target.id] : e.target.value
}));
};

const handleRememberMe = (e) => {
    setRememberMe(e.target.checked ? true : false)
};


const request = loginValue;


const HandleLoginClick = async (e) => {
    e.preventDefault();
    try {
        const validation = SigninSchema.validate(loginValue);
        if (validation.error) {
            console.log("Validation Error:", validation.error);
        }
        
       const { data } = await axios.post("/users/login", request);


       if (data && data.token) {
console.log("data", data)
if (rememberMe) {
storeToken(data.token, rememberMe)
}
const decodedToken = jwtDecode(data.token);
dispatch(authActions.login(decodedToken))
navigate(ROUTES.HOME)
}

    } catch (err) {
        console.log("Error", err.response.data);
alert("Invalid password or email. please try again.")
    }
};

useEffect(() => {
const token = getToken();
if (token) {
    try {
const decodedToken = jwtDecode(token);
dispatch(authActions.login(decodedToken));
    } catch (err) {
        console.error('Invalid or expired token:', err.message);
dispatch(authActions.logout());
storeToken('', false);
    }
}
},[dispatch]);


return { loginValue, HandleInputChange, HandleLoginClick, handleRememberMe, rememberMe };

};


export default LoginLogic;