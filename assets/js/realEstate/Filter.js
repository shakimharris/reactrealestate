import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Shakim'
    }
  }


const app = document.getElementById('app')

ReactDOM.render(<Filter />, app)
