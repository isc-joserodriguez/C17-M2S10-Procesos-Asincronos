// Funciones flecha
/**
 * 
 * 
 * 
 * function saludo (msg) {
        console.log(msg);
    };
 */
const saludo = (msg) => {
  console.log(msg);
};

saludo('Hola');

const objeto = {
  suma: (a, b) => {
    return a + b;
  },
};

console.log(objeto.suma(1, 2));
