import React from "react";

function Button ({className, title, onClick}) {
    return (
    <button type="submit" className={className} onClick={onClick}>{title}</button>
    );
}

export default Button;
