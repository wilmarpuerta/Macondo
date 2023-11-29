
//Caso 1

let sueldo = "2.500.000";
let sueldoN = sueldo.split(".");
let number = sueldoN[0]+sueldoN[1]+sueldoN[2];

let cont = 0;
let cont2 = 0;

function mostrarRespuesta() {
    let formulario = document.getElementById("miFormulario");
    let opciones = formulario.elements["respuesta"];
    let resultado = document.getElementById("resultado");
        if (opciones[0].checked){
            alert("Le caerá mal porque lleva mucho en el stand");
            if (cont == 0){
                number = number-15000;
                cont = 1;
            }
            if (cont2 == 1){
                number = number+23000;
                cont2 = 0;
            }               
            resultado.innerHTML = `Saldo disponible: $${number}` 
        }

        else if (opciones[1].checked){
            alert("Estará llenito y bien");
            if (cont2 == 0){
                number = number-23000;
                cont2 = 1;
            }
            if (cont == 1){
                number = number+15000;
                cont = 0;
            }
            resultado.innerHTML = `Saldo disponible: $${number}`     
        }

        else if (opciones[2].checked){
            alert("Le tocara comprar algo en Medellín");
            if (cont == 1){
                number = number+15000;
                cont = 1;
            }
            if (cont2 == 1){
                number = number+23000;
                cont2 = 0;
            }
            resultado.innerHTML = `Saldo disponible: $${number}`   
        }

        else {
            alert("Por favor, selecciona una respuesta.");
        }
        
    return;    
    }

//Caso 2

let altoMaleta = Number.parseFloat(prompt("Ingrese un alto de la maleta")) / 55;
let largoMaleta = Number.parseFloat(prompt("Ingrese un largo de la maleta")) / 40;
let anchoMaleta = Number.parseFloat(prompt("Ingrese un ancho de la maleta")) / 20;
let factorReduccion = Math.min(altoMaleta, largoMaleta, anchoMaleta);

let altoOriginal = factorReduccion * (altoMaleta * 55);
let largoOriginal = factorReduccion * (largoMaleta * 40);
let anchoOriginal = factorReduccion * (anchoMaleta * 20);

console.log("El tamaño de la maleta con la reducción es alto " + altoOriginal + " largo " + largoOriginal + " ancho " + anchoOriginal);

//Caso 3

let contrasena = "01110010_01101001_01110111_01101001";
let array = contrasena.split("_");
let array2 = [];
for (let i of array) {
    let nuevacontra = parseInt(i, 2);
    array2.push(nuevacontra);
}
console.log(array2)
let caracteres = String.fromCharCode(...array2);
console.log(caracteres);