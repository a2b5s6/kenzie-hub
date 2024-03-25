import { forwardRef } from "react";

export const Select = forwardRef(({ type, label, error, options, ...rest }, ref) => {

    const optionsValue = (type) => {

        return (
            type === "register" ?
                options.map(({ module, description }, i) => {
                    return (
                        <option
                            key={`${i}${module}`}
                            value={`${module} ${description}`}
                            className="selectOption"
                        >{module}
                        </option>
                    );
                }) :
                options.map(({ module }, i) => {
                    return (
                        <option
                            key={`${i}${module}`}
                            value={module}
                        >{module}
                        </option>
                    );
                })

        );
    };

    return (
        <div>
            <label
                className="headline wht bold inp__conteiner"
            >
                {label}
                <select
                    className="paragraph wht inp"
                    ref={ref}
                    {...rest}

                >
                    {optionsValue(type)}
                </select>
                {error?.message}
            </label>

        </div>
    );
});