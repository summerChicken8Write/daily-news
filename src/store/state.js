import {loadSearch, loadFavorite} from 'common/js/cache'

const state = {
  searchHistory: loadSearch(),
  news: {},
  favoriteList: loadFavorite()
}

export default state
