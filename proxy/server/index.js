const express = require('express');
const axios = require('axios');
const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();
const PORT = 3003;
app.use(express.static(PUBLIC_DIR));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/listings', (req, res) => {
  axios.get(`http://ec2-34-208-9-166.us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({ data }) => {
      res.send(data);
    })
    .catch(err => console.log(err));
});
app.get('/api/reviews/:listing_id', (req, res) => {
  axios.get(`http://ec2-18-237-166-117.us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({ data }) => {
      console.log('reviews data', data);
      res.send(data);
    })
    .catch(err => console.log(err));
});
app.get('/api/images/:listing_id', (req, res) => {
  axios.get(`http://ec2-18-217-241-92.us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({ data }) => {
      console.log('images data', data);
      res.send(data);
    })
    .catch(err => console.log(err));
});
app.get('/availability/:listing_id', (req, res) => {
  axios.get(`http://ec2-3-137-149-101-us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({ data }) => {
      console.log('availability data', data);
      res.send(data);
    })
    .catch(err => console.log(err));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', PORT);
});