import React from "react";
import { Button } from 'reactstrap';

function ButtonR ({type, className, title, onClick, children}) {
    return (
    <Button color="primary" type="submit" className={className} onClick={onClick} children={children}>{title}</Button>
    );
}

export default ButtonR;
