import React, { Component } from 'react';

class ProductRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span style={
          {
            color: !this.props.stocked && 'red',
            fontWeight: !this.props.stocked && 'bold',
            width: '100px',
            display: 'inline-block'
          }
        }>
          {this.props.name}
        </span>
        <span>{this.props.price}</span>
      </div>
    )
  }
}

export default ProductRow;