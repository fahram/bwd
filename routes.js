const {addBookHandler} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Selamat Datang Di API Fahram.Dev';
    },
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan';
    },
  },
];

module.exports = routes;
