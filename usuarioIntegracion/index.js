const axios = require('./node_modules/node_modules/axios/index.cts');

const usuarioIntegracion = () => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error para mostrar usuarios:', error);
    });
};
usuarioIntegracion();
