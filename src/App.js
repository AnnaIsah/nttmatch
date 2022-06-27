import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Pages/Login/index.jsx";
import Register from "../src/Pages/Register/index.jsx";
import Home from "../src/Pages/Home/index.jsx";
import  PrivateRoute from "./Routes/privateroute.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
           <PrivateRoute redirectTo="/login">
            <Register/>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="home"
          element={
            <PrivateRoute redirectTo="/login">
            <Home/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
