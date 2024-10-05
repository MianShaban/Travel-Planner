// import React from 'react'

// const Payment = () => {
//     const express = require('express');
//     const bodyParser = require('body-parser');
//     const cors = require('cors');
    
//     const app = express();
    
//     // Middleware
//     app.use(bodyParser.json());
//     app.use(cors());
    
//     // Payment processing route
//     app.post('/api/payment', (req, res) => {
//       const { payment_method, card_number, expiry, cvv } = req.body;
    
//       // Simulate payment processing logic
//       if (payment_method === 'credit_card') {
//         if (!card_number || !expiry || !cvv) {
//           return res.status(400).json({ message: 'Missing credit card details' });
//         }
//         // Here, you could integrate with a payment gateway like Stripe or PayPal
//         return res.json({ message: 'Credit card payment processed' });
//       }
    
//       // Handle other payment methods
//       if (payment_method === 'paypal') {
//         return res.json({ message: 'PayPal payment processed' });
//       }
    
//       if (payment_method === 'bank_transfer') {
//         return res.json({ message: 'Bank transfer processed' });
//       }
    
//       res.status(400).json({ message: 'Invalid payment method' });
//     });
    
//     // Start server
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
    
// }

// export default Payment

