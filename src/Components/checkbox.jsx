import React from "react";

const Checkbox = (className, name, onChange, checked) => (
    <input 
    type="checkbox"
    value={value} 
    name={name} 
    onChange={onChange} 
    className={className}
    required/>
);

export default Checkbox;