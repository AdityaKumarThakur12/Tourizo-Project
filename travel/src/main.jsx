import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react"
import AuthProvider from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </AuthProvider>
   
    
  </StrictMode>,
)
