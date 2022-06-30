import Input from "../../Components/input"
// import Card from "../../Components/card"
import Button from "../../Components/button"
import "./feed.css"
import GetUsers from "../../Service/authentication";
import Card from "../../Components/card";

function Feed() {
  const user = GetUsers();
  console.log(user)


  return (

    <body className='bodyFeed'>
      <main className='mainFeed'>
        <header className='headerFeed'>
          <h1>Pessoas com o mesmo interesse que você</h1>
          <Input type="search" className="searchBar" name="searchBar" />
        </header>
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
          <h1>Resultado</h1>
          <p>Ver mais</p>
        </section>

        <section>



          {user.map((item) => {
            return (

              <Card
                key={item.id}
                user={item}
              />

            )
            })}


        </section>

      </main>
    </body>
  )
}
export default Feed
