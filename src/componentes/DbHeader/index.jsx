import { useContext } from "react";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const DbHeader = () => {

    const { loggedUser } = useContext(UserContext);

    const { name, course_module } = loggedUser;

    return (
        <div
            className={style.conteiner}
        >
            <h2
                className="title1 wht"
            >{`Olá, ${name}`}
            </h2>
            <p
                className="headline grey">
                {course_module}
            </p>
        </div>
    );
};