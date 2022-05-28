import React, { useState } from "react";
import axios from "axios";

const People = () => {
  const [people, setPeople] = useState([]);

  function fetchData() {
    
    axios
      .get("https://swapi.dev/api/people/")
      .then(response => {
        setPeople(response.data.results);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }
  return (
    <div>
      <button onClick={fetchData}>Fetch Random Data</button>
      <div>
        {people &&
          people.map(item => (
            <>
              <h3>Name: {item.name}</h3>
              <p>Gender: {item.gender}</p>
              <p>Height: {item.height}</p>
              <p>Mass: {item.mass}</p>
              <p>Hair Color: {item.hair_color}</p>
            </>
          ))}
      </div>
    </div>
  );
}
export default People;