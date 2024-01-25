import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

function ViewSelector(): JSX.Element {
    const location = useLocation()
    const [active, setActive] = useState<string>('home')

    useEffect(() => {
        const currentPath = location.pathname
        // Paths directly correspond to the view IDs, except home (set as default)
        const activeView = currentPath.substring(1) || 'home'
        setActive(activeView)
    }, [location])

    const views = [
        { id: 'home', icon: 'fa-home', title: 'Home', link: '/' },
        { id: 'editor', icon: 'fa-pen', title: 'Editor', link: '/editor' },
        { id: 'settings', icon: 'fa-gear', title: 'Settings', link: '/settings' },
        { id: 'about', icon: 'fa-question', title: 'About', link: '/about' }
    ]

    return (
        <div id="view-selector">
            {views.map((view) => (
                <span
                    key={view.id}
                    id={`${view.id}-selector`}
                    className={active === view.id ? 'active' : ''}
                    title={view.title}
                >
                    <Link to={view.link} onClick={() => setActive(view.id)}>
                        <i className={`fa ${view.icon}`}></i>
                    </Link>
                </span>
            ))}
        </div>
    )
}

export default ViewSelector
