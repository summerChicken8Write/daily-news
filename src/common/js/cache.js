import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 20

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LENGTH = 100

function insertArray (arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromtArray (arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function saveSearch (query) {
  let searchs = storage.get(SEARCH_KEY, [])
  insertArray(searchs, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searchs)
  return searchs
}

export function loadSearch () {
  return storage.get(SEARCH_KEY, [])
}

export function deleteSearch (query) {
  let searchs = storage.get(SEARCH_KEY, [])
  deleteFromtArray(searchs, (item) => {
    return item === query
  })
  storage.set(SEARCH_KEY, searchs)
  return searchs
}

export function clearSearch () {
  storage.remove(SEARCH_KEY)
  return []
}

export function saveFavorite (news) {
  let searchs = storage.get(FAVORITE_KEY, [])
  insertArray(searchs, news, (item) => {
    return item.group_id === news.group_id
  }, FAVORITE_MAX_LENGTH)
  storage.set(FAVORITE_KEY, searchs)
  return searchs
}

export function loadFavorite () {
  return storage.get(FAVORITE_KEY, [])
}

export function deleteFavorite (news) {
  let searchs = storage.get(FAVORITE_KEY, [])
  deleteFromtArray(searchs, (item) => {
    return item.group_id === news.group_id
  })
  storage.set(FAVORITE_KEY, searchs)
  return searchs
}
