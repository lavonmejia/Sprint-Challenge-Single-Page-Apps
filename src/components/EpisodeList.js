import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';
const axios = require('axios');

export default function EpisodeList() {
  const [charList, setCharList] = useState([]);
  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/episode/`)
    .then(response =>{
      setCharList(response.data.results)
  })
}, [])

  return <section className='character-list grid-view'>

      
      {charList.map(episode => <EpisodeCard episode={episode} key={episode.id}/>)}
 
    </section>

}