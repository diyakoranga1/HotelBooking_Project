import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import { Error } from "./components/Error";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import BookRoom from "./components/BookRoom";
import OwnerDashboard from "./components/OwnerDashboard";
import AddHotel from "./components/AddHotel";
import ListUser from "./components/ListUser";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import EditProfile from "./components/EditProfile";
import ListHotelByOwner from "./components/ListHotelByOwner";
import HotelDetail from "./components/HotelDetail";
import AdminDashboard from "./components/AdminDashboard";
import AddOwner from "./components/AddOwner";
import AddAdmin from "./components/AddAdmin";
import EditOwnerProfile from "./components/EditOwnerProfile";
import ListOwner from "./components/ListOwner";
import ListAdmin from "./components/ListAdmin";
import AllHotel from "./components/AllHotel";
import AddRoom from "./components/AddRoom";
import ReservationForm from "./components/ReservationForm";
import PasswordResetForm from "./components/PasswordResetForm";
import AllHotelWithBooking from "./components/AllHotelWithBooking";
import UserReservations from "./components/UserReservations";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reset" element={<PasswordResetForm />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/roomadd" element={<AddRoom />} />
            <Route path="/reservation-form" element={<ReservationForm />} />
            <Route path="/update/:id" element={<AddUser />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/book-room" element={<BookRoom />} />
            <Route path="/owner-dashboard" element={<OwnerDashboard />} />
            <Route path="/addhotel" element={<AddHotel />} />
            <Route path="/listallusers" element={<ListUser />} />
            <Route path="/editownerprofile" element={<EditOwnerProfile />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/updatehotel/:id" element={<AddHotel />} />
            <Route path="/updateuser/:id" element={<AddUser />} />
            <Route path="/listallowners" element={<ListOwner />} />
            <Route path="/listalladmins" element={<ListAdmin />} />
            <Route path="/hotel/:id" element={<HotelDetail />} />
            <Route path="/hotel/:id/add-room" element={<AddRoom />} />
            <Route path="/updateroom/:id" element={<AddRoom />} />
            <Route path="/addowner" element={<AddOwner />} />
            <Route path="/addadmin" element={<AddAdmin />} />
            <Route path="/allhotels" element={<AllHotel />} />
            <Route path="/myhotels" element={<ListHotelByOwner />} />
            <Route path="/book-hotel" element={<AllHotelWithBooking />} />
            <Route path="/book-room/:id" element={<BookRoom />} />
            <Route path="/view-reservations" element={<UserReservations />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
