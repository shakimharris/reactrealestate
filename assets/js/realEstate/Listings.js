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

            <section className="sort-by">

            </section>

            <section className="listings-results">

            </section>

            <section className="pagination">

            </section>

            </section>)
  }
}
