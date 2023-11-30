
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

//Caso 4

let texto = prompt("Ingrese un texto para convertirlo en lenguaje macondo");
let textoConvertido = texto.replace(/[aeiouAEIOU]/g, "i");
console.log(textoConvertido);

//Caso 5

let taxi = prompt("1. Ingrese 1 para piedra" +
    "\n2. Ingrese 2 para papel" +
    "\n3. Ingrese 3 para tijeras ");
let hildebrando = prompt("1. Ingrese 1 para piedra" +
    "\n2. Ingrese 2 para papel" +
    "\n3. Ingrese 3 para tijeras ");

if ((taxi == 1 && hildebrando == 2) || (taxi == 2 && hildebrando == 3) || (taxi == 3 && hildebrando == 1)) {
    console.log("Hildebrando gana");
} else if (taxi == hildebrando) {
    console.log("Hildebrando y el taxista empataron");
} else {
    console.log("Hildebrando pierde");
    nuevoSaldo -= 300000;
}

//Caso 6

for (i = 0; i < dias; i++) {
    if (vivo == true) {
        if(terminanVaca==true){
            let colores = prompt("1. Ingrese 1 para amarillo" +
            "\n2. Ingrese 2 para verde" +
            "\n3. Ingrese 3 para rojo" +
            "\n4. Ingrese 4 para azul");
            let piscina;
            let caminata;
            let playa;
            let hotel;

            switch (colores) {
                case "1":
                    console.log("Ir a la piscina, el agua huele raro, pero no le pone importancia");
                    piscina = prompt("¿Desea meterse a la piscina? (N/S)");
                    if (piscina.toUpperCase() === "S") {
                        vivo = false
                        terminanVaca = false
                        console.log("Si se mete, empieza a sentirse ahogado, demasiado cloro, muere (terminan las vacaciones)");
                    } else if (piscina.toUpperCase() === "N") {
                        console.log("No pasa nada");
                    }
                    break;
                case "2":
                    console.log("Caminatas, y agüita para el camino");
                    caminata = prompt("¿ir a toda la caminata? (N/S)");
                    if (caminata.toUpperCase() === "S") {
                        console.log("ira a una hermosa cascada y se tomara fotos");
                    } else if (caminata.toUpperCase() === "N") {
                        console.log("llegará a cierto punto, y se devolverá solo, y de noche se pierde");
                    }
                    break;
                case "3":
                    console.log("Actividades en la playa");
                    playa = prompt("1. Ingrese 1 voleibol" +
                        "\n2. Ingrese 2 nada en el mar, y monta moto" +
                        "\n3. Ingrese 3 tomar cócteles mientras descansa");
                    if (playa === "1") {
                        console.log("Se la pasa genial");
                    } else if (playa === "2") {
                        console.log("La pasa bien");
                    } else if (playa === "3") {
                        terminanVaca = false
                        console.log("Siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia. (Terminan las vacaciones)");
                    }
                    break;
                case "4":
                    console.log("Actividades dentro del hotel");
                    hotel = prompt("1. Ingrese 1 bingo," +
                        "\n2. Ingrese 2 bailar" +
                        "\n3. Ingrese 3 casino y apuesta");

                    if (hotel === "1") {
                        console.log("Gana y aumenta su dinero");
                    } else if (hotel === "2") {
                        console.log("La pasa muy bien");
                    } else if (hotel === "3") {
                        terminanVaca = false
                        console.log("Solo se queda con pasaje de regreso (Terminan las vacaciones)");
                    }
                    break;
                default:
                    console.log("Opción no válida");
        }
        contadorVaca++;
        }else{
            contador

    }
        }
        contadorVivo++;

        
    }
