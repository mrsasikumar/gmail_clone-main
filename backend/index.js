const express = require('express');
const connectToMongoDB = require('./config/db');
const routes = require('./routes/route');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Use your defined routes
app.use('/', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  // Connect to the MongoDB database
  try {
    await connectToMongoDB();
  } catch (error) {
    console.error('Error in the main application:', error);
  }
});
