import React, { useEffect, useState } from "react";
import axios from "axios";

const Vehicles = () => {
  
  const [vehicle, setvehicle] = useState({});
  const [id, setId] = useState(4);
  const [idFromClic, setIdFromClic] = useState(4);
  
  const handleClic = () => {
    setIdFromClic(id);
    console.log(id);
  }
  
    useEffect (() =>  {
    axios
        .get(`https://swapi.dev/api/vehicles/${idFromClic}`)
        .then(response => {
            console.log(response.data);
            setvehicle(response.data);
        })
        .catch(error => {
            setvehicle(null)
        });
  }, [idFromClic]);

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value) } />
        <button type="button" onClick={handleClic}>Search vehicle</button>    
        <div>
            <h3>Name: {vehicle.name}</h3>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>vehicle Class: {vehicle.vehicle_class}</p>
            <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
            <p>Consumables: {vehicle.consumables}</p>
            <p>Cost in Credits: {vehicle.cost_in_credits}</p>
            <p>Crew: {vehicle.crew}</p>
            <p>Passengers: {vehicle.passengers}</p>
            <p>Length: {vehicle.length}</p>
            <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
        </div>
    </div>
  );
}
export default Vehicles;