import { useContext } from "react";
import style from "./style.module.scss";
import { Form } from "../Form";
import { TechContext } from "../../providers/TechContext";

export const CreateTechModal = () => {

    const { createIsVisible, closeModal } = useContext(TechContext);

    return (
        <>
            {createIsVisible ?
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
                            >Cadastrar Tecnologia
                            </h2>
                            <span
                                onClick={() => closeModal("createTech")}
                                className="headline wht bold"
                            >
                                X
                            </span>
                        </div>
                        <Form formType="createTech" />
                    </div>
                </div>
                : null}
        </>
    );
};