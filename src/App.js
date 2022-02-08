import React from 'react'
import './App.css'
import Home from './pages'
import ContactPage from './pages/contact'
import Learnmore from './pages/learnmore'
import useGaTracker from './useGaTracker'

import { Switch, Route } from 'react-router-dom'

function App() {
  useGaTracker()

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/contact" component={ContactPage} exact />
      <Route path="/learnmore" component={Learnmore} exact />
    </Switch>
  )
}

export default App
