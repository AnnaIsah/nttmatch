import Input from "../../Components/input";
import Button from "../../Components/button"
import "./feed.css"
import Card from "../../Components/card";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, getFirestore, collection } from "firebase/firestore";

function Feed() {

  const navigate = useNavigate(); 

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const db = getFirestore();
  const [users, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
    const allUsers = collection(db, "user")
      const data = await getDocs(allUsers)
      setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getUsers();
  }, []);

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
          <div>
            <ul>
              {users.map(user => {
                return (
                  <div>
                    <li>{user.name}</li>
                  </div>
                )
              })}
            </ul>
          </div>
        </section>

      </main>
    </body>
  )
}

export default Feed

