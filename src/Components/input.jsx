import React from "react";

const Input = ({className,type ,placeholder ,name , max, min, onChange}) => (
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

export default Input;
