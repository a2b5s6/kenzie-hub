import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { PasswordInput } from "../PasswordInput";
import { Select } from "../Select";
import { registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext.jsx";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const { createAccount } = useContext(UserContext);

    const submit = (formData) => {
        formData && createAccount(formData)
    };

    const courseModule = [
        { module: "Primeiro Módulo", description: "(Introdução ao Frontend)" },
        { module: "Segundo Módulo", description: "(Frontend Avançado)" },
        { module: "Terceiro Módulo", description: "(Introdução ao Backend)" },
        { module: "Quarto Módulo", description: "(Backend Avançado)" },
    ];

    return (
        <div
            className={style.flexbox}>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <Input
                    type="text"
                    placeholder="Digite aqui seu nome..."
                    label="Nome"
                    {...register("name")}
                    error={errors.name}
                />
                <Input
                    type="email"
                    placeholder="Digite aqui seu email..."
                    label="Email"
                    {...register("email")}
                    error={errors.email}
                />
                <PasswordInput
                    type="password"
                    placeholder="Digite aqui sua senha..."
                    label="Senha"
                    {...register("password")}
                    error={errors.password}
                />
                <PasswordInput
                    type="password"
                    placeholder="Confirme aqui sua senha..."
                    label="Confirmar Senha"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}
                />
                <Input
                    type="text"
                    placeholder="Fale sobre você..."
                    label="Bio"
                    {...register("bio")}
                    error={errors.bio}
                />
                <Input
                    type="text"
                    placeholder="Opção de contato..."
                    label="Contato"
                    {...register("contact")}
                    error={errors.contact}
                />
                <Select
                    label="Selecionar módulo"
                    options={courseModule}
                    type="register"
                    {...register("course_module")}
                    error={errors.course_module}
                />

                <div
                    className={style.flexbox}
                >
                    <button
                        className="btn mdm"
                        type="submit">
                        <span
                            className="title2 wht">
                            Cadastrar
                        </span>
                    </button>
                </div>
            </form>

        </div>
    );
};