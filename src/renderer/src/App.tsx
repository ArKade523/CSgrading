// import icons from './assets/icons.svg'
import AboutView from './views/AboutView'
import EditorView from './views/EditorView'
import SettingsView from './views/SettingsView'
import HomeView from './views/HomeView'
import MonacoEditor from './components/MonacoEditor'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/editor" element={<EditorView />} />
                <Route path="/settings" element={<SettingsView />} />
                <Route path="/about" element={<AboutView />} />
            </Routes>
        </div>
    )
}

export default App
