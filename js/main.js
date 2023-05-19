//______ENTRADA DE DATOS_______//

let validarN = true;



let nota1 = parseInt(prompt("Ingrese Nota 1: "));
while ((nota1 <0) || (nota1 >20)) {
    alert ("Error! Ingrese un valor del 1 al 20")
    nota1 = parseInt(prompt("Ingrese Nota 1: "));
}

let nota2 = parseInt(prompt("Ingrese Nota 2: "));
while ((nota2 <0) || (nota2 >20)) {
    alert ("Error! Ingrese un valor del 1 al 20")
    nota2 = parseInt(prompt("Ingrese Nota 2: "));
}

let nota3 = parseInt(prompt("Ingrese Nota 3: "));
while ((nota3 <0) || (nota3 >20)) {
    alert ("Error! Ingrese un valor del 1 al 20")
    nota3 = parseInt(prompt("Ingrese Nota 3: "));
}

let nota4 = parseInt(prompt("Ingrese Nota 4: "));
while ((nota4 <0) || (nota4 >20)) {
    alert ("Error! Ingrese un valor del 1 al 20")
    nota4 = parseInt(prompt("Ingrese Nota 4: "));
}

let nota5 = parseInt(prompt("Ingrese Nota 5: "));
while ((nota5 <0) || (nota5 >20)) {
    alert ("Error! Ingrese un valor del 1 al 20")
    nota5 = parseInt(prompt("Ingrese Nota 5: "));
}

let nota6 = parseInt(prompt("Ingrese Nota 6: "));
while ((nota6 <0) || (nota6 >20)) {
    alert ("Error! Ingrese un valor del 1 al 20")
    nota6 = parseInt(prompt("Ingrese Nota 6: "));
}



//_________PROCESAMIENTO DE DATOS__________//



function calcularNotaPromedio (n1, n2, n3, n4, n5, n6){
    return (n1 + n2 + n3 + n4+ n5 + n6) / 6;
}

let = notaFinal = calcularNotaPromedio(nota1, nota2, nota3, nota4, nota5, nota6)



//_____SALIDA________//


if (notaFinal >= 11 && notaFinal <= 13) {
    alert("Tu nota final es " + notaFinal + ". Pasaste por poco!")
} else if (notaFinal >= 14 && notaFinal <= 16){
    alert("Tu nota final es " + notaFinal + ". Pasaste pero puedes hacerlo mejor")
} else if (notaFinal >= 17) {
    alert("Tu nota final es " + notaFinal + ". Eres un crack!")
} else {
    alert("Tu nota final es " + notaFinal + ". Reprobaste.")
}
