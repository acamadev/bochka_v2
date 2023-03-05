const express = require('express');
const app = express();

const IP_ADDRESS = '37.151.207.228'; // replace with your desired IP address
const PORT = 80; // replace with your desired port number

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server running at http://${IP_ADDRESS}:${PORT}/`);
});