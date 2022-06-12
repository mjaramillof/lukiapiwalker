import React, { useEffect, useState } from "react";
import axios from "axios";
import jedi from './img/obi-wan.jpg'

const People = () => {
  
  const [people, setPeople] = useState({});
  const [id, setId] = useState(1);
  const [idFromClic, setIdFromClic] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');
  
  const handleClic = () => {
    setIdFromClic(id);
    console.log(id);
  }
  
    useEffect (() =>  {
    axios
        .get(`https://swapi.dev/api/people/${idFromClic}`)
        .then(response => {
            console.log(response.data);
            setPeople(response.data);
        })
        .catch(error => {
          setErrorMsg(error.response.message);
        });
  }, [idFromClic]);
  
  if(errorMsg === ''){
    return (
      <div>
          <input type="text" value={id} onChange={e => setId(e.target.value) } />
          <button type="button" onClick={handleClic}>Search People</button>    
          <div>
              <h3>Name: {people.name}</h3>
              <p>Gender: {people.gender}</p>
              <p>Height: {people.height}</p>
              <p>Mass: {people.mass}</p>
              <p>Hair Color: {people.hair_color}</p>
              <p>Eye Color: {people.eye_color}</p>
              <p>Birth Year: {people.birth_year}</p>
              <p>Planet : {people.homeworld}</p>
          </div>
      </div>
    );
    }else{
      return(
          <>
            <div>
              <h3>Estos no son los droides que estás buscando</h3>
              <img src={jedi} alt='Obi-Wan Kenobi'/>
            </div>
            <div>
              <a href="/people" >Back to People</a>
            </div>
          </>
      )
    }
}
export default People;