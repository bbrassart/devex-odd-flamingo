// React dependencies
import React, { Component } from 'react'
//Styling
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class Results extends Component {
  constructor(props) {
    super(props);
    this.selectResult = this.selectResult.bind(this);
    this.selectWidth = (window.innerWidth / 3);
  }

  selectResult(e) {
    this.props.selectResult(this.props.data[e.target.value]);
  }

  render() {
    return (
      <div>
        <Badge className='mb-1 mr-3' variant="primary">
          Choose a result to see locations on map, related results and articles
        </Badge>
        {
          this.props.selectedResult &&
          (
            <Button variant="secondary" size="sm" onClick={this.props.undoSelectedResult} >
              Undo selection
            </Button>
          )
        }

        <div className='mt-2'>
          <select onChange={this.selectResult} style={{width: this.selectWidth + 'px', fontSize: '11px'}}>
            { this.props.data.map((option, index) =>
              <option key={index} value={index}>
                {option.title}
              </option>
            )}
          </select>
        </div>
      </div>
    )
  }
}

export default Results;
