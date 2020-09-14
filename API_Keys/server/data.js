//Our in-memory database

const users = [
  {
    _id: 1587912698986,
    api_key: 'an0qrr5i9u0q4km27hv2hue3ywx3uu',
    email: 'nelan@enjoysccode.org',
    host: 'http://100.115.92.2:8080',
    usage: [{ date: '2020-09-12', count: 17 }],
  },
];

const favProg = [
  { _id: 1, name: 'C' },
  { _id: 2, name: 'Pintos' },
  { _id: 3, name: 'Machine Code' },
  { _id: 4, name: 'Pascal' },
  { _id: 5, name: 'Assembly' },
];

module.exports = { users, favProg };
