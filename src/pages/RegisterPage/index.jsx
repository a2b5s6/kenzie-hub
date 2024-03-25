import { DefaultTemplate } from "../../components/DefaultTemplate/";
import { Form } from "../../components/Form";
import style from "../style.module.scss";

export const RegisterPage = () => {

    return (<>
        <DefaultTemplate type="register">
            <div className={style.conteiner}>
                <div>
                    <h2
                        className="title1 wht">
                        Crie sua conta
                    </h2>
                    <p
                        className="headline grey">
                        Rapido e grátis, vamos nessa
                    </p>
                </div>
                <Form
                    formType="register"

                />
            </div>
        </DefaultTemplate>
    </>
    );
};