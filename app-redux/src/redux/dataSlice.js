import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    changeData: (state, action) => {
      return action.payload
    }
  }
})

export const { changeData } = dataSlice.actions
export default dataSlice.reducer
