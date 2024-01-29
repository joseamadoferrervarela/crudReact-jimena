import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id:0,
    imagen:"",
    nombre:"",
    descripcion:""

}

const camposSlice = createSlice({
  name: 'campos',
  initialState: initialState,
  reducers: {


    setCampos(state, action) {
      return action.payload
    },
    
  },
})


export const { setCampos} = camposSlice.actions
export default camposSlice.reducer