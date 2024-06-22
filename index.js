const express = require('express');
const app = express();
const port = 3000;
const os = require('os');

let serverStatus = true;

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (let iface in interfaces) {
    for (let alias of interfaces[iface]) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return '127.0.0.1';
}

app.get('/', (req, res) => {
  const localIP = getLocalIPAddress();
  res.send(`Hello world. Local IP: ${localIP}`);
});

app.get('/check-health', (req, res) => {
  if (serverStatus) {
    res.status(200).send('Server is good');
  } else {
    res.status(500).send('Server is down');
  }
});

app.get('/shutdown', (req, res) => {
  serverStatus = false;
  res.send('Server status changed to down');
});

app.get('/start', (req, res) => {
  serverStatus = true;
  res.send('Server status changed to good');
});

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(`Your lucky number is ${randomNumber}`);
});

app.listen(port, () => {
  console.log(`Server is running`);
});