// Load the express web framework module
const express = require('express');
// Load our seneca module
const seneca = require('./seneca');

// Create an instance of express
const app = express();

// Use port 3000 unless one is set in the env
const port = process.env.PORT || 3000;

// Define some HTTP routes (e.g., URLs) users can access on our server

// GET http://localhost:3000/
app.get('/', (req, res) => {
    res.send('My Server is working!');
});

// GET http://localhost:3000/validate/someone@myseneca.ca
app.get('/validate/:email', (req, res) => {
    const email = req.params.email;

  // Return a JSON formatted response indicating that the given
  // email address is valid or invalid.
    res.json({
        email,
        valid: seneca.isValidEmail(email),
    });
});

// GET http://localhost:3000/format/someone
app.get('/format/:name', (req, res) => {
    const name = req.params.name;

  // Return a JSON formatted response with the given name
  // formatted as a valid email address.
    res.json({
        name,
        email: seneca.formatSenecaEmail(name),
    });
});

// GET http://localhost:3000/healthcheck
app.get('/healthcheck', (req, res) => {
    const upt = process.uptime();

    // Return a JSON formatted response with uptime of the server
    res.json({
        uptime: upt,
    });
});

// Start our web server on port 3000
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
