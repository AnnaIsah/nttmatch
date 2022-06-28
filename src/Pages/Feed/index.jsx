import Input from "../../Components/input"
// import Card from "../../Components/card"
import Button from "../../Components/button"



function Feed() {
  
  return (
    <body>
      <header>
        <h1>Pessoas com o mesmo interesse que você</h1>
        <Input type="search" className="" name="searchBar" />
      </header>
      <section>
        <p>Categorias</p>
      </section>
      <section>
      <Button className="" title="Música"  />
      <Button className="" title="Esporte"  />
      <Button className="" title="Animais de estimação"  />
      <Button className="" title="Games" />
      </section>
      <section>
        <p>Resultado</p>
      
        {/* <Card 
        name={name.id}
        tecnologia={tecnologia.id}
        cep={cep.id}
        gênero={gênero.id}
        email={email.id}
        telefone={telefone.id} />           */}
        

      </section>
    </body>
  )
}
export default Feed