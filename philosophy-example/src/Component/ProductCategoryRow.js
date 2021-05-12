import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span style={{fontWeight: 'bolder'}}>
          {this.props.category}
        </span>
      </div>
    )
  }
}

export default ProductCategoryRow;