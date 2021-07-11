const salariosCol = colombia.map(
  function(persona) {
    return persona.salario;
  }
);

const salariosColSorted = salariosCol.sort(
  function(salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

function esPar(numero) {
 return (numero % 2 === 0)
};

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  console.log("La suma de los valores en la lista es " + sumaLista);

  const promedioLista = sumaLista / lista.length;

  console.log("El promedio de la lista de valores es " + promedioLista);

  return promedioLista;
}

function medianaSalarios(lista) {
  const mitad = parseInt(lista.lenght / 2);

  if (esPar(lista.lenght)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista [mitad];

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
    return mediana;

  } else {
    const personaMitad = lista[mitad]
    return personaMitad;
  }
}

console.log(medianaSalarios(salariosColSorted));