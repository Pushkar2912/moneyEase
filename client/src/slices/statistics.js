import { createSlice } from "@reduxjs/toolkit"


const statisticSlice = createSlice({
    name: "statistics",
    initialState: {
        stats: []
    },
    reducers: {
        setStatistics: (state, action) => {
            state.stats = action.payload
        }
    }
})

const { setStatistics } = statisticSlice.actions
const statisticReducer = statisticSlice.reducer

export {
    statisticReducer,
    setStatistics
}