import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='geist-mono-font  mx-auto max-w-screen'>
    <App />
    </div>
  </StrictMode>,
)
