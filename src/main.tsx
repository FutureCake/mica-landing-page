import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ColorThemeProvider } from './shared/contexts/color/provider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ColorThemeProvider>
            <App />
        </ColorThemeProvider>
    </StrictMode>,
)
