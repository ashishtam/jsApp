import * as types from './mutation-types'

const mutations = {
  [types.GET_POSTS] (state, data) {
    state.data = data
  }
}

export default mutations
