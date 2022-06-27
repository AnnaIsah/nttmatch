import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../src/pages/login"
import Register from "../src/pages/login"
import Home from "../src/pages/login"
import { PrivateRoute } from "../src/services/PrivateRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/login" element={<Login />} />
        <Route path="/register"element={<PrivateRoute redirectTo="/login">
        <Register /> </PrivateRoute >}/> 
        <Route exact path="home" element={<PrivateRoute redirectTo="/login">
        <Home /> </PrivateRoute >}/> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;

