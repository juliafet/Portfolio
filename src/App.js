import React from 'react'
import './App.css'
import Home from './pages'
import ContactPage from './pages/contact'
import Learnmore from './pages/learnmore'
import useGaTracker from './useGaTracker'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  useGaTracker()

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/learnmore" component={Learnmore} exact />
      </Switch>
    </Router>
  )
}

export default App
