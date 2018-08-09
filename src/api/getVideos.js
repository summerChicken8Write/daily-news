import axios from 'axios'

export function getVideos () {
  const url = '/api/list/'

  const time = parseInt((new Date().getTime()) / 1000)

  const data = Object.assign({}, {
    tag: 'video',
    ac: 'wap',
    count: 20,
    format: 'json_raw',
    as: 'A17538D54D106FF',
    cp: '585DF0A65F0F1E1',
    min_behot_time: time,
    i: time
  })

  return axios.get(url, {
    params: data
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
