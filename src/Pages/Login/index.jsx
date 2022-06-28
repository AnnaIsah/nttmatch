import Button from '../../Components/button.jsx'
import { Navigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { signInGoogle } from "./authentication.js"

function Login() {
  const logOn = async (e) => {
  e.preventDefault();
  signInGoogle()
  .then(() => {
      Navigate("/feed");
  })
  .catch((error) => {
      console.log(error)
  })       
}

  return (
    <>
      <header className='headerLogin'>
        <h1 className='welcome'>Bem-vindos</h1>
      </header>
      <main className='mainLogin'>
        <label className='labelLogin'>Faça seu login com o Google: </label>
        <Button onClick={logOn}> <FcGoogle />Google</Button>
      </main>
    </>

  )

}
export default Login