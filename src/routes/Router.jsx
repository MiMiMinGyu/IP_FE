import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Intro from '../pages/boards/Intro';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/boards/intro" element={<Intro />} />
            </Route>
        </Routes>
    );
}

export default Router;