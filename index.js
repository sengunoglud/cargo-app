const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importing routes
const shipmentRoutes = require('./routes/shipment');

// Setting up middleware
app.use(express.json());

// Setting up routes
app.use('/shipments', shipmentRoutes);

// Starting server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
