import jsonp from 'common/js/jsonp'
import axios from 'axios'

export function getRollNews () {
  const url = '/api/getRollNews'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getAllNews () {
  const url = 'https://www.toutiao.com/c/user/article/'

  const data = Object.assign({}, {
    page_type: 1,
    user_id: 5954781019,
    max_behot_time: 0,
    count: 20,
    as: 'A1C59BA660F1DE4',
    cp: '5B60119D7EA40E1',
    _signature: '5V7ESBAQvkqyaYwTdFqF.OVexF'
  })

  return jsonp(url, data)
}
