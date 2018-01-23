import React, { Component } from 'react'
import logo from '../../../logo.svg'

export class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h1 className="home-title">Welcome to React</h1>
        </header>
        <p className="home-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        My Sweetness
      </div>
    )
  }

}

export default Home