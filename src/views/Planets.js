import React, { useEffect, useState } from "react";
import axios from "axios";
import jedi from './img/obi-wan.jpg';

const Planets = () => {
  
  const [planet, setPlanet] = useState({});
  const [id, setId] = useState(1);
  const [idFromClic, setIdFromClic] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');
  
  const handleClic = () => {
    setIdFromClic(id);
    console.log(id);
  }

    useEffect (() => {
    axios
        .get(`https://swapi.dev/api/planets/${idFromClic}`)
        .then(response => {
            console.log(response.data);
            setPlanet(response.data);
        }
        )
        .catch(error => {
            console.log(error.response.message);
            setErrorMsg(error.response.message);
        })
    },[idFromClic]);

  if(errorMsg === ''){
  return (
    <div>
            <h3>Name: {planet.name}</h3>
            <input type="text" value={id} onChange={e => setId(e.target.value) } />
            <button type="button" onClick={handleClic}>Search Planet</button>    
            <div>
              <p>Climate: {planet.climate}</p>
              <p>Diameter: {planet.diameter}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Population: {planet.population}</p>
              <p>Surface Water: {planet.surface_water}</p>
              <p>Rotation Period: {planet.rotation_period}</p>
              <p>Terrain: {planet.terrain}</p>
            </div>
      <p>{errorMsg}</p>
    </div>
  );
  }else{
    return(
        <>
          <div>
            <h3>Estas no son los planetas que estas buscando</h3>
            <img src={jedi} alt='Obi-Wan Kenobi'/>
          </div>
          <div>
            <a href="/planets" >Back to Planets</a>
          </div>
        </>
    );
  }
}

export default Planets;