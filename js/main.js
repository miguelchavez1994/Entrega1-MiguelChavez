/*// ENTRADA DE DATOS > PROCESAMIENTO DE DATOS > SALIDA (O INFORMACIÓN)

// ________ Etapa 1- Entrada de datos _____________//

let monto = 0;

while ((monto <= 0 ) || (monto > 2000000)){
    let monto = parseInt(prompt("Ingrese el monto: (Hasta $2 000 000 pesos"));
}

let plazo = 0;


parseInt(prompt("Ingrese la cantidad de cuotas (12/24/36Ç/48/68"));

let tipoDeCliente = prompt("Ingrese tipo de cliente (Exclusivo/Premium/General/Start");
const IVA = 21;
let TNA;
let tasa;

//__________ETAPA 2 - PROCESAMIENTO DE DATOS_____________//



if ((plazo !=12) || (plazo != 24) || (plazo !=36) || (plazo != 48) || (plazo != 60))


let errorPlazo = true;

while (errorPlazo) {
    switch (plazo){
        case 12:
            tasa = 70;
            break;
        case 24:
            tasa = 80;
            break;
        case 36:
            tasa = 90
            break;
        case 48:
            tasa = 100;
            break;
        case 60:
            tasa = 110;
            break;
    }
}

*/

//______ENTRADA DE DATOS_______//

let validarN = true;



let nota1 = parseInt(prompt("Ingrese Nota 1: "));
let nota2 = parseInt(prompt("Ingrese Nota 2: "));
let nota3 = parseInt(prompt("Ingrese Nota 3: "));
let nota4 = parseInt(prompt("Ingrese Nota 4: "));
let nota5 = parseInt(prompt("Ingrese Nota 5: "));
let nota6 = parseInt(prompt("Ingrese Nota 6: "));







//_________PROCESAMIENTO DE DATOS__________//



function calcularEdadPromedio (nota1, nota2, nota3, nota4, nota5, nota6){
    return (nota1 + nota2 + nota3 + nota4+ nota5 + nota6) / 6;
}

let = notaFinal = calcularEdadPromedio(nota1, nota2, nota3, nota4, nota5, nota6)



//_____SALIDA________//


if (notaFinal >= 11 && notaFinal <= 13) {
    alert("Tu nota final es " + notaFinal + ". Pasaste por poco!")
} else if (notaFinal >= 14 && notaFinal <= 16){
    alert("Tu nota final es " + notaFinal + ". Pasaste pero puedes hacarlo ")
} else if (notaFinal >= 17) {
    alert("Tu nota final es " + notaFinal + ". Eres un crack!")
} else {
    alert("Tu nota final es " + notaFinal + ". Reprobaste.")
}
