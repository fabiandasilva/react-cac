import React, {useState} from "react";

const ImgMeme = () => {
  const [imgmemes, setImgmemes] = useState();

  const seleccionarImg = (e) => {
    setImgmemes(e.target.value);
  };
  return (
    <div className="text-center">
      <h1 className="mt-3 text-center">Edita tu meme</h1>
      <select onChange={seleccionarImg} className="form-select form-select-text">
        <option value={1}>Futurama</option>
        <option value={2}>Bob Esponja</option>
      </select>
      <figure>
        <p className="w-100 px-30 position-absolute"></p>
      </figure>
    </div>
  );
};

export default ImgMeme;
