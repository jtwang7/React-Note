import React from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isStockOnly: false,
    }
    this.textListener = this.textListener.bind(this)
    this.stockListener = this.stockListener.bind(this)
  }

  /**
   * @param {String} filterText - 搜索词 
   * @param {Boolean} isStockOnly
   */
  textListener(filterText) {
    this.setState({
      filterText,
    })
  }
  stockListener(isStockOnly) {
    console.log(isStockOnly);
    this.setState({
      isStockOnly,
    })
  }


  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          textListener={this.textListener}
          stockListener={this.stockListener}
        />
        <ProductTable filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} />
      </div>
    )
  }
}

export default FilterableProductTable;