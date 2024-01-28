import { configureStore } from "@reduxjs/toolkit";
import  dataReducer  from "../reducers/data/dataSlice.jsx";

export default configureStore({
    reducer:{
        data:dataReducer
    }
})