import React from "react";

const Radio = ({className, type, name, onChange, value}) => (
    <input 
    type={type} 
    value={value} 
    name={name} 
    onChange={onChange} 
    className={className}
    required/>
);

export default Radio;