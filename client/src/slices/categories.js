import { createSlice } from '@reduxjs/toolkit'


const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: []
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload.categories
        }
    }
})

const { setCategories } = categorySlice.actions;
const categoryReducer = categorySlice.reducer

export {
    categoryReducer,
    setCategories
}