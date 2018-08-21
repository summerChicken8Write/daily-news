import * as types from './mutation-types'

const mutations = {
  [types.SET_SEARCH_HISTORY] (state, history) {
    state.searchHistory = history
  },
  [types.SET_NEWS] (state, news) {
    state.news = news
  }
}

export default mutations
