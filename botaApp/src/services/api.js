import axios from 'axios'

const api = axios.create({ baseURL: 'https://sabion-challenge-one.herokuapp.com/api' })

export default api