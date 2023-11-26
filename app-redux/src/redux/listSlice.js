import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'list',
  initialState: { files: [] },
  reducers: {
    changeList: (state, action) => {
      state.files = action.payload.files
    }
  }
})

export const { changeList } = listSlice.actions
export default listSlice.reducer
