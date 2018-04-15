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
        expect(data[0].title).toEqual('Mock with Jest')
      }).catch(error => console.log(error))
  })

  it('tests using a mock mutation but real store', () => {
    store.hotUpdate({
      mutations: { GET_POSTS: dataMock }
    })

    return store.dispatch('getPosts')
      .then((res) => {
        expect(dataMock.mock.calls[0][1])
          .toHaveLength(2)
      })
  })

  it('tests using a mock axios and full store ', () => {
    return store.dispatch('getPosts')
      .then(() => {
          expect(store.state.data[0])
            .toEqual({userId: 1, id: 1, title: 'Mock with Jest', body: 'Unit Testing'})

        expect(store.state.data[1])
          .toEqual({userId: 1, id: 2, title: 'Mock with Jest 2', body: 'Unit Testing'})
        }
      )
  })

})
