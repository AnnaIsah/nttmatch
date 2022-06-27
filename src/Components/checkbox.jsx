import React from "react";

function Checkbox ({value, className, name, onChange, checked, label}) {
    return (
      <label>
        <input 
        type="checkbox"
        value={value} 
        checked={checked}  
        name={name}
        onChange={onChange} 
        className={className}
    />{label}
      </label>
    );
};

export default Checkbox;