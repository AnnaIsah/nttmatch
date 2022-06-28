import React from "react";

const Button = ({ className, title, onClick, children }) => (
    <button
        type="subtmit"
        className={className}
        onClick={onClick}
        title={title}
        children={children}>
    
    </button>
);

export default Button;
