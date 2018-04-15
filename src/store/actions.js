import * as types from './mutation-types'
import axios from 'axios'


const actions = {
  /**
   * Returns all the posts via GET request with Axios
   *
   * If Successful response: commit GET_POSTS mutation with response data
   * If error response: log error on browser console
   */
  getPosts({commit}) {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit(types.GET_POSTS, response.data)
      })
      .catch(err => console.log(err))
  }
}

export default actions
