import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    modalCreate:false,
    modalUpdate:false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {


    setModalCreate(state, action) {
        console.log(action.payload)
    state.modalCreate=action.payload
      return state
    },
    setModalUpdate(state, action) {
    state.modalUpdate=action.payload
    return state
    },
    
  },
})


export const {setModalCreate, setModalUpdate} = modalSlice.actions
export default modalSlice.reducer