import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Intro from '../pages/boards/Intro';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/boards/intro" element={<Intro />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
        </Routes>
    );
}

export default Router;