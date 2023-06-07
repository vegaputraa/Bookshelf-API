const {
  addBookHandler,
  getBooksHandler,
  getBooksById,
  editBooks,
  removeBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooks,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: removeBook,
  },
];

module.exports = routes;
