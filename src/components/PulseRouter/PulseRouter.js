import React, { Component } from 'react'
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
    this.url = this.getUrlParam()
  }

  getUrlParam() {
    const urlAsArray = window.location.href.split('/?url=');
    return urlAsArray[1] ? urlAsArray[1] : null
  }

  injectData(injectedData) {
    this.setState({
      data: JSON.parse(injectedData)
    })
  }

  render() {
    return (
      <>
        { this.state.data.length ? (<PulseContainer injectData={this.injectData} data={this.state.data} />) : (<PulseInjector incomingUrl={this.url} injectData={this.injectData} />) }
      </>
    )
  }
}

export default PulseRouter;
