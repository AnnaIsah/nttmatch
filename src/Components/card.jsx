import React from "react";

function Card({name, tecnologia, cep, gender, email, telefone, children}) {
    return (
      <li
      name={name}
      tecnologia={tecnologia}
      cep={cep}
      gender={gender}
      email={email}
      telefone={telefone}
      children={children}>
      </li>
  );
}

export default Card;