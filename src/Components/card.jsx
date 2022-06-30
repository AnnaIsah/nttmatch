import React from "react";

function Card({ user, children, onClick }) {
  return (
    <li className="" >

      <details>
        <summary>{user.name}</summary>
        <summary>{user.technology}</summary>
        <summary>{user.gender}</summary>
        <summary>{user.cep}</summary>
        
      </details>
      <p>{user.age}</p>
      <p>{user.cep}</p>

      <h3>Música: </h3> <p>{user.music}</p>
      <h3>Esporte: </h3> <p>{user.sport}</p>
      <h3>Game: </h3> <p>{user.game}</p>
      <h3>Animais de estimação:</h3> <p>{user.animals}</p>

      <details>
       <summary>{user.email}</summary>
       <summary>{user.phone}</summary>
      </details>

    </li>
  );
}

export default Card;