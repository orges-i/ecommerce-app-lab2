import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider> {/*u thirr context qe tua jap variablat krejt aplikacionit*/}  
        <App /> 
  </ShopContextProvider>
  </BrowserRouter>,
)
