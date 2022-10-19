import React, {useState} from "react";
import {Card} from "./components/Card";
function App(props) {
  //Importo el componente Card, recibo las props y paso los valores
  return (
    <div className="container">
      <Card name="hola" />
    </div>
  );
}

export default App;
