// React dependencies
import React, { Component } from 'react'
// Import components
import Map from '../Map/Map';
import List from '../List/List';
import RelatedResults from '../RelatedResults/RelatedResults';
import RelatedArticles from '../RelatedArticles/RelatedArticles';

// Styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Data imports
import data from '../../datasets/data.js';

const sfCoordinates = {
  lng: -122.4376,
  lat: 37.7577
};

class PulseContainer extends Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.state = {
      markerCoordinateArray: [sfCoordinates],
      selectedResult: null,
      relatedArticles: [],
      relatedResults: {
        total: 0,
        data: []
      },
      locationNames: [],
      mapboxApiAccessToken: "pk.eyJ1IjoiYmJyYXNzYXJ0IiwiYSI6IjU2MTZjMjRmMjE2MmE4M2Q0OWEwMDVkYTc5YzM3M2Y3In0.V44T7lzZarK4_QwAwoEClw"
    };
  }

  extractLocationsAsNames(result) {
    return new Set(result.locations.map(loc => loc.name));
  }

  findRelatedResults(selectedResult, locationsForSelectedResult) {
    if(!selectedResult.locations.length) {
      return [];
    }
    const locationNames = locationsForSelectedResult;
    const relatedResults = [];
    locationNames.forEach(locationAsName => {
      data.forEach(result => {
        if (selectedResult.title !== result.title && result.locations.length) {
          if ( this.extractLocationsAsNames(result).has(locationAsName) ) {
            result.matches_with = locationAsName;
            relatedResults.push(result);
          }
        }
      });
    });
    return new Set(relatedResults);
  };

  createRelatedChunks(data) {
    const results = {};
    data.forEach(object => {
      if (results[object.matches_with] === undefined) {
        results[object.matches_with] = [object];
      } else {
        results[object.matches_with].push(object);
      }
    });
    return results;
  };

  setResult (result) {
    let allLocationsAsArray =
      result.locations.length > 0 ? new Set(result.locations.map(loc => loc.location)) : [];

    const finalAllLocationsAsArray = [...allLocationsAsArray].filter(el => el != null);

    let locationsForSelectedResult = this.extractLocationsAsNames(result);

    let relatedResults =
      result.locations.length > 0 ? this.findRelatedResults(result, locationsForSelectedResult) : [];

    const finalRelatedResults = [...relatedResults];

    const relatedArticles = [];


    this.setState({
      selectedResult: result,
      relatedArticles,
      relatedResults: {
        total: finalRelatedResults.length,
        data: this.createRelatedChunks(finalRelatedResults)
      },
      locationNames: locationsForSelectedResult,
      markerCoordinateArray: finalAllLocationsAsArray
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <List
              data={this.data}
              setResult={this.setResult.bind(this)}
              selectedResult={this.state.selectedResult}>
            </List>
            <RelatedResults
              data={this.state.relatedResults}>
            </RelatedResults>
            <RelatedArticles
              data={this.state.relatedArticles}>
            </RelatedArticles>
          </Col>
          <Col>
            <Map
              data={this.data}
              markerCoordinateArray={this.state.markerCoordinateArray}
              mapboxApiAccessToken={this.state.mapboxApiAccessToken}
              setResult={this.setResult.bind(this)}
              selectedResult={this.state.selectedResult}>
            </Map>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PulseContainer;
