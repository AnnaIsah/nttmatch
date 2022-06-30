import Input from "../../Components/input";
import Button from "../../Components/button"
import "./feed.css"
import GetUsers from "../../Service/authentication";
import Card from "../../Components/card";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Feed() {

  const navigate = useNavigate(); 

  const user = GetUsers();
  console.log(user)
 

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }


  // const [userData, setUserData] = useState([]);
  // const [used, setUsed] = useState([])

  // function infoUser(userData) {
  // console.log(userData)
  //   const newDataUser = used;
  //   const addInfo = newDataUser.find((info) => {
  //     return info.id === user.id;
  //   })
  // };



  return (

    <body className="bodyFeed">      
      <header className="headerFeed">
        <section className="sectionlogOff">
          <FaSignInAlt size="26px" margin-rigth="0px" onClick={handleLogout} />
        </section>    
      </header>
      <main className="mainFeed">
        <section className="sectionTittle"> 
          <h1>Pessoas com o mesmo interesse que você</h1>
        </section> 
        <section className="sectionSearchBar">
          <Input type="search" placeholder="o que você procura?" className="searchBar" name="searchBar" /> 
        </section>
        <section className="sectionCategory">
          <h3>Categorias</h3>
        </section>
        <section className="btns">
          <Button className="btnMusic" children="Música" />
          <Button className="btnsports" children="Esporte"  />
          <Button className="btnAnimals" children="Animais de estimação"  />
          <Button className="btnGames" children="Games" />
        </section>
        <section className="sectionResult">
          <h3>Resultado</h3>
        </section>

      </main>
    </body>
  )
}

export default Feed

