import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Banner from './components/Banner'
import Body from './components/Body/Body'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Body />
    </React.StrictMode>,
)
