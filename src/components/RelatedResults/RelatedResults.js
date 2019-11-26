// React dependencies
import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge'
import Inspector from "react-inspector";

class RelatedResults extends Component {
  render() {
    return (
      <div>
        <div className='mt-4 mb-4'>
          <Badge className='mb-3' variant="secondary">Related results based on locations</Badge>
          <p>{this.props.data.total} related result{this.props.data.total === 0 ? '' : 's'}</p>
          <Inspector data={this.props.data.data} />
        </div>
      </div>
    )
  }
}

export default RelatedResults;
