import Input from "../../Components/input"
import Select from "../../Components/select"
import Radio from "../../Components/radio"
import Checkbox from "../../Components/checkbox"
import Button from "../../Components/button"



function Register() {
  return(
    <form>
      <h1>NTT MATCH</h1>
      <div>
        <label>Nome completo</label>
        <Input type="text" placeholder="Insira o nome" name="inpName" max="225" />
      </div>
      <div>
        <label>Gênero</label>
        <Select/>
      </div>
      <div>
        <label>Idade</label>
        <Input type="number" placeholder="00" min="0" max="100" name="inpIdade"  />
      </div>
      <div>
        <label>E-mail</label>
        <Input type="email" placeholder="Insira o e-mail" name="inpEmail" />
      </div>
      <div>
        <label>Telefone</label>
        <Input type="number" placeholder="(00) 00000-0000" min="0" max="9" name="inpIdade"  />
      </div>
      <div>
        <label>CEP</label>
        <Input type="text" placeholder="00000-000" name="inpCep" />
      </div>

      <h2>Interesses</h2>
      <Radio type="radio" value="front" name="technology" label="Front"/>
      <Radio type="radio" value="back" name="technology" label="Back"/>
      <Radio type="radio" value="full" name="technology" label="Full Stack"/>

      <label>Música</label>
      <div>
        <Checkbox label="Axé"></Checkbox>
        <Checkbox label="Blues"></Checkbox>
        <Checkbox label="Country"></Checkbox>
        <Checkbox label="Forró"></Checkbox>
      </div>
      <label>Esporte</label>
      <div>
        <Checkbox label="Futebol"></Checkbox>
        <Checkbox label="Basquete"></Checkbox>
        <Checkbox label="Surfe"></Checkbox>
        <Checkbox label="Vôlei"></Checkbox>
      </div>
      <label>Games</label>
      <div>
        <Checkbox label="Super Mario"></Checkbox>
        <Checkbox label="Minecraft"></Checkbox>
        <Checkbox label="League of Legends"></Checkbox>
        <Checkbox label="World of Warcraft"></Checkbox>
      </div>
      <label>Animais de estimação</label>
      <div>
        <Checkbox label="Cachorro"></Checkbox>
        <Checkbox label="Gato"></Checkbox>
        <Checkbox label="Coelho"></Checkbox>
        <Checkbox label="Hamster"></Checkbox>
      </div>
      <label>Viagens</label>
      <div>
        <Checkbox label="Praia"></Checkbox>
        <Checkbox label="Montanha"></Checkbox>
      </div> 
      <Button className="Salvar" title="Salvar">Salvar</Button>
      </form>
  )
}
export default Register
