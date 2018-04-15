import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import actions from '@/store/actions'
import mutations from '@/store/mutations'

describe('actions', () => {
  let store
  let dataMock

  beforeEach(() => {
    dataMock = jest.fn()

    store = new Vuex.Store({
      state: {data: {}},
      mutations,
      actions
    })
  })

  it('tests with a mock commit', () => {
    let data
    let count = 0

    let mockCommit = (state, testData) => {
      data = testData
      count = testData.length
    }

    actions.getPosts({commit: mockCommit})
      .then(() => {
        expect(count).toBe(2)
      }).catch(error => console.log(error))
  })

})
