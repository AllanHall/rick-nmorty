import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Navbar from '../components/Navbar'
import Homebutton from '../components/Homebutton'
import { Link } from 'react-router-dom'

export default function Characterpage() {
  const [characterList, setCharacterList] = useState([])
  const [nextAxios, setNextAxios] = useState('')
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character').then(resp => {
      console.log({ resp })
      console.log(resp.data.info.next)
      setCharacterList(resp.data.results)
      setNextAxios(resp.data.info.next)
    })
  }, [])

  const moreCharacters = () => {
    Axios.get(`${nextAxios}`).then(resp => {
      setCharacterList(oldList => oldList.concat(resp.data.results))
      setNextAxios(resp.data.info.next)
    })
  }
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
      <button className="more-chars" onClick={() => moreCharacters()}>
        Load More Characters
      </button>
      <Homebutton />
    </>
  )
}
