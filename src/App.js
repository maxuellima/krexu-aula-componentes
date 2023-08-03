import React from "react";
import "./App.css";
import {Garagem} from "./componentes/Garagem"
import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Aula - Componentes React</h1>
      <Garagem/>
      <Footer/>
    </div>
  );
}