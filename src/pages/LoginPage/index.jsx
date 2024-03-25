import { DefaultTemplate } from "../../components/DefaultTemplate";
import { Form } from "../../components/Form";
import styles from "../style.module.scss";

export const LoginPage = () => {

    return (<>

        <DefaultTemplate type="login">
            <div className={styles.conteiner}>
                <h1 className="title1 wht">Login</h1>
                <Form
                    formType="login"
                />
            </div>
        </DefaultTemplate>

    </>);
};