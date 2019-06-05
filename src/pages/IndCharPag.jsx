import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Homebutton from '../components/Homebutton'
import Axios from 'axios'

export default function IndCharPag() {
  const ubc = 'https://rickandmortyapi.com/api/character/1'
  const [characterList, setCharacterList] = useState({})
  useEffect(() => {
    Axios.get(`${ubc}`).then(resp => {
      console.log({ resp })
      setCharacterList({
        name: resp.data.name,
        status: resp.data.status,
        species: resp.data.species,
        gender: resp.data.gender,
        homePlanet: resp.data.origin.name
      })
    })
  }, '')
  return (
    <>
      <div className="title">{characterList.name}</div>
      <Navbar />
      <div className="episode-number">Status: {characterList.status}</div>
      <div className="air-date">Species: {characterList.species}</div>
      <div className="air-date">Gender: {characterList.gender}</div>
      <div className="air-date">Home Planet: {characterList.homePlanet}</div>
    </>
  )
}
