// React dependencies
import React, { Component } from 'react'
// Import components
import Map from '../Map/Map';
import List from '../List/List';
import RelatedResults from '../RelatedResults/RelatedResults';
import Articles from '../Articles/Articles';

// Styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import './PulseContainer.css'
// Data imports
import data from '../../datasets/data.js';

// Helpers
import { getRelatedArticles } from '../../helpers/requests'
import { getHeatMapData, processPartialDataForHeatMap } from "../../helpers/utils";

const initialHeatMapData = getHeatMapData(data);

class PulseContainer extends Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.onNewsTopicsChange = this.onNewsTopicsChange.bind(this);
    this.onNewsTopicsSubmit = this.onNewsTopicsSubmit.bind(this);
    this.onMaxDateChange = this.onMaxDateChange.bind(this);
    this.onMinDateChange = this.onMinDateChange.bind(this);
    this.onDateFilterSubmit = this.onDateFilterSubmit.bind(this);
    this.state = {
      markerCoordinateArray: [],
      selectedResult: null,
      articles: [],
      newsTopicsFilter: '',
      maxDate: '',
      minDate: '',
      heatMapData: initialHeatMapData,
      relatedResults: {
        total: 0,
        data: []
      },
      locationNames: [],
      mapboxApiAccessToken: "pk.eyJ1IjoiYmJyYXNzYXJ0IiwiYSI6IjU2MTZjMjRmMjE2MmE4M2Q0OWEwMDVkYTc5YzM3M2Y3In0.V44T7lzZarK4_QwAwoEClw"
    };
  }

  onMaxDateChange(event) {
    this.setState({maxDate: event.target.value});
  }

  onMinDateChange(event) {
    this.setState({minDate: event.target.value});
  }

  onDateFilterSubmit(event) {
    event.preventDefault();

    const { maxDate, minDate } = this.state;

    const filters = [{
      publish_date: {
        maxDate,
        minDate
      }
    }]

    this.setState({
      markerCoordinateArray: [],
      selectedResult: null,
      articles: [],
      relatedResults: {
        total: 0,
        data: []
      },
      newsTopicsFilter: '',
      heatMapData: processPartialDataForHeatMap(this.data, filters),
      locationNames: [],
    });

  }

  onNewsTopicsChange(event) {
    this.setState({newsTopicsFilter: event.target.value});
  }

  onNewsTopicsSubmit(event) {
    event.preventDefault();
    const filters = [{ news_topics: this.state.newsTopicsFilter.split('/') }]
    this.setState({
      markerCoordinateArray: [],
      selectedResult: null,
      articles: [],
      relatedResults: {
        total: 0,
        data: []
      },
      maxDate: '',
      minDate: '',
      heatMapData: processPartialDataForHeatMap(this.data, filters),
      locationNames: [],
    });

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
      if (locationAsName !== undefined) {
        data.forEach(result => {
          if (selectedResult.title !== result.title && result.locations.length) {
            if ( this.extractLocationsAsNames(result).has(locationAsName) ) {
              result.matches_with = locationAsName;
              relatedResults.push(result);
            }
          }
        });
      }
    });
    return new Set(relatedResults);
  };

  generateQueryParams(result) {
    const newsTopics = result.news_topics === undefined ? [] : result.news_topics.map(topic => topic.name.substring(5));
    const locations = result.locations === undefined ? [] : this.extractLocationsAsNames(result);
    let query = `page[size]=20&query=${encodeURIComponent([...locations].join('+'))}`;
    newsTopics.forEach(topic => {
      query += `&filter[news_topics][]=${encodeURIComponent(topic)}`
    });
    return query;
  }


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

  undoSelectedResult() {
    this.setState({
      markerCoordinateArray: [],
      selectedResult: null,
      newsTopicsFilter: '',
      articles: [],
      relatedResults: {
        total: 0,
        data: []
      },
      heatMapData: initialHeatMapData,
      locationNames: [],
    });
  }

  async selectResult(result) {
    let allLocationsAsArray =
      result.locations.length > 0 ? new Set(result.locations.map(loc => loc.location)) : [];

    const finalAllLocationsAsArray = [...allLocationsAsArray].filter(el => el != null);

    let locationsForSelectedResult = this.extractLocationsAsNames(result);

    let relatedResults =
      result.locations.length > 0 ? this.findRelatedResults(result, locationsForSelectedResult) : [];

    const finalRelatedResults = [...relatedResults];

    const articles = await getRelatedArticles(this.generateQueryParams(result));

    this.setState({
      selectedResult: result,
      articles,
      relatedResults: {
        total: finalRelatedResults.length,
        data: this.createRelatedChunks(finalRelatedResults)
      },
      maxDate: '',
      minDate: '',
      newsTopicsFilter: '',
      heatMapData: null,
      locationNames: locationsForSelectedResult,
      markerCoordinateArray: finalAllLocationsAsArray
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <div className='mt-4 search-filters'>
              <Badge className='mb-2' variant="primary">
                Filter data to modify heatmap
              </Badge>

              <div>
                <Badge className='mb-3' variant="secondary">
                  Filter data by publish_date
                </Badge>
              </div>
              <div>
                <form onSubmit={this.onDateFilterSubmit} style={{ fontSize: '11px'}}>
                  <label>
                    Min date
                    <div>
                      <input
                        className='mr-4'
                        id='minDate'
                        style={{width: window.innerWidth / 11 + 'px'}}
                        type='text'
                        value={this.state.minDate}
                        placeholder='Enter min date with format YYYY-MM-DD'
                        onChange={this.onMinDateChange} />
                    </div>
                  </label>

                  <label className='mr-2'>
                    Max date
                    <div>
                      <input
                        id='maxDate'
                        style={{width: window.innerWidth / 11 + 'px'}}
                        type='text'
                        value={this.state.maxDate}
                        placeholder='Enter min date with format YYYY-MM-DD'
                        onChange={this.onMaxDateChange}/>
                    </div>
                  </label>

                  <input className='ml-3' type='submit' value='Filter by publish_date'/>
                </form>
              </div>


              <Badge className='mb-4 mt-4' variant="secondary">
                Filter by news topics and see heat map results
              </Badge>
              <p style={{ fontSize: '11px'}}>
                Here is the list of news topics.
              </p>
              <ul style={{ fontSize: '11px'}}>
                <li>[GH] Global Health</li>
                <li>[CE] Careers & Education</li>
                <li>[FU] Funding</li>
                <li>[WS] Water & Sanitation</li>
              </ul>
              <p style={{ fontSize: '11px'}}>
                You can combine them using '/'.
                Example of correct request: "[GH] Global Health/[WS] Water & Sanitation".
                See results on heatmap
              </p>
              <div>
                <form onSubmit={this.onNewsTopicsSubmit} style={{ fontSize: '11px'}}>
                  <input
                    style={{width: window.innerWidth / 3 + 'px'}}
                    type='text'
                    value={this.state.newsTopicsFilter}
                    placeholder='Enter full name of one or multipe news topics (separated by /)'
                    onChange={this.onNewsTopicsChange} />
                  <div className='mt-3'>
                    <input type='submit' value='Filter by news_topics' />
                  </div>
                </form>
              </div>
            </div>

            <List
              data={this.data}
              undoSelectedResult={this.undoSelectedResult.bind(this)}
              selectResult={this.selectResult.bind(this)}
              selectedResult={this.state.selectedResult}>
            </List>
            <RelatedResults
              data={this.state.relatedResults}>
            </RelatedResults>
            <Articles
              articles={this.state.articles}>
            </Articles>
          </Col>
          <Col>
            <Map
              heatMapData={this.state.heatMapData}
              data={this.data}
              markerCoordinateArray={this.state.markerCoordinateArray}
              mapboxApiAccessToken={this.state.mapboxApiAccessToken}
              selectedResult={this.state.selectedResult}>
            </Map>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PulseContainer;
