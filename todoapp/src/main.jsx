import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cont from './component/content.jsx'
import Header from './component/Header.jsx'

import TodoApp from './component/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
<Header/>
    <Cont/>
  </React.StrictMode>,
)
