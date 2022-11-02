import React, {useEffect, useState} from "react";

const Api = () => {
  //declaro el state user para luego usar un map
  //declaro el setUser para manipular el estado de la data de la api
  //declaro el useState con un estado inicial de [ ] xq voy a recibir la data en forma de array
  const [user, setUser] = useState([]);
  //utilizo el useEffect para utilizar una api y agrego el [] para evitar el rerender
  useEffect(() => {
    //Utilizo el fetch para conectar con la api
    fetch("https://reqres.in/api/users")
      //utilizo el then para trasformar la data a json
      .then((data) => data.json())
      //conecto el json de la data para conectarlo con el manejo de estado del useState
      .then((json) => setUser(json.data));
    //declaro [] para evitar el rerender
  }, []);
  return (
    <div>
      <h2>Comuncacion con Api</h2>
      <ul>
        {/* Utilizo un map para recorrer la data de la api */}
        {user.map((variable) => (
          <li key={variable.first_name}>
            {variable.first_name} {variable.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
