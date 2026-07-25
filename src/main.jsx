import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './Pages/App'
import ErrorBoundary from './Components/ErrorBoundary'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
