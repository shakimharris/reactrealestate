import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
    name: 'Shakim'
    }
  }

  render () {
    return (<section className="listings">
            <section className="search-area">
            <input type="text" name="search" />
            </section>

            <section className="sort-area">
            <div>390 results found</div
            <div className="sort-options">
            <section name="sort-by" className="sortby">
            <option value="price-asc">Price</option>
            </section>

            </div>


            </section>

            <section className="listings-results">

            </section>

            <section className="pagination">

            </section>

            </section>)
  }
}
