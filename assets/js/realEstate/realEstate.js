import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Listings from './Listings.js'
import Filter from './Filter.js'


class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Shakim'
    }
}

  render () {
    return (<div>
      <Header />
        <section id="content-area">
      <Filter />
      <Listings />
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
