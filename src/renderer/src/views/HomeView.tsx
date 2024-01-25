import { Link } from 'react-router-dom'

function HomeView(): JSX.Element {
    return (
        <section>
            <h1>Get Started</h1>
            <ul>
                <li>
                    <Link to="/home/create-new">Create a New Project</Link>
                </li>
                <li>
                    <Link to="/home/open-existing">Open an Existing Project</Link>
                </li>
                <li>
                    <Link to="/home/import-project">Import a Project</Link>
                </li>
            </ul>
        </section>
    )
}

export default HomeView
