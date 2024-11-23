import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import Layout from '../components/Layout/Layout';
import HomeTab from '../components/Tabs/HomeTab';    
import EventsTab from '../components/Tabs/EventsTab';
import AttendanceTab from '../components/Tabs/AttendanceTab';        
import NoticeTab from '../components/Tabs/NoticeTab';
import RolesTab from '../components/Tabs/RolesTab';     

const Routers = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomeTab />} />
        <Route path="events" element={<EventsTab />} />
        <Route path="attendance" element={<AttendanceTab />} />
        <Route path="notice" element={<NoticeTab />} />
        <Route path="roles" element={<RolesTab />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default Routers