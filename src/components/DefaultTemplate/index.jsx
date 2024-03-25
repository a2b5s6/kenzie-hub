import style from "./style.module.scss";
import { Header } from "../Header";

export const DefaultTemplate = ({ children, type }) => {
    return (
        type === "dashboard" ?
            <div className={style.conteiner}>
                <Header type={type} />
                <main>
                    {children}
                </main>
            </div>
            :
            type === "login" ?
                <div className={`${style.conteiner} ${style.two}`}>
                    <Header type={type} />
                    <main>
                        {children}
                    </main>
                </div>
                :
                type === "register" ?
                    <div className={`${style.conteiner} ${style.three}`}>
                        <Header type={type} />
                        <main>
                            {children}
                        </main>
                    </div>
                    : null
    );
};