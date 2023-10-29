import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HOMELOGGED, LOGIN, REGISTER } from '../core/app-urls';
import { ClassroomProvider, LockProvider, TeacherProvider, UserProvider } from '../data/contexts';
import { ClassProvider } from '../data/contexts/class';
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
                            <ClassProvider>
                                <LockProvider>
                                    <Routes>
                                        <Route path={LOGIN} element={<Login />}> </Route>
                                        <Route path={REGISTER} element={<Register />}></Route>
                                        <Route path={HOMELOGGED} element={<HomeLogged />}></Route>
                                    </Routes>
                                </LockProvider>
                            </ClassProvider>
                        </TeacherProvider>
                    </ClassroomProvider>
                </UserProvider>
            </ApiProvider>
        </Router>
    );
}