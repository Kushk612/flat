import React from 'react'
import ReactDOM from 'react-dom/client'
import Airline from './airline';

function App() {
    return (
        <div>
            <h1>Airline</h1>
            <Airline></Airline>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);