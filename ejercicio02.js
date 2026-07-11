//Lista de pedidos a domicilio
const lugar = 'Abasolo número 2 Col. 1';    //donde entregar el pedido
const confirmacion = true;                 //si ya se pago el pedido
const totalPrecio = 112.50;               //total del pedido
const noProductos = 3;                   //cuantos productos se envian al paquete
let nUnidad = null;                     //numero de la unidad que llevara el envio, en este caso va a pata por eso esta vacio
let propina;

console.log(`valor: ${lugar} | tipo: ${typeof lugar}`);
console.log(`valor: ${confirmacion} | tipo: ${typeof confirmacion}`);
console.log(`valor: ${totalPrecio} | tipo: ${typeof totalPrecio}`);
console.log(`valor: ${noProductos} | tipo: ${typeof noProductos}`);
console.log(`valor: ${nUnidad} | tipo: ${typeof nUnidad}`);
// el null da un objet por mero error de creacion de javaScript y se quedo asi para no interferir con codigos antiguos
console.log(`valor: ${propina} | tipo: ${typeof propina}`);

