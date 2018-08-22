import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<Header>
      <div></div>
      <nav>
      <a href="#">create ads</a>
      <a href="#">about us</a>
      <a href="#">log in</a>


      </nav>


      </Header>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Header />, app)
