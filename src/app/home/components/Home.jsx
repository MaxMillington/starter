import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../../logo.svg'

export class Home extends Component {
  state = { data: {} }

  componentDidMount() {
    this.props.getInstagramFeed()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({data: nextProps.data})
    }
  }

  render() {
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