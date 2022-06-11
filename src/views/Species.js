import React, { useEffect, useState } from "react";
import axios from "axios";

const Species = () => {
  
  const [specie, setspecie] = useState({});
  const [id, setId] = useState(1);
  const [idFromClic, setIdFromClic] = useState(1);
  
  const handleClic = () => {
    setIdFromClic(id);
    console.log(id);
  }
  
    useEffect (() =>  {
    axios
        .get(`https://swapi.dev/api/species/${idFromClic}`)
        .then(response => {
            console.log(response.data);
            setspecie(response.data);
        })
        .catch(error => {
            setspecie('error.null')
        });
  }, [idFromClic]);

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value) } />
        <button type="button" onClick={handleClic}>Search specie</button>    
        <div>
            <h3>Name: {specie.name}</h3>
            <p>Average Lifespan: {specie.average_lifespan}</p>
            <p>Classification: {specie.classification}</p>
            <p>Designation: {specie.designation}</p>
            <p>Eye Colors: {specie.eye_colors}</p>
            <p>Average Height: {specie.average_height}</p>
            <p>Language: {specie.language}</p>
            <p>Skin Colors: {specie.skin_colors}</p>
            <p>Hair Colors: {specie.hair_colors}</p>
        </div>
    </div>
  );
}
export default Species;