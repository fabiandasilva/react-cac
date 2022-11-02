import React from "react";
import Exportacion from "./components/Exportacion.jpg";
import Imgmeme from "./components/ImgMeme";
import TextoMeme from "./components/TextoMeme";
/* import {Card} from "./components/Card";
import {Contador} from "./components/Contador"; */
function App(props) {
  //Importo el componente Card, recibo las props y paso los valores
  return (
    <div className="text-center">
      {/*   <Card name="hola" />
      <Contador /> */}
      <TextoMeme />
      <Imgmeme />
      <Exportacion />
    </div>
  );
}

export default App;
