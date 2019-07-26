import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
const axios = require('axios');

export default function CharacterList() {
  const [charList, setCharList] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response =>{
      setCharList(response.data.results)

    //   response.data.results.forEach(character => {
    //     setCharList([...charList, {
    //       id: character.id,
    //       name: character.name,
    //       status: character.status,
    //       species: character.species,
    //       type: character.type,
    //       gender: character.gender,
    //       origin: character.origin.name,
    //       location: character.location.name,
    //       image: character.image,
    //      }])

    // })
  })
}, [])

  return <section className='character-list grid-view'>

      
      {charList.map(character => <CharacterCard character={character} key={character.id}/>)}
      {/* {console.log(charList)} */}
    </section>

}