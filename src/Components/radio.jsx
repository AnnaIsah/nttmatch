import React from "react";

function Radio ({type,className, name, onChange, value, label}) {
    return(
    <label>
        <input type={type} value={value} name={name} onChange={onChange} className={className} required/>{label}
    </label>
    );
}

export default Radio;