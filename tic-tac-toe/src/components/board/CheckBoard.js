import React, { Component } from 'react';
import Row from './Row';

class CheckBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='checkboard'>
        {
          this.props.current.map((item, idx) => {
            return (
              <Row
                content={item}
                rowIdx={idx} key={idx}
                btnClick={this.props.btnClick}
              />
            )
          })
        }
      </div>
    );
  }
}

export default CheckBoard;