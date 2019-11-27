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
            </>
          :
            <p>No result selected</p>
        }
      </div>
    )
  }
}

export default SelectedResult;
