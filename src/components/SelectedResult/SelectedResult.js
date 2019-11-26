// React dependencies
import React, { Component } from 'react'
import Inspector from 'react-inspector'
import Badge from 'react-bootstrap/Badge'

class SelectedResult extends Component {
  render() {
    return (
      <div>
        <Badge className='mb-1' variant="secondary">Selected result</Badge>
        { this.props.selectedResult ?
            <>
              <Inspector data={this.props.selectedResult} />
              <div className='mt-3'>
                <Badge className='mb-1' variant="secondary">Result locations only</Badge>
                {
                  this.props.selectedResult.locations.length ?
                    <>
                      {
                        this.props.selectedResult.locations.map((location, index) => {
                          return (<Inspector key={index} data={location} />)
                        })
                      }
                    </>
                    : <p>No locations for this result</p>
                }
              </div>
            </>
          :
            <p>No result selected</p>
        }
      </div>
    )
  }
}

export default SelectedResult;
