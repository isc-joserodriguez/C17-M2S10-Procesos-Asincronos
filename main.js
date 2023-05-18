/* const miPromesa = new Promise((resolve, reject) => {
  if (5 === 1) {
    resolve('La condición se cumplió');
  } else {
    reject('La condición NO se cumplió');
  }
});

miPromesa
  .then((parametro) => {
    console.log(parametro);
  })
  .catch((error) => {
    console.log(error);
  }); */

const axios = require('axios'); //npm install axios

// Async/Await
async function otraFuncion() {}

/**
 * 1.- Creo una función y le agrego async
 * 2.- Ejecuto mi petición (GET, POST, PUT, DELETE),
 * agregandole un await al inicio
 * 3.- Obtengo la información de la respuesta
 * (Puedo desdetructurar data);
 * 4.- Hago lo que necesite con la información.
 *
 * Opcional.- Encierro todo con un try catch y
 * manejo los errores.
 */

const miFuncion = async () => {
  try {
    const { data } = await axios.get(
      'https://pkeapi.co/api/v2/pokemon/starmie'
    );
    console.log(data);
  } catch (error) {
    /* console.log(error); */
    console.log('Hubo un error, verifica tu código');
  }
};

/*
axios
  .get('https://pokeapi.co/api/v2/pokemon/starmie')
  .then(function (response) {
    pokemonInfo.src = response.data.sprites.front_default;
    pokemonInfo.textContent = response.data.name;
    document.getElementById('pokemon').src = pokemonInfo.src;
    document.getElementById('nombre').textContent = pokemonInfo.textContent;
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log('Hubo un error, verifica tu código');
  })
  .finally(function () {
    // always executed
    console.log('Siempre se ejecuta');
  });
*/

miFuncion();
