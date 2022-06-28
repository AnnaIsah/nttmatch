import React from "react";
import { Button } from 'reactstrap';

function ButtonR ({className, title, onClick}) {
    return (
    <Button color="primary" type="submit" className={className} onClick={onClick}>{title}</Button>
    );
}

export default ButtonR;
