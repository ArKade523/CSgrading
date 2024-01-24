import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { loader } from '@monaco-editor/react'

// Load Monaco Editor locally from assets/monaco-editor/min/vs
loader.config({
    paths: {
        vs: '/src/assets/monaco-editor/min/vs'
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
