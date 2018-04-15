import * as types from './mutation-types'

const mutations = {
  [types.GET_POSTS] (state, data) {
    state.data = data
    state.errorLoading = false
  },
  [types.GET_POSTS_ERROR] (state) {
    state.data = []
    state.errorLoading = true
    state.errorMessage = "Error Fetching Table"
  }
}

export default mutations
