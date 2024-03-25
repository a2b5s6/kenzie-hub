import { Link } from "react-router-dom";
import { Input } from "../Input";
import { PasswordInput } from "../PasswordInput";
import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext.jsx";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const { userLogin } = useContext(UserContext);

    const submit = (formData) => {
        formData && userLogin(formData);
    };


    return (
        <div className={style.flexbox}>
            <form
                onSubmit={handleSubmit(submit)}
                noValidate>
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
                <button
                    className="btn mdm title2 wht"
                    type="submit">
                    Entrar
                </button>
            </form>
            <div className={style.conteiner}>
                <p className="headline grey bold">Ainda não possui uma conta?</p>
                <nav className={style.btn}>
                    <Link to="/register" className="btn grey"><span className="title2 wht">Cadastre-se</span></Link>
                </nav>
            </div>
        </div>
    );
};