import React from "react";

const Checkbox = (className, name, onChange, checked) => (
    <input 
    type="checkbox"
    value={value} 
    name={name}
    checked={checked}
    onChange={onChange} 
    className={className}
    />
);

export default Checkbox;