import axios from 'axios'


export default axios.create({
  baseURL: process.env.VUE_APP_READY_CASH_URL
})
