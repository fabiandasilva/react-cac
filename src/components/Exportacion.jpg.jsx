import React from "react";
import ImgMeme from "./ImgMeme";

const Exportacion = () => {
  /* const [state, setstate] = useState(initialState); */
  return (
    <div className="text-center">
      <figure>
        <p className="w-100 px-30 text-center position-absolute top-50 start-30 h1"></p>
        <img src={`../../public/memes/1.webp`} className="figure-img img-fluid mt-3" />
      </figure>
    </div>
  );
};

export default Exportacion;
