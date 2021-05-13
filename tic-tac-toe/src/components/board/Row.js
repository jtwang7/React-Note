import React, { Component } from 'react';
import Btn from './Btn';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='row'>
        {
          this.props.content.map((item, idx) => {
            return (
              <Btn
                mark={item}
                colIdx={idx}
                rowIdx={this.props.rowIdx}
                key={idx}
                btnClick={this.props.btnClick}
              />
            )
          })
        }
      </div>
    );
  }
}

export default Row;