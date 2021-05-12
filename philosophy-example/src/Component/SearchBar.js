import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input placeholder='Search...' style={{display: 'block'}} onChange={(e)=>this.props.textListener(e.target.value)} />
        <input type='checkbox' onClick={(e)=>this.props.stockListener(e.target.checked)} />
        <span>Only show products in stock</span>
      </div>
    )
  }
}

export default SearchBar;