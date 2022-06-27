import React from "react";

const Radio = (className, name, onChange, value) => (
    <input 
    type="radio" 
    value={value} 
    name={name} 
    onChange={onChange} 
    className={className}
    required/>
);

export default Radio;