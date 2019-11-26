import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

// Markers
import { ReactComponent as Icon } from './../../markers/marker.svg';

// Styling
import './Map.css';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth / 2,
        height: window.innerHeight,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 1
      }
    }
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={this.props.mapboxApiAccessToken}
      >
        {
          this.props.markerCoordinateArray.map((locations, index) => {
            return (
              <Marker
                key={index}
                longitude={locations.lng}
                latitude={locations.lat}>
                <Icon className='marker-icon'></Icon>
              </Marker>
           )
          })
        }
      </ReactMapGL>
    );
  }
}

export default Map;


