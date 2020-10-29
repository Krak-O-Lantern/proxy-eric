const express = require('express');
const axios = require('axios');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
const PORT = 3003;

app.use('/listings/:listing_id', express.static(PUBLIC_DIR));
app.use(express.static(PUBLIC_DIR));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/images/:listing_id', (req, res) => {
  axios.get(`http://44.232.63.9:80${req.url}`)
    .then(({ data }) => {
      res.send(data);
    })
    .catch(err => console.log(err));
});
app.get('/api/reviews/:listing_id', (req, res) => {
  axios.get(`http://54.69.92.234:80${req.url}`)
    .then(({ data }) => {
      //console.log('reviews data', data);
      res.send(data);
    })
    .catch(err => console.log(err));
});
app.get('/api/listings/:listing_id', (req, res) => {
  axios.get(`http://3.138.112.1:80${req.url}`)
    .then(({ data }) => {
      //console.log('images data', data);
      res.send(data);
    })
    .catch(err => console.log(err));
});
app.get('/api/availability/:listing_id', (req, res) => {
  axios.get(`http://44.238.144.198:80${req.url}`)
    .then(({ data }) => {
      //console.log('availability data', data);
      res.send(data);
    })
    .catch(err => console.log(err));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', PORT);
});