import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Navbar from '../components/Navbar'
import Homebutton from '../components/Homebutton'

export default function Characterpage() {
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character').then(resp => {
      console.log({ resp })
    })
  }, '')
  return (
    <>
      <div className="title">Characters</div>
      <Navbar />
      <Homebutton />
    </>
  )
}
