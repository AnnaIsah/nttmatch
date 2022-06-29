import Input from "../../Components/input"
import Select from "../../Components/select"
import Radio from "../../Components/radio"
import Checkbox from "../../Components/checkbox"
import Button from "../../Components/button"
import { addUsers } from "../../Service/authentication.js"
import { useEffect, useState } from "react"
import "../Register/index.css";
function Register() {
  
  const [user, setUser] = useState([])
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [cep, setCep] = useState("")
  const [music, setMusic] = useState("")
  const [sport, setSport] = useState("")
  const [game, setGame] = useState("")
  const [animals, setAnimals] = useState("")
  const [travel, setTravel] = useState("")
  const selectGender = [
     {
      value: "Selecione",
      text: "Selecione",
      selected: true,
      disabled: true
    },

    {
      value: "famale",
      text: "Feminino",
      selected: false,
      disabled: false
    },
    {
      value: "men",
      text: "Homem",
      selected: false,
      disabled: false
    },
    {
      value: "noGender",
      text: "Agênero",
      selected: false,
      disabled: false
    },
    {
      value: "fluidGender",
      text: "Gênero Fluido",
      selected: false,
      disabled: false
    },
    {
      value: "preferNSay",
      text: "Prefiro não definir",
      selected: false,
      disabled: false
    }
  ];

  useEffect(()=>{
    fetch("viacep.com.br/ws/01001000/json/",{
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
    .then(res => setUser(res.data))
  },[]);

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h1 className="titleRegister">NTT MATCH</h1>
      <div className="inputBox">
        <label className="titleLabel">Nome completo</label>
        <Input type="text" placeholder="Insira o nome" name="name" value={name} max="225"
        onChange={(e)=>{setName(console.log(e.target.value))}}/>
      </div>
      <div className="inputBox">
        <label className="titleLabel">Gênero</label>
        <Select className="titleLabel" options={selectGender}
        onChange={(e) => {setGender(console.log((e.target.value)))}}/>
      </div>
      <div className="inputBox">
        <label className="titleLabel">Idade</label>
        <Input type="text" pattern="[0-9]{2}"
          title="A idade deve seguir o padrão exigido" 
          placeholder="00" maxlength="100" name="age" value={age} 
          onChange={(e)=>{setAge(console.log(e.target.value))}}/>
      </div>
      <div className="inputBox">
        <label className="titleLabel">E-mail</label>
        <Input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Siga este formato exemplo@exemplo.com" placeholder="Insira o e-mail" name="email" value="email"
          onChange={(e)=>{setEmail(console.log(e.target.value))}}/>
      </div>
      <div className="inputBox">
        <label className="titleLabel">Telefone</label>
        <Input type="text" pattern="\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}"
          title="O telefone deve seguir o padrão exigido" placeholder="(00) 00000-0000"
          min="0" max="9" name="tel" value="tel" 
          onChange={(e)=>{setTel(console.log(e.target.value))}}/>
      </div>
      <div className="inputBox">
        <label className="titleLabel">CEP</label>
        <Input type="text" pattern="/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/"
          title="O CEP deve ter 8 caracteres" placeholder="00000-000" name="cep" value="cep"
          onChange={(e)=>{setCep(console.log(e.target.value))}}/>
      </div>

      <p className="subTitle">Interesses</p>
      <label className="titleLabel">Tecnologia</label>
      <div className="inputBoxTec">
      <Radio type="radio" value="front" name="technology" label="Front"/>
      <Radio type="radio" value="back" name="technology" label="Back"/>
      <Radio type="radio" value="full" name="technology" label="Full Stack"/>
      </div>
      <label className="titleLabel">Música</label>
      <div className="inputBoxSelect">
        <Checkbox name ="music" value ="axé" label="Axé"></Checkbox>
        <Checkbox name ="music" value ="blues" label="Blues"></Checkbox>
        <Checkbox name ="music" value ="country" label="Country"></Checkbox>
        <Checkbox name ="music" value ="forró" label="Forró"></Checkbox>
      </div>
      <label className="titleLabel">Esporte</label>
      <div className="inputBoxSelect">
        <Checkbox name ="sport" value ="futebol" label="Futebol"></Checkbox>
        <Checkbox name ="sport" value ="basquete" label="Basquete"></Checkbox>
        <Checkbox name ="sport" value ="surfe" label="Surfe"></Checkbox>
        <Checkbox name ="sport" value ="volei" label="Vôlei"></Checkbox>
      </div>
      <label className="titleLabel">Games</label>
      <div className="inputBoxSelect">
        <Checkbox name ="game" value ="superMario" label="Super Mario"></Checkbox>
        <Checkbox name ="game" value ="minecraft" label="Minecraft"></Checkbox>
        <Checkbox name ="game" value ="leagueOfLegends" label="League of Legends"></Checkbox>
        <Checkbox name ="game" value ="worldOfWarcraft" label="World of Warcraft"></Checkbox>
      </div>
      <label className="titleLabel">Animais de estimação</label>
      <div className="inputBoxSelect">
        <Checkbox name ="animals" value="dog" label="Cachorro"></Checkbox>
        <Checkbox name ="animals" value="cat" label="Gato"></Checkbox>
        <Checkbox name ="animals" value="rabit" label="Coelho"></Checkbox>
        <Checkbox name ="animals" value="hamster" label="Hamster"></Checkbox>
      </div>
      <label className="titleLabel">Viagens</label>
      <div className="inputBoxSelect">
        <Checkbox name="travel" value="beach" label="Praia"></Checkbox>
        <Checkbox name="travel" value="montain" label="Montanha"></Checkbox>
      </div>
      <Button className="savedForm" title="Salvar" type="submit">Salvar</Button>
      
    </form>
    </div> 

  )
}
export default Register
