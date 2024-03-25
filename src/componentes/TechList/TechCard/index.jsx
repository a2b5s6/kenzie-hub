import { ImPencil } from "react-icons/im";
import { BiTrash } from "react-icons/bi";
import style from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {

    const { title, status, id } = tech;
    const { openModal, setTechToEdit, deleteTech } = useContext(TechContext);

    const editPost = () => {
        openModal("editTech");
        setTechToEdit(tech);
    }

    return (
        <li key={id}>
            <div
                className={style.flexbox}
            >
                <div
                    className={style.conteiner}>
                    <h2 className="title1 wht">{title}</h2>
                    <p className="headline grey">{status}</p>
                </div>
                <div
                    className={style.btnConteiner}>
                    <button
                        onClick={() => editPost()}
                        className={style.btn}
                    ><ImPencil size="19" /></button>
                    <button
                        onClick={() => deleteTech(tech)}
                        className={style.btn}>
                        <BiTrash size="19" />
                    </button>
                </div>
            </div>
        </li>
    );
};