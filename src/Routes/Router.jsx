import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import { SignInSide } from "../components/pages/login-page";
import { SignUp } from "../components/pages/register-page";
import { FlightOffers } from "../Amadeus API/offers";
import AuthGuard from "../Guard/authGuard";


const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<SignInSide />}/>
            <Route path={ROUTES.REGISTER} element={<SignUp />}/>
            <Route path={ROUTES.HOME} element={<AuthGuard />}/>
            <Route path={ROUTES.HOME} element={<FlightOffers />} />
        </Routes>
    );
};

export default Router;

