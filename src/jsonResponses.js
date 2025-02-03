const users = {};

const respondJSON = (request, response, status, object) => {
  
};

const getUsers = (request, response) => {

};

const updateUser = (request, response) => {

};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  }

  return respondJSON(request, response, 404, responseJSON);
};

const success = (request, response) => {
    const responseJSON = {
        message: 'This is a successful response.',
        id: 'success',
    }
    
    return respondJSON(request, response, 200, responseJSON);
};

module.exports = {
  getUsers,
  updateUser,
  notFound,
  success,
};