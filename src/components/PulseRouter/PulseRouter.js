import React, { Component } from 'react';
// Components
import PulseContainer from '../PulseContainer/PulseContainer'
import PulseInjector from '../PulseInjector/PulseInjector'

class PulseRouter extends Component {
  constructor(props) {
    super(props)
    this.injectData = this.injectData.bind(this)
    this.state = {
      data: []
    }
  }

  injectData(injectedData) {
    this.setState({
      data: JSON.parse(injectedData)
    })
  }

  render() {
    return (
      <>
        { this.state.data.length ? (<PulseContainer injectData={this.injectData} data={this.state.data} />) : (<PulseInjector injectData={this.injectData} />) }
      </>
    )
  }
}

export default PulseRouter;


