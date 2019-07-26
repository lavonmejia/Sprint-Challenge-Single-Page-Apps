import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard';
const axios = require('axios');

export default function LocationsList() {
  const [charList, setCharList] = useState([]);
  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/location/`)
    .then(response =>{
      setCharList(response.data.results)
  })
}, [])

  return <section className='character-list grid-view'>

      
      {charList.map(location => <LocationCard location={location} key={location.id}/>)}
 
    </section>

}