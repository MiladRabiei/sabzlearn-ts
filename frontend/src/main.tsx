import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/reset.css'
import './styles/fonts.css'
import './styles/variables.css'
import './styles/helpers.css'
import './styles/defaults.css'
import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query'

 const client=new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    </QueryClientProvider>

  </StrictMode>,
)
