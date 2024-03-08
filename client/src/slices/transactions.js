import { createSlice } from "@reduxjs/toolkit"



const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        transactions: [],
        cardsCheck: []
    },
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload.transactions
        },

        createtransaction: (state, action) => {
            state.transactions = [...state.transactions, action.payload.transaction];
        },

        updateTransaction: (state, action) => {
            state.transactions = state.transactions.map((transaction) => {
                if (transaction.id === action.payload.transaction.id) {
                    return action.payload.transaction
                }
                return transaction
            })
        },

        checkTransaction: (state, action) => {
            const activeTransaction = Boolean(state.cardsCheck.find((activeCard) => activeCard === action.payload));
            
            if (activeTransaction) {
                const unCheck = state.cardsCheck.filter((checked) => checked !== action. payload)
                state.cardsCheck = unCheck
                console.log("From If", state.cardsCheck);
            } 
            else {
                state.cardsCheck = [...state.cardsCheck, action.payload]
                console.log("From else", state.cardsCheck);
            }
            
        }   
    }
})

const { setTransactions, createtransaction, updateTransaction, checkTransaction } = transactionSlice.actions
const transactionReducer = transactionSlice.reducer

export {
    transactionReducer,
    setTransactions,
    createtransaction,
    updateTransaction,
    checkTransaction
}