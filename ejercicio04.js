//compra de 4 productos 
const papel = 50.5;
const leche = 35;
const mayonesa = 90.4;
const pastaDent = 41;

const subtotal = papel + leche + mayonesa + pastaDent;
const iva = subtotal * 0.16;
let total = subtotal + iva;
const totalOriginal = total;
total *= 0.90;

console.log(`
    Subtotal:$${subtotal.toFixed(2)}
    IVA:$${iva.toFixed(2)}
    Total:$${totalOriginal.toFixed(2)}
    Total con descuento: $${total.toFixed(2)}
    `);