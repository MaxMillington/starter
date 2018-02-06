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

export const getInstagramFeed = (numbersCalled) => {
  return (dispatch) => {
    dispatch(getInstagram(true));
    const clientId = '185c752d900a4cfd8d8f91cf4d02f6f4'
    const redirectUri = 'http://localhost:3000'

    const url = `https://www.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=public_content`

    axios.get(url)
      .then(res => {
        dispatch(getInstagramSuccess(res.data))
      })
      .catch(err => {
        dispatch(getInstagramError(true))
      })
  }
}