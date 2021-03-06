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
    <div className="inside">
    <h4>Filter</h4>
    <select name="neighborhood" class="filters neighborhood">
      <option>Los Angeles </option>
    </select>
    <select name="housetypes" class="filters housetypes">
      <option>Townhomes </option>
    </select>
    <select name="bedrooms" class="filters bedrooms">
      <option>2 bedrooms </option>
    </select>
    <div class="filters prices">
      <span className="title"> Price </span>
      <input type="text" name="min-price" className="min-price"/>
      <input type="text" name="max-price" className="max-price"/>
   </div>
    <div class="filters floorspace">
        <span className="floorspace"> Floor space</span>
        <input type="text" name="min-floorspace" className="min-floorspace"/>
        <input type="text" name="max-floorspace" className="max-floorspace"/>
       </div>
       <div className="filters extras">
       <span className="title">Extras
       </span>
       <label for="extras">
       <span>Elevator</span>
       <input name="extras" value="elevator" type="checkbox"/>
       </label>
       <label for="extras">
       <span>Finished Basement</span>
       <input name="extras" value="finished-basement" type="checkbox"/>
       </label>
       <label for="extras">
       <span>Gym</span>
       <input name="extras" value="gym" type="checkbox"/>
       </label>
       </div>
       </div>
    </section>)
  }
}
