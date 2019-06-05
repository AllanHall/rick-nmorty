import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import Characterpage from './pages/Characterpage'
import Episodepage from './pages/Episodepage'
import IndEpiPag from './pages/IndEpiPag'
import IndCharPag from './pages/IndCharPag.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/characters" exact component={Characterpage} />
          <Route path="/episodes" exact component={Episodepage} />
          <Route path="/episodes/:id" exact component={IndEpiPag} />
          <Route path="/characters/:id" exact component={IndCharPag} />
        </Switch>
      </Router>
    )
  }
}

export default App
