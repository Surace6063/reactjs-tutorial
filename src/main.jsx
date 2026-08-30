import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { QuantityProvider } from './context/QuantityContext.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <QuantityProvider>
           <App />
        </QuantityProvider>
      </QueryClientProvider>
    </BrowserRouter>
)
