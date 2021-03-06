require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const fetch = require('node-fetch');


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/loaderio-48170565c38db7751663fd0fe4a22486', (req, res) => {
  console.log("received: ", res)
  res.sendFile(__dirname + '/loaderio-48170565c38db7751663fd0fe4a22486.txt');
});

// // AVH
// app.get('/api/reviews/:productId', (req, res) => {
//   fetch(`http://ec2-54-193-70-8.us-west-1.compute.amazonaws.com:80/reviews/${req.params.productId}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then(json => res.send(json));
// });

// // AVH
// app.get('/api/helpful/:productId', (req, res) => {
//   fetch(`http://ec2-54-193-70-8.us-west-1.compute.amazonaws.com:80/helpful/${req.params.productId}`)
//     .then((res) => {
//       // do nothing
//     })
//     .then(json => res.status(202).send());
// });

// // Matt
// app.get('/api/checkout/:productId', (req, res) => {
//   fetch(`http://ec2-18-224-5-50.us-east-2.compute.amazonaws.com:80/checkout/${req.params.productId}`)
//     .then((res) => {
//       return res.json();
//     })
//     .then(json => res.send(json));
// });

// Sonia
// http://ec2-13-57-246-165.us-west-1.compute.amazonaws.com:3036/?id=1
//uncomment from here
app.get('/product', (req, res) => { //will be sent to my component 
    fetch(`http://ec2-13-57-235-80.us-west-1.compute.amazonaws.com/product/?id=${req.query.id}`) //will proxy to my component server 
      .then((res) => {
        return res.json();
      })
      .then(json => res.send(JSON.stringify(json)));
  }) //to here
//})


// Sonia
//http://ec2-13-57-246-165.us-west-1.compute.amazonaws.com:3036/?id=1
// app.get('/product', (req, res) => { //will be sent to my component 
//      fetch(`http://localhost:4043/product/?id=${req.query.id}`)
//   .then((res) => {
//     return res.json();
//   })
//   .then(json => res.send(JSON.stringify(json)));
//   })


// Michelle
// http://ec2-13-57-32-246.us-west-1.compute.amazonaws.com/?id=2
app.get('/get', (req, res) => {
  fetch(`http://ec2-54-153-66-98.us-west-1.compute.amazonaws.com:9001/get/?id=${req.query.id}`)
    .then(response => {
      return response.json()
    }).then(json => {
      res.send(json)
    });
});

app.listen(port, () => {
  console.log(`AVH proxy server listening on port ${port}...`);
});

