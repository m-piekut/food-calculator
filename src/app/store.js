import { configureStore } from '@reduxjs/toolkit'
import mealsSlice from '../features/meals/mealsSlice'

export default configureStore({
  reducer: {
    meals: mealsSlice,
  },
})