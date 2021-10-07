import { createSlice } from '@reduxjs/toolkit'

export const mealsSlice = createSlice({
  name: 'counter',
  initialState: {
    kids : 1,
    value: [  
     
    ],
   
  },
  reducers: {
    addMeal: (state, action) => {
      state.value = action.payload
    },
    removeMeal: (state, action) => {
      state.value = action.payload
    },
    kidsAmount: (state, action) => {
      state.kids = action.payload
      console.log(state.kids)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMeal, removeMeal, kidsAmount } = mealsSlice.actions

export default mealsSlice.reducer