import axios from "axios"
import { SERVER_URL } from "../utils/constants"
import { api } from "./index"


const prefix = "auth"

export const signUp = async(data) => await axios.post(`${SERVER_URL}/${prefix}`, data)

export const signIn = async(data) => await api.post(`/${prefix}/sign-in`, data)

export const getMe = async(data) => await api.get(`/${prefix}/get-me`)