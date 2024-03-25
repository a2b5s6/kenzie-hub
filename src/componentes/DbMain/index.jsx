import { CreateTechModal } from "../CreateTechModal";
import { EditTechModal } from "../EditTechModal";
import { TechList } from "../TechList";
import style from "./style.module.scss";

export const DbMain = () => {
    return (
        <div
            className={style.conteiner}
        >
            <TechList />
            <CreateTechModal />
            <EditTechModal />
        </div>
    );
};
