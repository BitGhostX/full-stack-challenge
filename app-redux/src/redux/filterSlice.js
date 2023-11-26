import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'Filter by Filename',
  reducers: {
    changeFilter: (state, action) => {
      return action.payload
    }
  }
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer
