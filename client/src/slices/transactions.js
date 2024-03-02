import { createSlice } from "@reduxjs/toolkit"


const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        transactions: [],
    },
    reducers: {
        setTransactions: (state, action) =>  {
            state.transactions = action.payload.transactions
        },
        
        createtransaction: (state, action) => {
            state.transactions = [...state.transactions, action.payload.transaction];
        },
        
        updateTransaction: (state, action) => {
            state.transactions = state.transactions.map((transaction) => {
                if(transaction.id === action.payload.transaction.id){
                    return action.payload.transaction
                }
                return transaction
            })
        }

    }
})

const { setTransactions, createtransaction, updateTransaction } = transactionSlice.actions
const transactionReducer = transactionSlice.reducer

export {
    transactionReducer,
    setTransactions,
    createtransaction,
    updateTransaction
}