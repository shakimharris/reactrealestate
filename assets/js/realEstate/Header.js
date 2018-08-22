import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<header>
      <div className="Logo">Logo</div>
      <nav>
      <a href="#">create ads</a>
      //<a href="#">log in</a>
      <a href="#">about us</a>
      <a href="#" className="register-btn">Register</a>
       </nav>


      </header>)
  }
}
