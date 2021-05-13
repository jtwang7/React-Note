import React, { Component } from 'react';

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let { btnClick, rowIdx, colIdx } = this.props;
    return (
      <button
        className='btn'
        onClick={() => { 
          // console.log(1);
          btnClick(rowIdx, colIdx) 
        }}
      >{this.props.mark}</button>
    );
  }
}

export default Btn;