import React from "react";


function Input({ className, type, placeholder, name, max, min, onChange, pattern, title }) {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            max={max}
            min={min}
            pattern={pattern}
            title={title}
            onChange={onChange}
        />
    );
}

export default Input;
