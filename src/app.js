import React from "react";
import './css/app.css';
import About from "./pages/About";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;