const express = require('express');
const app = express();
const port = 3000;

let serverStatus = true;

app.get('/', (req, res) => {
  res.send('Hello world');
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