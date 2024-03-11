import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
    <NavLink to={to}>
<Typography>
    {children}
</Typography>
    </NavLink>
}

export default NavLinkComponent;