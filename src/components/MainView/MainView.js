import React, { Component } from 'react'
// Components
import PulseRouter from '../PulseRouter/PulseRouter'
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainView extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={PulseRouter} />
      </Router>
    )
  }
}

export default MainView;
