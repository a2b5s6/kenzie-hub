import { createContext, useContext, useState } from "react";
import { KenzieHubAPI } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [createIsVisible, setCreateIsVisible] = useState(false);
    const [editIsVisible, setEditIsVisible] = useState(false);
    const [techToEdit, setTechToEdit] = useState(null);

    const { userToken, userTechs, setUserTechs } = useContext(UserContext);

    const openModal = (type) => {
        type === "createTech" ?
            setCreateIsVisible(true) :
            type === "editTech" ?
                setEditIsVisible(true) :
                null;
    };
    const closeModal = (type) => {
        type === "createTech" ?
            setCreateIsVisible(false) :
            type === "editTech" ?
                setEditIsVisible(false) &
                setTechToEdit(null)
                :
                null;
    };

    const createTech = async (formData) => {

        try {
            const { data } = await KenzieHubAPI.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            setCreateIsVisible(false);
            setUserTechs([...userTechs, data]);
            toast.success("Tecnologia cadastrada com sucesso!");
        } catch {
            toast.error("Tecnologia já cadastrada!");
        };
    };

    const editTech = async (formData) => {

        const { id } = techToEdit;

        try {
            const { data } = await KenzieHubAPI.put(`/users/techs/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            setEditIsVisible(false);
            const newTechsList = userTechs.filter((tech) => tech.id != id);
            setUserTechs([...newTechsList, data]);
            toast.success("Tecnologia editada com sucesso!");
        } catch {
            toast.error("Ops! algo deu errado");
        };
    };

    const deleteTech = async ({ id }) => {

        try {
            await KenzieHubAPI.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            const newTechsList = userTechs.filter((tech) => tech.id != id);
            setUserTechs(newTechsList);
            toast.success("Tecnologia excluida com sucesso!");
        } catch {
            toast.error("Ops! algo deu errado");
        };
    };

    return (
        <TechContext.Provider
            value={{
                createTech, editTech, openModal, closeModal, editIsVisible,
                createIsVisible, setTechToEdit, techToEdit, deleteTech
            }}>
            {children}
        </TechContext.Provider>
    );
};