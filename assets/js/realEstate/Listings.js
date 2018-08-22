import React, { Component} from 'react'
export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Shakim'
    }
  }


const app = document.getElementById('app')

ReactDOM.render(<Listings />, app)
