import React from "react";

function Input ({className,type ,placeholder ,name , max, min, onChange}) {
    return (
    <input
    className={className}
    type={type}
    placeholder={placeholder}
    name={name}
    max={max}
    min={min}
    onChange={onChange}
    />
    );
}

export default Input;
