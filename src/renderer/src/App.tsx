import AboutView from '@renderer/views/AboutView'
import GraderView from '@renderer/views/GraderView'
import SettingsView from '@renderer/views/SettingsView'
import HomeView from '@renderer/views/HomeView'
import NoMatchView from '@renderer/views/NoMatchView'
import { Routes, Route } from 'react-router-dom'
import ViewSelector from '@renderer/components/ViewSelector'
import usePreferredTheme from '@renderer/hooks/usePreferredTheme'

function App(): JSX.Element {
    usePreferredTheme()

    return (
        <div id="app">
            <ViewSelector />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/home" element={<HomeView />} />
                <Route path="/grader" element={<GraderView />} />
                <Route path="/settings" element={<SettingsView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="*" element={<NoMatchView />} />
            </Routes>
        </div>
    )
}

export default App
