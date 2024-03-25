import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {

    return (
        <div>
            <label className="headline wht bold inp__conteiner" >
                {label}
                <input
                    className="paragraph wht inp"
                    ref={ref}
                    {...rest}
                />
                {error?.message}
            </label>
        </div>
    );
});