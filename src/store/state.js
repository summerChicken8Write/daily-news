import {loadSearch} from 'common/js/cache'

const state = {
  searchHistory: loadSearch(),
  news: {}
}

export default state
