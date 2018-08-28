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
            <div>390 results found</div>
            <div className="sort-options">
            <section name="sort-by" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
            </section>
            <div className="view">
            <i className="fas fa-th-list" aria-hidden="true"></i>
            <i className="fas fa-th" aria-hidden="true"></i>
            </div>


            </section>

            <section className="listings-results">
            <div className="listing">
             <div className="listing-img">
              <span className="Address">Address</span>
               <div className="details">  </div>
                <div className="user-img">
                  <div className="user-details">

                  <span className="user-name">Nina Smith</span>
                  <span className="post-date">08/28/18</span>

                </div>
               </div>
             </div>
            </div>

            </section>

            <section className="pagination">

            </section>

            </section>)
  }
}
