// Divisiones y módulos
const a = 47;
const b = 6;
const divReal = a / b;
const cociente = Math.floor(a / b);
const residuo = a % b;
const comprobacion = cociente * b + residuo;

const par = a % 2 === 0;
console.log(`
    Division real: ${divReal.toFixed(2)}
    Cociente: ${cociente}
    Residuo: ${residuo}
    Comprobación: ${comprobacion}
    ¿El número ${a} es par?: ${par}
    `);
