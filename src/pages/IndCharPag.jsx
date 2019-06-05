import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'

export default function IndCharPag(props) {
  const ubc = 'https://rickandmortyapi.com/api/character/'
  const [characterList, setCharacterList] = useState({})
  useEffect(() => {
    const charID = props.match.params.id
    Axios.get(`${ubc}${charID}`).then(resp => {
      console.log({ resp })
      setCharacterList({
        name: resp.data.name,
        status: resp.data.status,
        species: resp.data.species,
        gender: resp.data.gender,
        homePlanet: resp.data.origin.name,
        image: resp.data.image
      })
    })
  }, [])
  return (
    <>
      <div className="title">{characterList.name}</div>
      <Navbar />
      <img className="character-image" src={characterList.image} alt="rick" />
      <div className="list2">
        <div className="char-info">Status: {characterList.status}</div>
        <div className="char-info">Species: {characterList.species}</div>
        <div className="char-info">Gender: {characterList.gender}</div>
        <div className="char-info">Home Planet: {characterList.homePlanet}</div>
      </div>
    </>
  )
}
