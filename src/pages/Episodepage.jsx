import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Navbar from '../components/Navbar'
import Homebutton from '../components/Homebutton'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const [episodeList, setEpisodeList] = useState([])
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/episode')
      .then(resp => {
        console.log({ resp })
        console.log(resp.data.results)
        setEpisodeList(resp.data.results)
      })
      .then(
        Axios.get('https://rickandmortyapi.com/api/episode/?page=2').then(
          resp => {
            console.log({ resp })
            setEpisodeList(oldList => oldList.concat(resp.data.results))
          }
        )
      )
  }, '')
  return (
    <>
      <div className="title">Episodes</div>
      <Navbar />
      <div className="list">
        {episodeList.map(episode => {
          return (
            <Link className="ind-links" to={`/episodes/${episode.id}`}>
              <div id="list-item">{episode.name}</div>
            </Link>
          )
        })}
      </div>
      <Homebutton />
    </>
  )
}
