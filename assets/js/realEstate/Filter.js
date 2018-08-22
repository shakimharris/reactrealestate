import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
    name: 'Shakim'
    }
  }
  render () {
    return (<section className="Filter">
    <h4>Filter</h4>
    <select name="neighborhood" class="neighborhood">
    <option>Los Angeles </option>
    </select>
    <select name="housetypes" class="housetypes">
    <option>Townhomes </option>
    </select>
    <select name="bedrooms" class="bedrooms">
    <option>2 bedrooms </option>
    </select>
    <div class="filters-prices">
    <input type="text" className="min-price">
    </input>
    <input type="text" className="max-price">
    </input>

    </div>
    </section>)
  }
}
