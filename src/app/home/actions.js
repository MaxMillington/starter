import axios from 'axios'

export const GET_INSTAGRAM = 'GET_INSTAGRAM'
export const GET_INSTAGRAM_SUCCESS = 'GET_INSTAGRAM_SUCCESS'
export const GET_INSTAGRAM_ERROR = 'GET_INSTAGRAM_ERROR'

export const getInstagram = (bool) => {
  return {
    type: GET_INSTAGRAM,
    isLoading: bool
  }
}

export const getInstagramSuccess = (data) => {
  return {
    type: GET_INSTAGRAM_SUCCESS,
    data
  };
}

export const getInstagramError = (bool) => {
  return {
    type: GET_INSTAGRAM_ERROR,
    error: bool
  }
}

export const getInstagramFeed = () => {
  return (dispatch) => {
    dispatch(getInstagram(true))
    const accessToken = '581228915.185c752.68f181cbdea3479c97ed8186f983cca0'
    const uri  = `https://api.instagram.com/v1/users/search?q=lakelouiserd&access_token=${accessToken}`

    axios.get(uri)
      .then(res => {
        console.log('gottet', res)
        dispatch(getInstagramSuccess(res.data))
      })
      .catch(err => {
        dispatch(getInstagramError(true))
      })
  }
}