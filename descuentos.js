/* const precioOriginal = 120;
const descuento = 18;
const porcentajePrecioDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;

console.log({
  precioOriginal,
  descuento,
  porcentajePrecioDescuento,
  precioConDescuento,
}); */

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
  return precioConDescuento;
}
