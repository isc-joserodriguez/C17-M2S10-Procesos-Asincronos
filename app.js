// Funciones flecha
/**
 * 
 * 
 * 
 * function saludo (msg) {
        console.log(msg);
    };
 */
const objeto = {
  suma: (a, b) => {
    return a + b;
  },
};

console.log(objeto.suma(1, 2));

const saludo = (msg) => {
  console.log(msg);
};

//saludo('Hola');

// setInterval

const interval = setInterval(() => {
  console.log('Hola');
  clearInterval(interval);
}, 5000);

// setTimeout
const timer = setTimeout(() => {
  console.log('Hola');
}, 5000);

clearTimeout(timer);
