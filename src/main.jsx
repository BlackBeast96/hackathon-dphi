import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import DPhi_logo from "./DPhi_logo"
import {Provider} from "react-redux"
import Store from "./Redux/app/store"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <DPhi_logo />
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
