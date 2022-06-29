import React from "react";

function Select ({onChange, className, name}) {
    return (

    <select 
    onChange={onChange}
    className={className}
    name={name}>
        <option value=""></option>
        <option value="female">Feminino</option>
        <option value="male">Masculino</option>
        <option value="noGender">Agênero</option>
        <option value="fluidGender">Gênero Fluido</option>
        <option value="notDefined">Prefiro não definir</option>
    </select>
    );
}

export default Select;
