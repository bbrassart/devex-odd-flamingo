// React dependencies
import React, { Component } from 'react'
//Styling
import Badge from 'react-bootstrap/Badge';

class Results extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.selectWidth = (window.innerWidth / 3);
  }

  handleChange(e) {
    this.props.setResult(this.props.data[e.target.value]);
  }

  render() {
    return (
      <div>
        <Badge className='mb-1' variant="secondary">All data</Badge>
        <div className='mt-2'>
          <select onChange={this.handleChange} style={{width: this.selectWidth + 'px', 'font-size': '11px'}}>
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
