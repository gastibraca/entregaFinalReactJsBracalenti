import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import card from './components/cards.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <ItemListContainer saludo = "Apocalipsis? Apocalisto!" />
    <App />
    </React.StrictMode>,
)
