import React from 'react' // eslint-disable-line
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {} from '../actions'
import Home from '../components/Home'
import { getInstagramFeed } from '../actions'

const mapStateToProps = (state) => {
  console.log('mapping', state)
  return ({
    data: state.home.data,
    loading: state.home.loading,
    name: 'Max'
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({ getInstagramFeed }, dispatch)

export const ConnectedHome = (props) => {
  console.log('yo my props', props)
  return (
    <Home {...props}/>
  )
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)