import React, { useEffect, useState } from "react";
import axios from "axios";
import jedi from './img/obi-wan.jpg';

const Films = () => {
  
  const [film, setFilm] = useState({});
  const [id, setId] = useState(1);
  const [idFromClic, setIdFromClic] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');
  
  const handleClic = () => {
    setIdFromClic(id);
    console.log(id);
  }
  
    useEffect (() =>  {
    axios
        .get(`https://swapi.dev/api/films/${idFromClic}`)
        .then(response => {
            console.log(response.data);
            setFilm(response.data);
        })
        .catch(error => {
          setErrorMsg(error.response.message);
        });
  }, [idFromClic]);

  if(errorMsg === ''){
  return (
    <div className="App">
        <input type="text" value={id} onChange={e => setId(e.target.value) } />
        <button type="button" onClick={handleClic}>Search Film</button>    
        <div>
            <h3>{film.title}</h3>
            <p>{film.opening_crawl}</p>
            <p>Date: {film.release_date}</p>
            <p>Episode: {film.episode_id}</p>
            <p>Director: {film.director}</p>
            <p>Producer: {film.producer}</p>
        </div>
    </div>
  );
  }else{
    return(
        <>
          <div>
            <h3>Estas no son las películas que estas buscando</h3>
            <img src={jedi} alt='Obi-Wan Kenobi'/>
          </div>
          <div>
            <a href="/films" >Back to Films</a>
          </div>
        </>
    );
  }
}
export default Films;