import { DbHeader } from "../../components/DbHeader";
import { DbMain } from "../../components/DbMain";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import style from "../style.module.scss";

export const DashboardPage = () => {

    return (<>
        <DefaultTemplate
            type="dashboard"

        >
            <div
                className={`${style.conteiner} ${style.two}`}
            >
                <hr
                    className={style.hr}
                />
                <DbHeader
                />
                <hr
                    className={style.hr}
                />
                <DbMain />

            </div>
        </DefaultTemplate>
    </>
    );
};