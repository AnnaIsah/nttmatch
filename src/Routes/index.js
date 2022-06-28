import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/index.jsx";
import Register from "../Pages/Register/index.jsx";
import Home from "../Pages/Home/index.jsx";
import PrivateRoute from "./privateroute.js";

function journey() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            // <PrivateRoute redirectTo="/login">
              <Register />
            // </PrivateRoute>
          }
        />
        <Route
          exact
          path="home"
          element={
            <PrivateRoute redirectTo="/login">
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default journey;
