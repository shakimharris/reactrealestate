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
    <select  name="neighborhood">
    <option>Teohotiuacan </option>
    </select>
    </section>)
  }
}
