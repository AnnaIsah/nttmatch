import React from "react";

function Button({ className, title, onClick, children }) {
    return (
        <button
            type="subtmit"
            className={className}
            onClick={onClick}
            title={title}
            children={children}>
        </button>
    );
}

export default Button;
