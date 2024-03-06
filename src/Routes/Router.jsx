import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routesModel";
import { SignInSide } from "../components/pages/login-page";
import { SignUp } from "../components/pages/register-page";
import HotelOffers from "../Amadeus API/hoteloffers";




const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<SignInSide />}/>
            <Route path={ROUTES.REGISTER} element={<SignUp />}/>
        </Routes>
    );
};

export default Router;

