import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../../logo.svg'

export class Home extends Component {
  state = {}

  componentDidMount() {
    const data = this.props.getInstagramFeed()
    console.log('data', data)
    this.setState({ data })
  }

  render() {
    console.log('yo my state', this.state.data)
    return(
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

Home.propTypes = {
  name: PropTypes.string,
  data: PropTypes.object,
  getInstagramFeed: PropTypes.func.isRequired
}

export default Home