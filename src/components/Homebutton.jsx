import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Homebutton extends Component {
  render() {
    return (
      <section className="home-button">
        <hr />
        <Link className="links" to="/">
          Home
        </Link>
      </section>
    )
  }
}

export default Homebutton
