import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { data } from '../data/jsonData'

class ProductTable extends Component {
  constructor(props) {
    super(props)
  }

  select(data, category) {
    let search = data.filter(item => {
      return (item.category === category) && (
        this.props.filterText ?
          item.name === this.props.filterText : true
      )
    })

    let res = search.filter(item => {
      return this.props.isStockOnly ? item.stocked : true
    })

    return res.map(item => (
      <ProductRow name={item.name} price={item.price} stocked={item.stocked} key={item.name} />
    ))
  }

  render() {
    return (
      <div>
        <span style={{ fontWeight: 'bolder' }}>Name    Price</span>
        <ProductCategoryRow category='Sporting Goods' />
        {this.select(data, 'Sporting Goods')}
        <br />
        <ProductCategoryRow category='Electronics' />
        {this.select(data, 'Electronics')}
      </div>
    )
  }
}

export default ProductTable;