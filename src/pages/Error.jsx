import React from "react"; 

const Error = () => { 
    const Arr404 = ['(*_*)', '(o_o)', '(>_<)', '(≥o≤)', ':(', '(._.)', '{•_•}'];

    return (
        <div className="error-page">
            <h1 style={{fontSize: 200}}>{Arr404[Math.floor(Math.random() * Arr404.length)]}</h1>
        </div>
    )
} 
export default Error;