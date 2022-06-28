import React from "react";

function Select(props) {

    const options = props.options || [];
    return (
    <>
        <select name={props.name} onChange={props.onChange}>
        {
            options.map((item, index) => {
            return <option ket={index} 
            value={item.value} 
            selected={item.selected} 
            disabled={item.disabled}>{item.text}</option>
            })
        }
        </select>
    </>

    );
}

export default Select;
