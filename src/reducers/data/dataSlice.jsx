import { createSlice } from '@reduxjs/toolkit'


const initialState = []

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {


    setData(state, action) {
      return action.payload
    },
    
  },
})


export const { setData} = dataSlice.actions
export default dataSlice.reducer