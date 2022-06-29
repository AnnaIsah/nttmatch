import React from "react";

function Button({ className, title, onClick, type, children }) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            title={title}
            children={children}>
        </button>
    );
}

export default Button;
