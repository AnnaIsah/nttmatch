import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/index.jsx";
import Register from "../Pages/Register/index.jsx";
import Feed from "../Pages/Feed/index.jsx";
import PrivateRoute from "./privateroute.js";
import Previous from "../Pages/Previous/index.jsx";

function journey() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/register"
          element={
            <PrivateRoute redirectTo="/login">
              <Register />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/feed"
          element={
            <PrivateRoute redirectTo="/login">
              <Feed />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/previous"
          element={
            <PrivateRoute redirectTo="/previous">
              <Previous />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default journey;
