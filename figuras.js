//Codigo para el cuadrado
console.group("Cuadrados");
//const ladoCruadrado = 5;
//console.log("Los lados de mi cuadrado es de " + ladoCruadrado + "cm");

//const perimetroCuadrado = ladoCruadrado * 4;

function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado();

//console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCruadrado * ladoCruadrado;

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El area del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo para el triangulo
console.group("Triangulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
); */
//console.log("La altura del triangulo es de: " + alturaTriangulo);

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es de " + perimetroTriangulo + "cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//console.log("El area del triangulo es de: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo para el circulo
console.group("Circulos");
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
//const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio) {
  return radio * 2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
//console.log("El valor de PI es: " + PI);

//const perimetroCirculo = diametroCirculo * PI;

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");
//const areaCirculo = PI * (radioCirculo * radioCirculo);

function areaCirculo(radio) {
  return radio * radio * PI;
}
//console.log("El area de nuestro circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(`El perimetro de tu cuadrado es ${perimetro}`);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert("El area del cuadrado es " + area);
}

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("InputTriangulo1");
  const lado2 = document.getElementById("InputTriangulo2");
  const basetriangulo = document.getElementById("BaseTriangulo");

  const numero1 = parseFloat(lado1.value);
  const numero2 = parseFloat(lado2.value);
  const base = parseFloat(basetriangulo.value);

  const total = perimetroTriangulo(numero1, numero2, base);

  alert(`El perimetro del triangulo es ${total}`);
}

function calcularAreaTriangulo() {
  const basetriangulo = document.getElementById("BaseTriangulo");
  const alturatriangulo = document.getElementById("AlturaTriangulo");

  const base = parseFloat(basetriangulo.value);
  const altura = parseFloat(alturatriangulo.value);

  const area = areaTriangulo(base, altura);

  alert(`El area del triangulo es ${area}`);
}

function calcularDiametroCirculo() {
  const radioElemento = document.getElementById("RadioCirculo");
  const radio = parseFloat(radioElemento.value);

  const diametro = diametroCirculo(radio);

  alert(`El diametro del circulo es ${diametro}`);
}

function calcularPerimetroCirculo() {
  const radioElemento = document.getElementById("RadioCirculo");
  const radio = parseFloat(radioElemento.value);

  const diametro = diametroCirculo(radio);
  const PI = Math.PI;

  const perimetro = diametro * PI;

  alert(`El perimetro del circulo es  ${perimetro}`);
}

function calcularAreaCirculo() {
  const radioElemento = document.getElementById("RadioCirculo");
  const radio = parseFloat(radioElemento.value);
  const PI = Math.PI;

  const area = PI * (radio * radio);
  alert("El area del circulo es " + area);
}
