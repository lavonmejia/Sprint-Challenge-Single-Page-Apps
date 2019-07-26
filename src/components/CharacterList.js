import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
const axios = require('axios');

export default function CharacterList() {
  const [charList, setCharList] = useState([]);
  useEffect(() => {
   

    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response =>{
      setCharList(response.data.results)
  })
}, [])

  return <section className='character-list grid-view'>

      
      {charList.map(character => <CharacterCard character={character} key={character.id}/>)}
      {/* {console.log(charList)} */}
    </section>

}