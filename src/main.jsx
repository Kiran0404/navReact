import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './navbar/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <App />
  </StrictMode>,
)
