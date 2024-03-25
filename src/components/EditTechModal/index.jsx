import { useContext } from "react";
import style from "./style.module.scss";
import { Form } from "../Form";
import { TechContext } from "../../providers/TechContext";

export const EditTechModal = () => {

    const { editIsVisible, closeModal } = useContext(TechContext);

    return (
        <>
            {editIsVisible ?
                <div
                    className={style.overlaybox}
                >
                    <div
                        className={style.flexbox}
                    >
                        <div
                            className={style.conteiner}
                        >
                            <h2
                                className="headline wht bold"
                            >Tecnologia Detalhes
                            </h2>
                            <span
                                onClick={() => closeModal("editTech")}
                                className="headline wht bold"
                            >
                                X
                            </span>
                        </div>
                        <Form formType="editTech" />
                    </div>
                </div>
                : null}
        </>
    );
};