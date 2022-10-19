import React from "react";
//Props son parametros o propiedades que se utiliza para pasar de un componente a otro
//Diseño la card y paso sus valos a traves de app
export const Card = (props) => {
  return (
    <div>
      <h1>Nombre: {props.name}</h1>
    </div>
  );
};
