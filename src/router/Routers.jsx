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
import OTP from '../pages/OTP';
import NewPassword from '../pages/NewPassword';
import EventDeatils from '../components/Common/EventDeatils';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forget_password" element={<ForgetPasswordPage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeTab />} />
          <Route path="event" element={<EventsTab />} />
          <Route path="attendance" element={<AttendanceTab />} />
          <Route path="notice" element={<NoticeTab />} />
          <Route path="roles" element={<RolesTab />} />
          <Route path="eventdetails" element={<EventDeatils />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Routers