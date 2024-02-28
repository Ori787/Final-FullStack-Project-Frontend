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

    return { signupValue };

};

export default SignupLogic;