// import express from 'express; ES Modules'
const express = require('express'); //CommonJS modules, and it is equivalent to the line above.

const server = express();  // creates a server

// request/route handlers

// handles GET requests to / on loclhost:8000
server.get('/', (req, res) => {
    res.send('Hello Node 23!')
});

// listen for request in a particular port on localhost
const port = 8000; // localhost:8000
server.listen(port, () => console.log('\n=== API on port 8000 ===\n'));


//const express = require('express');

// const users = require('./data/hubs-model')

// const server= express();

// server.get('/', (req, res) => {
//   res.send('Hello World');
// });

// server.get('/hobbits', (req, res) => {
//   const hobbits = [
//     {
//       id: 1,
//       name: 'Samwise Gamgee',
//     },
//     {
//       id: 2,
//       name: 'Frodo Baggins',
//     },
//   ]
//   res.status(200).json(hobbits)
// });

// server.get('/users', (req, res) => {
//   users.find()
//   .then((users) => {
//     res.status(200).json(users)
//   })
//   .catch((error) => {
//     res.status(500).json({message: "unable to get users"})
//   })
// });

// server.listen(8000, () => {
//   console.log('API running on port 8000')
// });