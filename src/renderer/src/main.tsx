import ReactDOM from 'react-dom/client'
import './assets/index.css'
import './assets/App.css'
import App from './App'
import { loader } from '@monaco-editor/react'
import { BrowserRouter } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Provider } from 'react-redux'
import store from './store'

// Load Monaco Editor locally from assets/monaco-editor/min/vs
loader.config({
    paths: {
        vs: '/src/assets/monaco-editor/min/vs'
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
