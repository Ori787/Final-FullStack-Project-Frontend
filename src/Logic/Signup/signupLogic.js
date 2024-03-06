import { useState } from "react";

const SignupLogic = () => {

    const [signupValue, setSignupValue] = useState({
        firstName: "",
        lastName: "",
        PhoneNumber: "",
        email: "",
        password: "",
        Address: "",
        country: "",
        zip: "",
        city: "",
    });

    const handleInputChange = (e) => {
setSignupValue((currentState) => ({
...currentState,
[e.target.id] : e.target.value
}));
    };

    return { signupValue, handleInputChange };

};

export default SignupLogic;