import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import ForgetPassword from '../pages/login/forgetpassword';

const Routers = () => {
    return (
        <Router>
            <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
            </Routes>
        </Router>
    )
}

export default Routers;