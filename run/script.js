function run(){
    var u = window.location.href.split("?").pop();
    const content_var = decodeURI(u);
    console.log(content_var);
    const blob= new Blob([content_var], {
        type:'text/html'});
    const fileurl = URL.createObjectURL(blob);
    window.location.href = fileurl
}
// Import required libraries
const express = require('express');
const bodyParser = require('body-parser'); // Middleware for parsing request body
const axios = require('axios'); // Axios for making HTTP requests

// Create an Express app
const app = express();
const port = 3000; // Specify the port for the server to listen on

// Middleware for parsing request body
app.use(bodyParser.json());

// Define an endpoint to handle POST requests
app.post('/api/endpoint', (req, res) => {
  // Access the request payload using req.body
  const message = req.body;

  // Process the data as needed
  console.log('Message received:', message);

  // Send a response back to the client
  res.status(200).json({ success: true, message: 'Message received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});