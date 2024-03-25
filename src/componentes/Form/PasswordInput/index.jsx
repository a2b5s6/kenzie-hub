import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import style from "./style.module.scss";


export const PasswordInput = forwardRef(({ type, label, error, ...rest }, ref) => {

    const [isHidden, setIsHidden] = useState(true);

    const hidden = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div
            className={style.inputBox}
        >
            <label className="headline wht bold">
                {label}
            </label>
            <div className={style.inp}>
                <input
                    className={"paragraph wht inp"}
                    type={isHidden ? type : "text"}
                    ref={ref}
                    {...rest} />
                <button
                    className={style.btn}
                    onClick={(e) => {
                        e.preventDefault();
                        hidden();
                    }}

                >
                    {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
                </button>
            </div>
            {error?.message}

        </div >
    );
});