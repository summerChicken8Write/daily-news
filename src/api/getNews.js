import axios from 'axios'

export function getNews () {
    const url = '/api/getNews'

    return axios.get(url)
    .then(res => {
        return Promise.resolve(res.data)
    })
}
