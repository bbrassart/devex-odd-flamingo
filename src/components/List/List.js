// React dependencies
import React, { Component } from 'react'
import Results from '../Results/Results';
import SelectedResult from '../SelectedResult/SelectedResult';

class List extends Component {
  render() {
    return (
      <div>
        <div className='mt-3'>
          <Results
            undoSelectedResult={this.props.undoSelectedResult}
            selectResult={this.props.selectResult}
            selectedResult={this.props.selectedResult}
            data={this.props.data} />
        </div>
        <div className='mt-4'>
          <SelectedResult
            selectedResult={this.props.selectedResult}>
          </SelectedResult>
        </div>
      </div>
    )
  }
}

export default List;
