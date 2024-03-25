import { TechCard } from "./TechCard";
import { VscAdd } from "react-icons/vsc";
import style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

export const TechList = () => {

    const { userTechs } = useContext(UserContext);
    const { openModal } = useContext(TechContext);

    return (
        <div>
            <div
                className={style.flexbox}
            >
                <h2
                    className="title1 wht"
                >Tecnologias</h2>
                <button
                    onClick={() => openModal("createTech")}
                    className={style.btn}
                >
                    <VscAdd size="15" color="white" />
                </button>
            </div>
            {userTechs.length > 0 ? <div
                className={style.conteiner}
            >
                <ol>
                    {userTechs.map((tech) => (
                        <TechCard
                            key={tech.id}
                            tech={tech} />
                    ))}
                </ol>
            </div> :
                <div
                    className={style.conteiner}
                >
                    <h2
                        className="title1 wht">
                        Lista vazia!
                    </h2>
                    <p
                        className="paragraph wht">
                        Utilize o botão + acima para adicionar as tecnologias que você conhece.
                    </p>
                </div>
            }
        </div >
    );
};

