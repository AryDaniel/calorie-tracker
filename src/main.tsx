import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ActivityPropvider } from './context/ActivityContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActivityPropvider>
      <App />
    </ActivityPropvider>
  </StrictMode>,
)
