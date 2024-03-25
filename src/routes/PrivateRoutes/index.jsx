import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    const { loggedUser } = useContext(UserContext);

    return loggedUser ? <Outlet /> : <Navigate to="/" />
};