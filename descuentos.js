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

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const priceDiscount = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    priceDiscount
  );

  const resultPrice = document.getElementById("ResultPrice");
  //resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
  resultPrice.innerText = `El precio con descuento es $${precioConDescuento}`;
}
