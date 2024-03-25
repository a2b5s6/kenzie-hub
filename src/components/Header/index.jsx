import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";

export const Header = ({ type }) => {

    const { logoutUser } = useContext(UserContext);

    return (
        type === "login" ?
            <header>
                <img src={logo} alt="Logo" />
            </header> :
            type === "register" ?
                <header
                    className={style.flexboxReg}
                >
                    <img src={logo} alt="Logo" />
                    <nav
                        className={style.btn}>
                        <Link to="/">
                            <span
                                className="headline wht bold">
                                Voltar
                            </span>
                        </Link>
                    </nav>
                </header> :
                type === "dashboard" ?
                    <header
                        className={style.flexboxDash}>
                        <img src={logo} alt="Logo" />
                        <div
                            className={style.btn}>
                            <button
                                onClick={() => {
                                    logoutUser();
                                }}
                            >
                                <span
                                    className="headline wht bold">
                                    Sair
                                </span>
                            </button>
                        </div>
                    </header>
                    : null
    );
};