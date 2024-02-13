import AboutView from '@renderer/views/AboutView'
import GraderView from '@renderer/views/GraderView'
import SettingsView from '@renderer/views/SettingsView'
import HomeView from '@renderer/views/HomeView'
import NoMatchView from '@renderer/views/NoMatchView'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ViewSelector from '@renderer/components/ViewSelector'
import usePreferredTheme from '@renderer/hooks/usePreferredTheme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/store'
import { useEffect } from 'react'

function App(): JSX.Element {
    usePreferredTheme()
    const navigate = useNavigate()

    const { directoryPath } = useSelector((state: RootState) => state.currentAssignment)

    useEffect(() => {
        if (directoryPath) {
            navigate('/grader')
        }
    }, [])

    return (
        <div id="app">
            <ToastContainer autoClose={3000} />
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
