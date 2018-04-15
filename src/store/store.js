import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  data: {}
}


const options = {
  state,
  actions,
  mutations
}
const store = new Vuex.Store(options)

export default store
