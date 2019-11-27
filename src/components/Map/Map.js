import React, { Component } from 'react';

// Map tooling
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl';
import { heatmapLayer } from './map-style';

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
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={this.props.mapboxApiAccessToken}
      >
        { this.props.heatMapData && (
          <Source type="geojson" data={this.props.heatMapData}>
            <Layer {...heatmapLayer} />
          </Source>
        ) }
        { !this.props.heatMapData &&
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


