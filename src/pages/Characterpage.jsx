import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Navbar from '../components/Navbar'
import Homebutton from '../components/Homebutton'
import { Link } from 'react-router-dom'

export default function Characterpage() {
  const [character, setCharacter] = useState('')
  const [characterList, setCharacterList] = useState([])
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character').then(resp => {
      console.log({ resp })
      setCharacterList(resp.data.results)
    })
  }, '')
  return (
    <>
      <div className="title">Characters</div>
      <Navbar />
      <div className="list">
        {characterList.map(character => {
          return (
            <Link className="ind-links" to={`/characters/${character.id}`}>
              <div id="list-item">{character.name}</div>
            </Link>
          )
        })}
      </div>
      <Homebutton />
    </>
  )
}
