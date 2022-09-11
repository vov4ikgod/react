import React from "react";
import './css/app.css';
import About from "./pages/About";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route path="/about" element={<About/>}/>
        </BrowserRouter>
    );
}

export default App;