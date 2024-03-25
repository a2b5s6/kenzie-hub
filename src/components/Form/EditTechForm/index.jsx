import { useForm } from "react-hook-form";
import { Select } from "../Select";
import { Input } from "../Input";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import style from "./style.module.scss";


export const EditTechForm = () => {
    const { register, handleSubmit } = useForm({});

    const { editTech, techToEdit } = useContext(TechContext);

    const submit = (formData) => {
        formData && editTech(formData);
    };


    const techStatus = [
        { module: "Iniciante" },
        { module: "Intermediário" },
        { module: "Avançado" }
    ]

    return (
        <div
            className={style.flexbox}
        >
            <form
                onSubmit={handleSubmit(submit)}
                noValidate
            >
                <Input
                    type="text"
                    placeholder="Digite o nome da Tec.."
                    label="Nome"
                    value={techToEdit.title}
                    readOnly
                    {...register("title")}
                />
                <Select
                    label="Selecionar status"
                    type="createTech"
                    options={techStatus}
                    {...register("status")}
                />
                <div
                    className={style.btn}
                >
                    <button
                        className="btn lrg two"
                        type="submit">
                        <span className="headline wht bold"
                        >Salvar alterações</span>
                    </button>
                </div>
            </form>
        </div>
    )
}