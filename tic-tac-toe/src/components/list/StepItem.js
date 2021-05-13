import React, { Component } from 'react';

class StepItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <span style={{ width: '30px', display: 'inline-block' }}>{this.props.idx}</span>
        <button onClick={() => {this.props.backTrack(this.props.idx - 1)}}>{this.props.text}</button>
      </div>
    );
  }
}

export default StepItem;