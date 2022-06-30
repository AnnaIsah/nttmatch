import Input from "../../Components/input"
// import Card from "../../Components/card"
import Button from "../../Components/button"
import "./feed.css"
import GetUsers from "../../Service/authentication"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import { FaSignInAlt } from "react-icons/fa";
import db from "../../Service/authentication"


function Feed() {
  const navigate = useNavigate()
  const [receivesDatas, setReceivesDatas] = useState("")
  const [researchDatas, setResearchDatas] = useState("")
  const [userData, setUserData] = useState("")

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const user = GetUsers();
  console.log(user)

  useEffect(() => {
    db.append('user').on('value', snapshot => {
      if (snapshot.val() != null) {
        setReceivesDatas({ ...snapshot.val() })
      }
    }, []);
  })

  return (

    <body className='bodyFeed'>
      <header className='headerFeed'>
        <h1>Pessoas com o mesmo interesse que você</h1>
        <Input type="search" className="searchBar" name="searchBar" />
      </header>
      <main className='mainFeed'>
        <FaSignInAlt size="26px" margin-rigth="0px" onClick={handleLogout} />
        <section>
          <p>Categorias</p>
        </section>
        <section className="btns">
          <Button className="btnMusic" children="Música" />
          <Button className="btnsports" children="Esporte" />
          <Button className="btnAnimals" children="Animais de estimação" />
          <Button className="btnGames" children="Games" />
        </section>
        <section>
          <p>Resultado</p>
        </section>
      </main>
    </body>
  )
}
export default Feed



// <Card
// name={name.id}
// tecnologia={tecnologia.id}
// cep={cep.id}
// gênero={gênero.id}
// email={email.id}
// telefone={telefone.id} />