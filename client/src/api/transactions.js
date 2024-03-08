import { api } from ".";


const prefix = 'transactions'

export const getTransactions = async() => await api.get(`/${prefix}`)

export const createTransaction = async(data) => await api.post(`/${prefix}`, data)

export const updateTransaction = async(id, data) => await api.put(`/${prefix}/${id}`, data)


export const deleteTransaction = async(id) => await api.delete(`/${prefix}/${id}`);