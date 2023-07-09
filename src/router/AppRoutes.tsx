import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HOMELOGGED, LOGIN, REGISTER } from '../core/app-urls';
import Login from '../pages/Login';
import Register from '../pages/Register';
import HomeLogged from '../pages/HomeLogged';

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path={LOGIN} element={<Login/>}> </Route>
                <Route path={REGISTER} element={<Register/>}></Route>
                <Route path={HOMELOGGED} element={<HomeLogged/>}></Route>
            </Routes>
        </Router>
    );
}