import ROUTES from "./Routes/routesModel";

const loggedInLinks = [
    { to: ROUTES.HOME, children: "Home Page"}
];

const loggedOutLinks = [
    { to: ROUTES.LOGIN, children: "Login"},
    { to: ROUTES.SIGNUP, children: "Sign up"},
];

export { loggedInLinks, loggedOutLinks };