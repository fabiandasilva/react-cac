import React, {useState} from "react";
import "./css/contador.css";

export const Contador = () => {
  /* El set es el encargado de realizar el cambio de estado y el otro refleja el cambio (contador)*/
  let [contador, setContador] = useState(0);
  const decrementar = () => {
    contador > 1 ? setContador(contador - 1) : false;
  };
  const incrementarApp = () => {
    setContador(contador + 1);
  };

  return (
    <div className="container">
      <div className="btn">
        <button onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button onClick={incrementarApp}>+</button>
      </div>
    </div>
  );
};
