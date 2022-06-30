import Input from "../../Components/input"
import Select from "../../Components/select"
import Radio from "../../Components/radio"
import Checkbox from "../../Components/checkbox"
import Button from "../../Components/button"
import {ViaCep} from "../../Service/api"
import { addUsers } from "../../Service/authentication.js"
import { useEffect, useState } from "react"
import "../Register/index.css";
function Register() {
  
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [music, setMusic] = useState("");
  const [sport, setSport] = useState("");
  const [game, setGame] = useState("");
  const [animals, setAnimals] = useState("");
  const [travel, setTravel] = useState("");
  const [technology, setTechnology] = useState("");

  const selectGender = [
    {
      value: "Select",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const contentApiCep = await ViaCep(cep);
      const contentApiJson = await contentApiCep.json();
      console.log(contentApiJson);
    }catch(e) {
      alert("erro desconhecido")
    }
    if(name===""||age===""||email===""||phone===""||cep===""||technology==="" &&
    music==="" && sport==="" && game==="" && animals==="" && travel===""){
      return console.log("preencha todos os campos")
    } else {
        const user = {};
    user.name = name;
    user.email = email;
    user.age = age;
    user.gender = gender;
    user.phone = phone;
    user.cep = cep;
    user.interests = { technology: technology, music: music, sport: sport, game: game, animals: animals, travel: travel};

    addUsers(user);
      }
  }

  return (
    <div className="container">
      <h1>NTT MATCH</h1>
      <form onSubmit={handleSubmit}>
      <div className="input-box">
        <label>Nome completo</label>
        <Input type="text" placeholder="Insira o nome" name="name" value={name} max="225"
        onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div className="input-box">
        <label>Gênero</label>
        <Select options={selectGender} name={gender}
        onChange={(e) => setGender(e.target.value)}/>
      </div>
      <div className="input-box">
        <label>Idade</label>
        <Input type="text"
          title="A idade deve seguir o padrão exigido" 
          placeholder="00" maxlength="100" name="age" value={age} 
          onChange={(e)=>{setAge(e.target.value)}}/>
      </div>
      <div className="input-box">
        <label>E-mail</label>
        <Input type="email" 
          title="Siga este formato exemplo@exemplo.com" placeholder="Insira o e-mail" name="email" value="email"
          onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="input-box">
        <label>Telefone</label>
        <Input type="text" 
          title="O telefone deve seguir o padrão exigido" placeholder="(00) 00000-0000"
          min="0" max="9" name="phone" value="phone" 
          onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <div className="input-box">
        <label>CEP</label>
        <Input type="text"
          title="O CEP deve ter 8 caracteres" placeholder="00000-000" name={cep} value="cep"
          onChange={(e)=>{setCep(e.target.value)}}/>
      </div>

      <h2>Interesses</h2>
      <div className="cow">
      <Radio type="radio" value="front" name={technology}
      label="Front" onChange={(e)=>{setTechnology(e.target.value)}}/>
      <Radio type="radio" value="back" name={technology}
      label="Back" onChange={(e)=>{setTechnology(e.target.value)}}/>
      <Radio type="radio" value="full" name={technology}
      label="Full Stack" onChange={(e)=>{setTechnology(e.target.value)}}/>
      </div>
      <label>Música</label>
      <div>
        <Checkbox name ={music} value ="axé" label="Axé"
          onChange={(e) =>{setMusic(e.target.value)}}></Checkbox>
        <Checkbox name ={music} value ="blues" label="Blues"
        onChange={(e) =>{setMusic(e.target.value)}}></Checkbox>
        <Checkbox name ={music} value ="country" label="Country"
        onChange={(e) =>{setMusic(e.target.value)}}></Checkbox>
        <Checkbox name ={music} value ="forró" label="Forró"
        onChange={(e) =>{setMusic(e.target.value)}}></Checkbox>
      </div>
      <label>Esporte</label>
      <div>
        <Checkbox name ={sport} value ="futebol" label="Futebol"
        onChange={(e) =>{setSport(e.target.value)}}></Checkbox>
        <Checkbox name ={sport} value ="basquete" label="Basquete"
        onChange={(e) =>{setSport(e.target.value)}}></Checkbox>
        <Checkbox name ={sport} value ="surfe" label="Surfe"
        onChange={(e) =>{setSport(e.target.value)}}></Checkbox>
        <Checkbox name ={sport} value ="volei" label="Vôlei"
        onChange={(e) =>{setSport(e.target.value)}}></Checkbox>
      </div>
      <label>Games</label>
      <div>
        <Checkbox name ={game} value ="superMario" label="Super Mario"
        onChange={(e) =>{setGame(e.target.value)}}></Checkbox>
        <Checkbox name ={game} value ="minecraft" label="Minecraft"
        onChange={(e) =>{setGame(e.target.value)}}></Checkbox>
        <Checkbox name ={game} value ="leagueOfLegends" label="League of Legends"
        onChange={(e) =>{setGame(e.target.value)}}></Checkbox>
        <Checkbox name ={game} value ="worldOfWarcraft" label="World of Warcraft"
        onChange={(e) =>{setGame(e.target.value)}}></Checkbox>
      </div>
      <label>Animais de estimação</label>
      <div>
        <Checkbox name ={animals} value="dog" label="Cachorro"
        onChange={(e) =>{setAnimals(e.target.value)}}></Checkbox>
        <Checkbox name ={animals} value="cat" label="Gato"
        onChange={(e) =>{setAnimals(e.target.value)}}></Checkbox>
        <Checkbox name ={animals} value="rabit" label="Coelho"
        onChange={(e) =>{setAnimals(e.target.value)}}></Checkbox>
        <Checkbox name ={animals} value="hamster" label="Hamster"
        onChange={(e) =>{setAnimals(e.target.value)}}></Checkbox>
      </div>
      <label>Viagens</label>
      <div>
        <Checkbox name={travel} value="beach" label="Praia"
        onChange={(e) =>{setTravel(e.target.value)}}></Checkbox>
        <Checkbox name={travel} value="montain" label="Montanha"
        onChange={(e) =>{setTravel(e.target.value)}}></Checkbox>
      </div>
        <Button className="savedForm" title="Salvar" type="submit">Salvar</Button>
      </form>
    </div>
  )
}
export default Register
