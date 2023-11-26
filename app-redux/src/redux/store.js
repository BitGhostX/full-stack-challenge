import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './loadingSlice'
import dataReducer from './dataSlice'
import listReducer from './listSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    data: dataReducer,
    list: listReducer,
    filter: filterReducer,
  }
})