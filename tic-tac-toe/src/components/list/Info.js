import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        {this.props.player}
      </div>
     );
  }
}
 
export default Info;