import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";
import Login from "./components/pages/Login";
import Aula from "./components/pages/Aula";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aula" element={<Aula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
