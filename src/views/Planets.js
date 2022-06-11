import React, { useEffect, useState } from "react";
import axios from "axios";

const Planets = () => {
  
  const [planet, setPlanet] = useState({});
  const [id, setId] = useState(1);
  const [idFromClic, setIdFromClic] = useState(1);
  //const [alertMsg, setAlertMsg] = useState([]);
  
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
        .catch(err => {
          /* Object?.entries (err.response.error).map((e)=>{*/
            console.log(err.code);
            //setAlertMsg ([...alertMsg, e[1].message]);
            })
        }
    ,[idFromClic]);

  
  return (
    <div>
      { 
      //Check if message failed
       /*  (this.state.message === 'failed')
          ? <div> {alertMsg?.map((e)=><p>{e}</p>)} </div>   
          : */
            <>
              <input type="text" value={id} onChange={e => setId(e.target.value) } />
              <button type="button" onClick={handleClic}>Search Planet</button>    
              <div>
              <h3>Name: {planet.name}</h3>
                <p>Climate: {planet.climate}</p>
                <p>Diameter: {planet.diameter}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Population: {planet.population}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Rotation Period: {planet.rotation_period}</p>
                <p>Terrain: {planet.terrain}</p>
              </div>
            </>
      } 
    </div>
  );
}
export default Planets;