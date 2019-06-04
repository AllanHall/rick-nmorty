import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Homebutton from '../components/Homebutton'
import portal from '../images/portal.gif'

export default function Homepage() {
  return (
    <>
      <div className="title">.name</div>
      <Navbar />
      <div className="episode-number">.episode</div>
      <div className="air-date">.air_date</div>
      <div />
      <Homebutton />
    </>
  )
}
