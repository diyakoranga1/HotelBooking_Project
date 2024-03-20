import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReservationForm = ({ hotelName, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    noOfRooms: 1,
    noOfChildren: 0,
    noOfAdults: 1,
    checkInDate: '',
    checkOutDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Reservation Form for {hotelName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="noOfRooms">
            <Form.Label>Number of Rooms</Form.Label>
            <Form.Control type="number" name="noOfRooms" value={formData.noOfRooms} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="noOfChildren">
            <Form.Label>Number of Children</Form.Label>
            <Form.Control type="number" name="noOfChildren" value={formData.noOfChildren} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="noOfAdults">
            <Form.Label>Number of Adults</Form.Label>
            <Form.Control type="number" name="noOfAdults" value={formData.noOfAdults} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="checkInDate">
            <Form.Label>Check-in Date</Form.Label>
            <Form.Control type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="checkOutDate">
            <Form.Label>Check-out Date</Form.Label>
            <Form.Control type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Confirm Reservation</Button>
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReservationForm;
