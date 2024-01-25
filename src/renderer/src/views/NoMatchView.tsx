import { Link } from "react-router-dom";


function NoMatchView() {

    return (
        <section>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Go Home</Link>
        </section>
    );
}

export default NoMatchView;