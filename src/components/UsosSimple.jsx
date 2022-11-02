import React, {useEffect, useState} from "react";

const UsosSimple = () => {
  const [mensaje, setMensaje] = useState("");
  const [cont, setCont] = useState(0);

  useEffect(() => {
    console.log("eso lo muestro despues de hacer el render");
  });
  console.log("esto va antes");
  return (
    <div>
      <h2>Uso simple</h2>
      <p>{mensaje}</p>
      <input
        type="text"
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />

      <p>{cont}</p>
      <button
        onClick={(e) => {
          setCont(cont + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

export default UsosSimple;
