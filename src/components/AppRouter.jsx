import React from "react";
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts"; 
import Error from "../pages/Error";
import About from "../pages/About";
import PostIdPages from "../pages/PostIdPages";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="" element={<About/>}/>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route exact path="/posts/:id" element={<PostIdPages/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
} 

export default AppRouter;