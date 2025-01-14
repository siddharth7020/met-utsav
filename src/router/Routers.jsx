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
import EventDeatils from '../components/Common/EventDetails';
import TalentShow from '../pages/TalentShow';
import Report from '../pages/Report';
import UserEventsTable from '../pages/UserEvents';
import ScrollToTop from '../components/Common/ScrollToTop';
import TotalRegistrationReport from '../pages/TotalRegistrationReport';
import CreativityExihibition from '../pages/CreativityExihibition';
import Competition from '../pages/Competition';
import MyRegistrations from '../pages/MyRegistrations';

const Routers = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/forget_password" element={<ForgetPasswordPage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeTab />} />
          <Route path='report' element={<Report />} />
          <Route path="events" element={<EventsTab />} />
          <Route path="attendance" element={<AttendanceTab />} />
          <Route path="notice" element={<NoticeTab />} />
          <Route path="roles" element={<RolesTab />} />
          <Route path="eventsdeatils" element={<EventDeatils />} />
          <Route path="talentshow" element={<TalentShow />} />
          <Route path="creativityexhibition" element={<CreativityExihibition />} />
          <Route path="competition" element={<Competition />} />
          <Route path="registeredparticipants" element={<UserEventsTable />} />
          <Route path="totalregistrationsreport" element={<TotalRegistrationReport />} />
          <Route path="myregistrations" element={<MyRegistrations />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Routers