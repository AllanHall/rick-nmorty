import React from 'react'
import Navbar from '../components/Navbar'
import portal from '../images/portal.gif'

export default function Homepage() {
  return (
    <>
      <div className="title">Rick and Morty</div>
      <Navbar />
      <img className="portal" src={portal} alt="portal" />
    </>
  )
}
