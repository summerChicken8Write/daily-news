import axios from 'axios'

export function getHotKey () {
  const url = '/api/getHotKey'

  return axios.get(url).then(res => {
    return Promise.resolve(res.data)
  })
}

export function search (query) {
  const url = '/api/search_content/'

  const data = Object.assign({}, {
    offset: 0,
    format: 'json',
    keyword: query,
    autoload: 'true',
    count: 10,
    cur_tab: 1
  })

  return axios.get(url, {
    params: data
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
