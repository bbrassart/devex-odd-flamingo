// React dependencies
import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge'

class RelatedResults extends Component {
  render() {
    return (
      <div>
        <div className='mt-1 mb-5'>
          <Badge className='mb-3' variant="secondary">Related articles</Badge>
          <p>{this.props.data.length} related article{this.props.data.length === 0 ? '' : 's'}</p>
        </div>
      </div>
    )
  }
}

export default RelatedResults;
