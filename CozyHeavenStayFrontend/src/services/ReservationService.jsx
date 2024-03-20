import axios from 'axios';

const BASE_REST_API_URL = "http://localhost:8080/api";

class ReservationService {
  saveReservation(reservation) {
    return axios.post(`${BASE_REST_API_URL}/reservations/save`, reservation);
  }

  getReservationById(id) {
    return axios.get(`${BASE_REST_API_URL}/reservations/getbyid/${id}`);
  }

  getAllReservations() {
    return axios.get(`${BASE_REST_API_URL}/reservations/getall`);
  }

  updateReservation(id, reservation) {
    return axios.put(`${BASE_REST_API_URL}/reservations/update/${id}`, reservation);
  }

  deleteReservation(id) {
    return axios.delete(`${BASE_REST_API_URL}/reservations/delete/${id}`);
  }

  getReservationsByUser(userId) {
    return axios.get(`${BASE_REST_API_URL}/reservations/getreservationbyuser/${userId}`);
  }

  // Add other methods as needed
}

export default new ReservationService();
