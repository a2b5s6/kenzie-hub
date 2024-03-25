import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { KenzieHubAPI } from "../services/api.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState(null);
    const [userTechs, setUserTechs] = useState([]);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const [userToken, setUserToken] = useState(
        localStorage.getItem("@TOKEN")
    );

    useEffect(() => {

        const token = localStorage.getItem("@TOKEN");
        setUserToken(token);

        const getUser = async () => {
            try {
                setLoading(true);
                const { data } = await KenzieHubAPI.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setLoggedUser(data);
                setUserTechs(data.techs);
                navigate("/dashboard");
            } catch {

            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, []);

    const userLogin = async (formData) => {
        try {
            const { data } = await KenzieHubAPI.post("/sessions", formData);

            toast.success("Login efetuado com sucesso");

            setUserToken(data.token);
            localStorage.setItem("@TOKEN", data.token);
            setLoggedUser(data.user);
            setUserTechs(data.user.techs);

            setTimeout(() => {
                navigate("/dashboard");
            }, 1 * 1000);

        } catch {
            toast.error("Email ou Senha incorretos!");
        };
    };

    const createAccount = async (formData) => {
        try {
            const { data } = await KenzieHubAPI.post("/users", formData);

            toast.success("Conta criada com sucesso!");

            setTimeout(() => {
                navigate("/");
            }, 1 * 1000);
        } catch (error) {
            toast.error("Ops! Algo deu errado");
        };
    };

    const logoutUser = () => {
        localStorage.removeItem("@TOKEN");
        setLoggedUser(null);
        setUserToken("");
        setUserTechs([]);
        toast.success("Logout realizado com sucesso");

        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{
                userLogin, createAccount, logoutUser,
                loggedUser, loading, setLoading, userToken, userTechs, setUserTechs
            }}>
            {children}
        </UserContext.Provider>
    );
};