import axios from 'axios'
import { SERVER_URL } from '../utils/constants'

const token = localStorage.getItem("token")
export const api = axios.create({
    baseURL: SERVER_URL,
    headers: {
        token: token
    }
})