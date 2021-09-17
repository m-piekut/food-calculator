import { createSlice } from '@reduxjs/toolkit'

export const mealsSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [
      //  {
      //     name: "Jabłko pieczone z migdałami",
      //     "Jabłko":{
      //       carbohydrates: 12.1,
      //       fat: 0.4,
      //       kcal: 50,
      //       measure: 'g',
      //       name: 'Jabłko',
      //       protein: 0.4,
      //       quantity: 100
      //     },
      //     "Migdały":{
      //       carbohydrates: 0.41,
      //       fat: 1.04,
      //       kcal: 11.95,
      //       measure: 'g',
      //       name: 'Migdały',
      //       protein: 0.4,
      //       quantity: 2
      //     },}
      // ,
      // {
      //   name: 'dupa',
      //     "Jabłko":{
      //       carbohydrates: 12.1,
      //       fat: 0.4,
      //       kcal: 50,
      //       measure: 'g',
      //       name: 'Jabłko',
      //       protein: 0.4,
      //       quantity: 100
      //     },
      //     "Migdały":{
      //       carbohydrates: 0.41,
      //       fat: 1.04,
      //       kcal: 11.95,
      //       measure: 'g',
      //       name: 'Migdały',
      //       protein: 0.4,
      //       quantity: 2
      //     },}
      
    ],
   
  },
  reducers: {
    addMeal: (state, action) => {
      state.value = action.payload
      console.log(action.payload)
    },
    removeMeal: (state, action) => {
      state.value = action.payload
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMeal, removeMeal } = mealsSlice.actions

export default mealsSlice.reducer