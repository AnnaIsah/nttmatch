import Input from "../../Components/input"
import Select from "../../Components/select"
import Radio from "../../Components/radio"
import Checkbox from "../../Components/checkbox"
import Button from "../../Components/button"
import { Form, FormGroup } from "reactstrap"

function Register() {
  return(
    <div class="container">
    <Form>
    <div className="text-center">
      <h1 color="$blue-800">NTT MATCH</h1>
      </div>
      <FormGroup >
        <label> Nome completo</label>
        <Input className="form-control" type="text" placeholder="Insira o nome" name="inpName" max="225" />
      </FormGroup>
      <FormGroup>
        <label>Gênero</label>
        <Select/>
      </FormGroup>
      <FormGroup>
        <label>Idade</label>
        <Input className="form-control" type="number" placeholder="00" min="0" max="100" name="inpIdade"  />
      </FormGroup>
      <FormGroup>
        <label>E-mail</label>
        <Input className="form-control" type="email" placeholder="Insira o e-mail" name="inpEmail" />
      </FormGroup>
      <FormGroup>
        <label>Telefone</label>
        <Input className="form-control" type="number" placeholder="(00) 00000-0000" min="0" max="9" name="inpIdade"  />
      </FormGroup>
      <FormGroup>
        <label>CEP</label>
        <Input className="form-control" type="text" placeholder="00000-000" name="inpCep" />
      </FormGroup>
      
      <h2>Interesses</h2>
      <div className="cow">
      <Radio type="radio" value="front" name="technology" label="Front"/>
      <Radio type="radio" value="back" name="technology" label="Back"/>
      <Radio type="radio" value="full" name="technology" label="Full Stack"/>
      </div>
      <label>Música</label>
      <div className="row">
        <Checkbox label="Axé"></Checkbox>
        <Checkbox label="Blues"></Checkbox>
        <Checkbox label="Country"></Checkbox>
        <Checkbox label="Forró"></Checkbox>
      </div>
      <label>Esporte</label>
      <div className="row">
        <Checkbox label="Futebol"></Checkbox>
        <Checkbox label="Basquete"></Checkbox>
        <Checkbox label="Surfe"></Checkbox>
        <Checkbox label="Vôlei"></Checkbox>
      </div>
      <label>Games</label>
      <div className="row">
        <Checkbox label="Super Mario"></Checkbox>
        <Checkbox label="Minecraft"></Checkbox>
        <Checkbox label="League of Legends"></Checkbox>
        <Checkbox label="World of Warcraft"></Checkbox>
      </div>
      <label>Animais de estimação</label>
      <div className="row">
        <Checkbox label="Cachorro"></Checkbox>
        <Checkbox label="Gato"></Checkbox>
        <Checkbox label="Coelho"></Checkbox>
        <Checkbox label="Hamster"></Checkbox>
      </div>
      <label>Viagens</label>
      <div className="row">
        <Checkbox label="Praia"></Checkbox>
        <Checkbox label="Montanha"></Checkbox>
      </div> 
      <div className="text-center">
      <Button className="Salvar" title="Salvar">Salvar</Button>
      </div>
      </Form>
      </div>
  )
}
export default Register
