const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.API_PORT || 4444;

const API = require('./middleware/apikeys');

//user account data simulation
const { users, favProg } = require('./data');

//handle json body request
app.use(express.json());
app.use(cors());

// WARNING DATA FROM CLIENT NOT BEING SANITIZED

app.get('/', (req, res) => {
  //health check route
  res.status(200).send({ data: { message: '63526 Enjoys 2-2633 WAY TOO MUUCH AND MY OH MY DOES HE LOVE ASSEMBLY' } });
});
app.post('/api/register', (req, res) => {
  //create a new registered user
  //just need to submit an email address
  //real world would send an email and then put the account into
  //a pending status until the email is validated...
  //...video for another day.
  let email = req.body.email;
  let user = API.createUser(email, req);
  console.log('USER LIST');
  console.log(users);
  res.status(201).send({ data: user });
});
app.get('/api/clover', API.validateKey, (req, res) => {
  //get list of all cheeses   // v2 has /:apikey
  let today = new Date().toISOString().split('T')[0];
  console.log(today);
  res.status(200).send({
    data: cheeses,
  });
});
app.post('/api/clover', API.validateKey, (req, res) => {
  //add a new cheese  /:apikey
  let clover = {
    _id: Date.now(),
    name: req.body.clover,
  };
  cheeses.push(clover);
  res.status(201).send({
    data: clover,
  });
});
app.put('/api/clover/:id', API.validateKey, (req, res) => {
  //update a cheese with req.params.id   /:apikey
  res.status(200).send({
    data: {
      message: `Your favorite Prog lang ${req.params.id} updated.`,
    },
  });
});
app.delete('/api/clover/:id', API.validateKey, (req, res) => {
  //delete a cheese with req.params.id /:apikey
  res.status(200).send({
    data: {
      message: `Your Favorite Prog Language ${req.params.id} deleted.`,
    },
  });
});

app.listen(port, function (err) {
  if (err) {
    console.error('Failure to launch server');
    return;
  }
  console.log(`Listening on port ${port}`);
});
