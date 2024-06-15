import './App.css';
import './assets/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import HomePage from './components/admin/HomePage';
import ManageDoctor from './components/admin/ManageDoctor';
import ManageUser from './components/admin/ManageUser';
import DoctorPage from './components/doctor/doctorpage';
import Homepagedoctor from './components/doctor/homepageDoctor';
import MedicalRecords from './components/doctor/medicalrecords';
import MyAppointment from './components/doctor/myAppointment';
import Appointment from './components/receptionist/Appointment';
import ManagePatient from './components/receptionist/ManagePatient';
import ReceptionHome from './components/receptionist/ReceptioHome';
import AppointmentDoctor from './components/user/AppointmentDoctor';
import Homepageuser from './components/user/HomePageUser';
import MyMedicalRecord from './components/user/MyMedicalRecords';
import UserPage from './components/user/UserPage';
import Home from './frontend/Home';
import Header from './frontend/includes/Header';
import Login from './frontend/Login';
import Registration from './frontend/Registration';

function App() {
  const [cart, setCart] = useState(0);
  let user = JSON.parse(localStorage.getItem('user-info'));
  let userId = user ? user.id : '';

  function userUpdate() {
    user = JSON.parse(localStorage.getItem('user-info'));
    userId = user ? user.id : '';
  }

  useEffect(() => {
    // cartItems();
  }, []);

  async function cartItems() {
    let result = await fetch('http://127.0.0.1:8000/api/cartitem/' + userId);
    result = await result.json();
    setCart(result);
  }

  function emptyCart() {
    setCart(0);
  }

  return (
    <BrowserRouter>
      <Header items={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login userUpdate={userUpdate} cartItem={cartItems} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/AppointmentDoctor" element={<AppointmentDoctor />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/user" element={<Homepageuser />} />
        <Route path="/MyMedicalRecords" element={<MyMedicalRecord />} />
        <Route path="/doctor" element={<MyAppointment />} />
        <Route path="/ReceptionHome" element={<ReceptionHome />} />
        <Route path="/receptionist" element={<ReceptionHome />} />
        <Route path="/ManagePatient" element={<ManagePatient />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/ManageDoctor" element={<ManageDoctor />} />
        <Route path="/ManageUser" element={<ManageUser />} />
        <Route path="Homepage" element={<HomePage />} />
        <Route path="/admin" element={<HomePage />} />
        <Route path="/HomepageDoctor" element={<Homepagedoctor />} />
        <Route path="/doctorpage" element={<DoctorPage />} />
        <Route path="/myAppointment" element={<MyAppointment />} />
        <Route path="/medicalrecords" element={<MedicalRecords />} />
        <Route path="/doctorpage" element={<DoctorPage />} />
        <Route path="/myAppointment" element={<MyAppointment />} />
        <Route path="/medicalrecords" element={<MedicalRecords />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
