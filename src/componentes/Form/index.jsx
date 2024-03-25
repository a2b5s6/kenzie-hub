import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { CreateTechForm } from "./CreateTechForm";
import {EditTechForm} from "./EditTechForm";

export const Form = ({ formType }) => {

    return (
        <>
            {formType === "login" ?
                <LoginForm/> :
                formType === "register" ?
                    <RegisterForm/> :
                    formType === "createTech" ?
                        <CreateTechForm /> :
                        formType === "editTech" ?
                            <EditTechForm />
                            : null
            }
        </>
    );
};