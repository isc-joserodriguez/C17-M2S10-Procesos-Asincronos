let pokemonInfo = {};
axios
  .get('https://pokeapi.co/api/v2/pokemon/ditto')
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
// Funciones flecha
/**
 * 
 * 
 * 
 * function saludo (msg) {
        console.log(msg);
    };
 */
/* const objeto = {
  suma: (a, b) => {
    return a + b;
  },
};

console.log(objeto.suma(1, 2)); */

//saludo('Hola');

// setInterval

/* const interval = setInterval(() => {
  console.log('Hola');
  clearInterval(interval);
}, 5000);

// setTimeout
const timer = setTimeout(() => {
  console.log('Hola');
}, 5000);

clearTimeout(timer);
 */
let fechaDato = {};
const saludo = () => {
  console.log('Hola', fechaDato.date.nuevo);
};

const obtenerFecha = (saludo, despedida) => {
  setTimeout(() => {
    console.log('EJECUTA FECHA');
    fechaDato = { date: { nuevo: new Date() } };
    saludo();
    despedida();
  }, 5000);
};

const despedida = () => {
  console.log('adiós', fechaDato);
};

// Asincronísmo de JS
//Callbacks
//obtenerFecha(saludo, despedida);

// Promesas

// !Siempre resolve & reject van a ser funciones
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const aleatorio = Math.random();
    if (aleatorio > 0.5) {
      resolve(aleatorio);
    } else {
      reject(aleatorio);
    }
  }, 5000);
});

promesa
  .then((num) => {
    console.log('El numero es mayor a .5', num);
  })
  .catch((num) => {
    console.log('El numero es menor a .5', num);
  })
  .finally(() => {
    console.log('Siempre se ejecuta');
  });

console.log('Termina script');
