import { configureStore } from "@reduxjs/toolkit";
import  dataReducer  from "../reducers/data/dataSlice.jsx";
import  modalReducer  from "../reducers/modal/modalSlice.jsx";
import  camposReducer  from "../reducers/campos/camposSlice.jsx";

export default configureStore({
    reducer:{
        data:dataReducer,
        modal:modalReducer,
        campos:camposReducer
    }
})