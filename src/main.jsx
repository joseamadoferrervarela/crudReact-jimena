import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import {App} from './app.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

//Redux
import { Provider } from "react-redux";
import  store  from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
  
)
