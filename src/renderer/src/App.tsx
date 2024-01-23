import icons from './assets/icons.svg'

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>CS Grading</h1>
            <svg>
                <use xlinkHref={`${icons}#icon-checkmark`}></use>
            </svg>
        </div>
    )
}

export default App
