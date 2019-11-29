import React, { Component } from 'react';
// Data imports

// Styling
import Container from 'react-bootstrap/Container'
import LoadingOverlay from 'react-loading-overlay'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ObjectInspector from 'react-inspector'

const showcasedJson = [
  {
    "data_source" : "meltwater",
    "url" : "https://www.daily-sun.com/post/435110/Bangladesh-WB-sign-100mn-financing-deal-for-safe-water-sanitation-in-municipalities",
    "document_type" : "news_article",
    "title" : "Bangladesh, WB sign $100mn financing deal for safe water, sanitation in municipalities",
    "hit_sentence" : "Bangladesh, WB sign $100mn financing deal for safe water, sanitation in municipalities",
    "publish_date" : "2019-10-29",
    "relevant" : true,
    "relevance_confidence" : 1,
    "funders" : [
      "Asian Infrastructure Investment Bank",
      "International Development Association",
      "World Bank Group"
    ],
    "funders_new" : [
      "NCMM",
      "Osun State Government",
      "World Bank Country Director for Bangladesh",
      "World Bank’s International Development Association",
      "government of Bangladesh"
    ],
    "companies" : [
      "Asian Infrastructure Investment Bank",
      "Bhutan Mercy Tembon",
      "ERD",
      "National Strategy for Water Supply and Sanitation",
      "WB",
      "World Bank",
      "World Bank 's International Development Association"
    ],
    "news_topics" : [
      {
        "confidence" :0.985,
        "name":"[WS] Water \u0026 Sanitation"
      } ,
      {
        "confidence" :0.773,
        "name":"[IN] Infrastructure"
      } ,
      {
        "confidence":0.75,
        "name":"[UD] Urban Development"
      }
    ],
    "wb_sectors": [
      {
        "confidence":0.903,
        "name":"[WC] Water supply"
      },
      {
        "confidence":0.775,
        "name":"[WA] Sanitation"
      },
      {
        "confidence":0.634,
        "name":"[WV] Wastewater Treatment and Disposal"
      }
    ],
    "locations" : [
      {
        "location": {
          "lat":23.684994,
          "lng":90.356331
        },
        "name":"Bangladesh"
      }
    ]
  }
]

class PulseInjector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jsonData: [],
      link: '',
      loading: false
    }
    this.submitData = this.submitData.bind(this)
    this.submitLink = this.submitLink.bind(this)
    this.handleInjectedDataChange = this.handleInjectedDataChange.bind(this)
    this.handleLinkChange = this.handleLinkChange.bind(this)
  }

  async componentDidMount() {
    if ( !this.props.incomingUrl ) {
      return null;
    }

    this.setState({
      loading: true
    })

    fetch(
      'https://cors-anywhere.herokuapp.com/' + this.props.incomingUrl, {
      }
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        alert(`Something went wrong: ${resp.status}: ${resp.statusText}`)
        return false;

      })
      .then(incomingJson => {
        this.setState({
          loading: false,
          jsonData: JSON.stringify(incomingJson)
        })

        this.props.injectData(this.state.jsonData)
      })
  }

  hasIncorrectUrlParam(hostnameAsArray) {
    return hostnameAsArray.length !== 2
  }

  submitData(event) {
    event.preventDefault()
    this.props.injectData(this.state.jsonData)
  }

  submitLink(event) {
    event.preventDefault()

    window.href = `${window.location.origin}${window.location.pathname}?url=${this.state.link}`

  }

  handleLinkChange(e) {
    this.setState({
      link: e.target.value
    })
  }

  handleInjectedDataChange(e) {
    this.setState({
      jsonData: e.target.value
    })
  }

  render() {
    return (
      <>
        <LoadingOverlay
          active={this.state.loading}
          spinner
          text='Incoming URL detected. Sit back and relax...'
        >
          {
            this.state.loading && (
              <img src='https://i.pinimg.com/236x/52/bc/39/52bc3928fd63daa22ebfb555f9ae07dd.jpg' />
            )
          }
        </LoadingOverlay>

        <Container className='mt-4'>
          <Row>
            <Col>
              <div><Badge className='m-4' variant='primary'>Patse #dxy link</Badge></div>
              <form className='m-4' onSubmit={this.submitLink}>
              <input
                type='text'
                style={{width: window.innerWidth / 4 + 'px'}}
                placeholder='Paste #dxy link here'
                onChange={this.handleLinkChange} />
                <div className='mt-3'>
                  <input type='submit' value='Load results from link' disabled={!this.state.link.length}/>
                </div>
              </form>
            </Col>
            <Col>
              <div><Badge className='m-4' variant='primary'>Copy paste JSON data</Badge></div>
              <form className='m-4' onSubmit={this.submitData}>
              <textarea
                style={{width: window.innerWidth / 4 + 'px', height: window.innerWidth / 4 + 'px'}}
                placeholder='Insert your JSON data here'
                onChange={this.handleInjectedDataChange} />
                <div className='mt-3'>
                  <input
                    type='submit' value='Import JSON data'
                    disabled={!this.state.jsonData.length}/>
                </div>
              </form>
            </Col>
          </Row>
          <Row className='mt-5'>
            <p>Example of compatible JSON data</p>
            <ObjectInspector data={showcasedJson} expandLevel={10}/>
          </Row>
        </Container>
      </>
    )
  }
}

export default PulseInjector;
