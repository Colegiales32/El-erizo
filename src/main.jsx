import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErizoProvider } from './context/erizoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErizoProvider>
    <App/>
    </ErizoProvider>
  </React.StrictMode>,
)
