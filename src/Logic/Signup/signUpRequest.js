import axios from "axios";
import normalizeSignup from "../../normalization/normalizeSignup";


const SignupRequest = async (signupValue) => {

    
const baseURL = "http://localhost:8080/users"

try {
    const request = normalizeSignup(signupValue);
    const { data } = await axios.post(baseURL, request)
    console.log("data", data)
} catch (err) {
console.log("An error occured", err)
};
};

export default SignupRequest;