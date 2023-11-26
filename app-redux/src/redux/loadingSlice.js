import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    toggleLoading: (state, action) => {
      return action.payload
    }
  }
})

export const { toggleLoading } = loadingSlice.actions
export default loadingSlice.reducer
