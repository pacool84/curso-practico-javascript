function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  console.log("La suma de los valores en la lista es " + sumaLista);

  const promedioLista = sumaLista / lista.length;

  console.log("El promedio de la lista de valores es " + promedioLista);

  return promedioLista;
}

const lista1 = [100, 200, 500, 4000000, 800];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
  mediana = promedioElementos;
} else {
  mediana = lista1[mitadLista1];
}
