import React, { Component } from 'react';
import StepItem from './StepItem'

class StepList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let { history } = this.props
    return (
      <div>
        {
          history.map((item, idx) => (
            <StepItem
              idx={idx + 1}
              text={idx ? `Go to move #${idx}` : `Go to game start`}
              backTrack={this.props.backTrack}
            />
          ))
        }
      </div>
    );
  }
}

export default StepList;