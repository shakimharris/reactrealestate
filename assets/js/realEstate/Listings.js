import React, { Component} from 'react'
export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }


const app = document.getElementById('app')

ReactDOM.render(<Header />, app)
