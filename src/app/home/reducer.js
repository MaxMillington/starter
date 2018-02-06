import { GET_INSTAGRAM, GET_INSTAGRAM_ERROR, GET_INSTAGRAM_SUCCESS} from './actions'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTAGRAM:
      return Object.assign({}, state, {
        loading: true,
        data: action.data
      })
    case GET_INSTAGRAM_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.data
      })
    case GET_INSTAGRAM_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })
    default:
      return state
  }
}