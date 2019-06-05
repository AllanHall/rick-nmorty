import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Homebutton from '../components/Homebutton'
import Axios from 'axios'
import mpb from '../images/mpb.jpg'
import rnm from '../images/rnm.gif'

export default function IndEpiPag() {
  const url = 'https://rickandmortyapi.com/api/episode/1'
  const [episodeList, setEpisodeList] = useState({})
  useEffect(() => {
    Axios.get(`${url}`).then(resp => {
      console.log({ resp })
      setEpisodeList({
        name: resp.data.name,
        episode: resp.data.episode,
        airDate: resp.data.air_date
      })
    })
  }, '')
  return (
    <>
      <div className="title">{episodeList.name}</div>
      <Navbar />
      <div className="episode-number">{episodeList.episode}</div>
      <div className="air-date">Air Date: {episodeList.airDate}</div>
      <div className="images">
        <img src={mpb} alt="mr poopy butthole" className="mpb" />
        <img src={rnm} alt="rick and morty" className="rnm" />
      </div>
    </>
  )
}
