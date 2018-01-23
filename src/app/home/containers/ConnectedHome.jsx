import React from 'react' // eslint-disable-line
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {} from '../actions'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
  name: 'Max'
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)