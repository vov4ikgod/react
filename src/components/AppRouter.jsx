import React, { useContext } from "react";
import {Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import AuthContext from "./UI/context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(useContext(AuthContext));
    return (
        isAuth 
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route element={route.element} path={route.path}/>
                )}
                <Route path="*" element={<Error/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route element={route.element} path={route.path}/>
                )}
                <Route path="*" element={<Login/>}/>
            </Routes>
    )
} 

export default AppRouter;