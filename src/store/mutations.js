import * as types from './mutation-types'

const mutations = {
  [types.SET_QUERY] (state, query) {
    state.query = query
  }
}

export default mutations
