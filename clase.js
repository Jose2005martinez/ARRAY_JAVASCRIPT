//Crear como mínimo 4 arreglos distintos.

const numero =[1,2,3,4,5,6];
const palabras = ['manzana','enamoramiento','sucesos','camilla','retroalimentacion'];
const edades = [12,24,56,17,90];
const producto =[
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Teléfono', precio: 500 },
    { nombre: 'Tablet', precio: 700 },
    { nombre: 'Monitor', precio: 300 }
  ];


//Con dichos arreglos, le van a aplicar cada uno de los métodos
// (.reduce(),.filter(), .map() y .forEach()). En total serían 16 resultados.

// .reduce con Array
const suma =0;
const SumarNumeros = numero.reduce((suma ,numero)=>suma + numero);
console.log(SumarNumeros);

const NombrePalabras = palabras.reduce((acomular , palabras)=>acomular + ',' + palabras);
console.log(NombrePalabras);

const Mayoredades = edades.reduce((Acomulativo , edad) => Acomulativo+edades);
console.log(Mayoredades);

const CantidadProductos = producto.reduce((total , productos) => Total + "," + productos);

// .filter() Aplicando con Array

const numerosPares = numero.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

const  CantidadPalabras  = palabras.filter((palabras) => palabras.length >4);
console.log (CantidadPalabras);

const Mayoriaedad = edad.filter((edad) => edad >18);
console.log(Mayoriaedad);

const variedadProducto = producto.filter((producto) => producto.presio > 600);
console.log(variedadProducto);


//.Map() 
// toUpperCase devuelve el valor de la cadena convertida a mayúsculas.


const NumeroAlCuadrado = numero.map((numero) => numero * numero);
console.log(NumeroAlCuadrado);

const PalabrasMayuscula = palabras.map((palabras) => palabras.toUpperCase());
console.log(PalabrasMayuscula);

const EdadesMayoresMas = edad.map((edad) =>  edad +10);
console.log(EdadesMayoresMas);

const ProductosConDescuento =producto.map(producto => ({ ...producto, precio: producto.precio * 0.9 }));
console.log(ProductosConDescuento);


// .ForEach()
