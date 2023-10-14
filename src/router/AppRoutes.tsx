import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HOMELOGGED, LOGIN, REGISTER } from '../core/app-urls';
import { ClassroomProvider, TeacherProvider, UserProvider } from '../data/contexts';
import { ApiProvider } from '../data/services/api_provider';
import HomeLogged from '../pages/HomeLogged';
import Login from "../pages/Login";
import Register from '../pages/Register';

export default function AppRoutes() {
    return (
        <Router>
            <ApiProvider>
                <UserProvider>
                    <ClassroomProvider>
                        <TeacherProvider>
                            <Routes>
                                <Route path={LOGIN} element={<Login />}> </Route>
                                <Route path={REGISTER} element={<Register />}></Route>
                                <Route path={HOMELOGGED} element={<HomeLogged />}></Route>
                            </Routes>
                        </TeacherProvider>
                    </ClassroomProvider>
                </UserProvider>
            </ApiProvider>
        </Router>
    );
}