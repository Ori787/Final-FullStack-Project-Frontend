import axios from "axios";
import normalizeSignup from "../../normalization/normalizeSignup";


const SignupRequest = async (signupValue) => {

    
const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

try {
    const request = normalizeSignup(signupValue);
    const { data } = await axios.post(`${baseURL}/users`, request)
    console.log("data", data)
} catch (err) {
console.log("An error occured", err)
};
};

export default SignupRequest;