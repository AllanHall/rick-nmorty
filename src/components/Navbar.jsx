import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <section className="nav">
        <Link className="links" to="/characters">
          Characters
        </Link>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/episodes">
          Episodes
        </Link>
      </section>
    )
  }
}

export default Navbar
