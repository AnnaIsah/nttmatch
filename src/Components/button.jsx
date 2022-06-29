import React from "react";
//import { Button } from 'reactstrap';

function ButtonR({ className, title, onClick, type, children }) {
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

export default ButtonR;
