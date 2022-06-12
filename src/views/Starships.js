import React, { useEffect, useState } from "react";
import axios from "axios";
import jedi from './img/obi-wan.jpg'

const Starships = () => {
  
  const [starship, setStarship] = useState({});
  const [id, setId] = useState(2);
  const [idFromClic, setIdFromClic] = useState(2);
  const [errorMsg, setErrorMsg] = useState('');
  
  const handleClic = () => {
    setIdFromClic(id);
    console.log(id);
  }
  
    useEffect (() =>  {
    axios
        .get(`https://swapi.dev/api/starships/${idFromClic}`)
        .then(response => {
            console.log(response.data);
            setStarship(response.data);
        })
        .catch(error => {
          setErrorMsg(error.response.message)
        });
  }, [idFromClic]);

  if(errorMsg === ''){
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value) } />
        <button type="button" onClick={handleClic}>Search starship</button>    
        <div>
            <h3>Name: {starship.name}</h3>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Starship Class: {starship.starship_class}</p>
            <p>MGLT: {starship.MGLT}</p>
            <p>Cargo Capacity: {starship.cargo_capacity}</p>
            <p>Consumables: {starship.consumables}</p>
            <p>Cost in Credits: {starship.cost_in_credits}</p>
            <p>Crew: {starship.crew}</p>
            <p>Passengers: {starship.passengers}</p>
            <p>Hyper Drive Rating: {starship.hyperdrive_rating}</p>
            <p>Length: {starship.length}</p>
            <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
        </div>
    </div>
  );
  }else{
    return(
        <>
          <div>
            <h3>Esas no son las naves que estás buscando</h3>
            <img src={jedi} alt='Obi-Wan Kenobi'/>
          </div>
          <div>
            <a href="/starships" >Back to Starships</a>
          </div>
        </>
    );
  }

}
export default Starships;