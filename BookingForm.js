import React, { useState } from 'react';
import { Form, Button, Alert, Col, Row } from 'react-bootstrap';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const [errors, setErrors] = useState({});
  const [bookings, setBookings] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  // Input validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment Method is required';
    
    // If payment method is Credit Card, validate card details
    if (formData.paymentMethod === 'Credit Card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardExpiry) newErrors.cardExpiry = 'Expiry date is required';
      if (!formData.cardCVV) newErrors.cardCVV = 'CVV is required';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, add booking to the list
    setBookings([...bookings, formData]);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      paymentMethod: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVV: '',
    });

    // Clear error messages
    setErrors({});

    // Show success message
    setSuccessMessage('Booking successful!');

    // Hide the success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id='bookingdashboard' className="container p-5 mt-5">
      <h2>Booking Form</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date of Booking</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            isInvalid={!!errors.date}
          />
          <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPaymentMethod">
          <Form.Label>Payment Method</Form.Label>
          <Form.Control
            as="select"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            isInvalid={!!errors.paymentMethod}
          >
            <option value="">Choose...</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash on Arrival">Cash on Arrival</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">{errors.paymentMethod}</Form.Control.Feedback>
        </Form.Group>

        {/* Card details only if payment method is Credit Card */}
        {formData.paymentMethod === 'Credit Card' && (
          <>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                isInvalid={!!errors.cardNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="formCardExpiry">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    isInvalid={!!errors.cardExpiry}
                  />
                  <Form.Control.Feedback type="invalid">{errors.cardExpiry}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formCardCVV">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter CVV"
                    name="cardCVV"
                    value={formData.cardCVV}
                    onChange={handleChange}
                    isInvalid={!!errors.cardCVV}
                  />
                  <Form.Control.Feedback type="invalid">{errors.cardCVV}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        <Button variant="primary" type="submit" className='mt-3 w-50' style={{backgroundColor:"#C3360C"}}>
          Book Now
        </Button>
      </Form>

      {/* Show bookings */}
      <div id='booking' className="mt-5">
        <h3>Your Bookings</h3>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <div>
            {bookings.map((booking, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{booking.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {booking.email}<br />
                    <strong>Phone:</strong> {booking.phone}<br />
                    <strong>Date of Booking:</strong> {booking.date}<br />
                    <strong>Payment Method:</strong> {booking.paymentMethod}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
