import loadingIcon from "../../assets/loading.svg";
import style from "./style.module.scss";

export const Loading = () => {

    return (
        <div className={style.loadingBox}>
            <img src={loadingIcon} alt="Carregando" />
        </div>
    );
};