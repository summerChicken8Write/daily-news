import * as types from './mutation-types'
import {saveSearch, deleteSearch, clearSearch, saveFavorite, deleteFavorite} from 'common/js/cache'

export const saveSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

export const deleteSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}

export const saveFavoriteList = function ({commit}, news) {
  commit(types.SET_FAVORITE_LIST, saveFavorite(news))
}

export const deleteFavoriteList = function ({commit}, news) {
  commit(types.SET_FAVORITE_LIST, deleteFavorite(news))
}
