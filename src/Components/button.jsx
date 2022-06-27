import React from "react";

const Button = (className, title, onClick) => (
    <button
    type="subtmit"
    className={className}
    onClick={onClick}
    title={title}>
    </button>
);

export default Button;
