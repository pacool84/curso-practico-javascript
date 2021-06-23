//Codigo para el cuadrado
console.group("Cuadrados");
const ladoCruadrado = 5;
console.log("Los lados de mi cuadrado es de " + ladoCruadrado + "cm");

const perimetroCuadrado = ladoCruadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCruadrado * ladoCruadrado;
console.log("El area del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo para el triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
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
);
console.log("La altura del triangulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del trinagulo es de " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo para el circulo
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El area de nuestro circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();
