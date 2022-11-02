import React, {useState} from "react";

const TextoMeme = () => {
  const [textomeme, setTextomeme] = useState();

  const textoIngresado = (e) => {
    setTextomeme(e.taget.value);
  };
  return (
    <div className="text-center">
      <h3 className="mt-3 mb-3 text-center">Ingresa el texto</h3>
      <input
        type="texto"
        placeholder="Pone tu frase"
        className="form-control w-100"
        onChange={textoIngresado}
      />
    </div>
  );
};

export default TextoMeme;
