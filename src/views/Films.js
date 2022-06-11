import React, { useEffect, useState } from "react";
import axios from "axios";

const Films = () => {
  
  const [film, setFilm] = useState({});
  const [id, setId] = useState(1);
  const [idFromClic, setIdFromClic] = useState(1);
  
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
            setFilm('error.null')
        });
  }, [idFromClic]);

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
}
export default Films;