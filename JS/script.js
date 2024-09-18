

//Ejercicio 1:----------------------------------------------------- 

function encontrarEdad() {

    let edad = document.getElementById("InEje1").value;

    edad = (edad >= 18) ? alert("La persona es mayor de edad") : alert("La persona es menor de edad");

}


//Ejercicio 2:--------------------------------------------------------

function NotaAlumno() {
    let examen = document.getElementById("InExa").value;
    let tarea = document.getElementById("InTar").value;
    let asistencia = document.getElementById("InAs").value;
    let investigacion = document.getElementById("InIn").value;
    let nombreAlumno = document.getElementById("InAl").value;
    let carnet = document.getElementById("InCarnet").value;

    let NotaFinal = 0;

    examen = examen * 0.20;
    tarea = tarea * 0.40;
    asistencia = asistencia * 0.1;
    investigacion = investigacion * 0.30;

    NotaFinal = examen + tarea + asistencia + investigacion;

    let InfoAlumno = "El nombre del alumno es: " + nombreAlumno + "\n";
    InfoAlumno += "El carnet del alumno es " + carnet + "\n";
    InfoAlumno += "La nota final es: " + NotaFinal.toFixed(2);


    alert(InfoAlumno);
}



//Ejercicio 3:--------------------------------------------------------

function SalarioTrabajadores() {

    let nombreEje3 = document.getElementById("InEje3Nomb").value;
    let SalarioEje3 = parseFloat(document.getElementById("InEje3Sal").value);
    let CategoriaEje3 = document.getElementById("InEje3Cat").value;
    let Aumento34 = 1;

    switch (CategoriaEje3) {
        case "A": Aumento34 = SalarioEje3 * 1.15;

            let mensaje1 = "El empleado: " + nombreEje3 + "\n";
            mensaje1 += "Salario: " + SalarioEje3 + "\n";
            mensaje1 += "Categoria " + CategoriaEje3 + ": " + " Equivale a 15%" + "\n";
            mensaje1 += "Salario final es: " + Aumento34.toFixed(2);

            alert(mensaje1);
            break;

        case "B": Aumento34 = SalarioEje3 * 1.30;

            let mensaje2 = "El empleado: " + nombreEje3 + "\n";
            mensaje2 += "Salario: " + SalarioEje3 + "\n";
            mensaje2 += "Categoria " + CategoriaEje3 + ": " + " Equivale a 30%" + "\n";
            mensaje2 += "Salario final es: " + Aumento34.toFixed(2);

            alert(mensaje2);
            break;

        case "C": Aumento34 = SalarioEje3 * 1.10;

            let mensaje3 = "El empleado: " + nombreEje3 + "\n";
            mensaje3 += "Salario: " + SalarioEje3 + "\n";
            mensaje3 += "Categoria " + CategoriaEje3 + ": " + " Equivale a 10%" + "\n";
            mensaje3 += "Salario final es: " + Aumento34.toFixed(2);

            alert(mensaje3);
            break;

        case "D": Aumento34 = SalarioEje3 * 1.20;

            let mensaje4 = "El empleado: " + nombreEje3 + "\n";
            mensaje4 += "Salario: " + SalarioEje3 + "\n";
            mensaje4 += "Categoria " + CategoriaEje3 + ": " + " Equivale a 20%" + "\n";
            mensaje4 += "Salario final es: " + Aumento34.toFixed(2);

            alert(mensaje4);
            break;
    }
}


//Ejercicio 4----------------------------------------------------------------

function numeroMayor() {

    let numero1 = parseFloat(document.getElementById("InEje4Num1").value);
    let numero2 = parseFloat(document.getElementById("InEje4Num2").value);

    if (numero1 == numero2) {
        return alert(`Los numeros son iguales`);

    } else if (numero1 > numero2) {

        return alert(`El numero mayor es:  ${numero1}`);

    } else {
        return alert(`El numero mayor es:  ${numero2}`);
    }
}


//Ejercicio 5------------------------------------------------------------------

function coche() {
    let carros = document.getElementById("modeloCarros").value;
    let etiqueta = document.getElementById("etiqueta");


    switch (carros) {
        case "FORD FIESTA":
            etiqueta.innerHTML = "Vehiculo seleccionado: FORD FIESTA. <br>El descuento es del 5%";
            break;

        case "FORD FOCUS":
            etiqueta.innerHTML = "Vehiculo seleccionado: FORD FOCUS. <br>El descuento es del 10%";
            break;

        case "FORD ESCAPE":
            etiqueta.innerHTML = "Vehiculo seleccionado: FORD ESCAPE. <br>El descuento es del 20%";
            break;
    }

    setTimeout(function () {
        etiqueta.textContent = " ";
    }, 3000);

}

//Ejercicio 6:-----------------------------------------------------------------------------

function Viajes() {
    let ciudadOrigen = document.getElementById("InEje6Co").value;
    let ciudadDestino = document.getElementById("InEje6Cd").value;
    let respuesta1 = document.getElementById("respuesta-2");

    if (ciudadOrigen === "La Palma" && ciudadDestino === "La costa del Sol") {
        respuesta1.textContent = "El descuento es del 5%";

    } else if (ciudadOrigen === "La Palma" && ciudadDestino === "Panchimalco") {
        respuesta1.textContent = "El descuento es del 10%";

    } else if (ciudadOrigen === "La Palma" && ciudadDestino === "Puerto el Triunfo") {
        respuesta1.textContent = "El descuento es del 15%";
    }

    setTimeout(function Viajes() {
        respuesta1.textContent = " ";
    }, 3000);
}

//Ejercicio 7:-------------------------------------------------------------------------


function valoresNumeros() {

    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    let valor = [];
    let suma = 0;

    for (let i = 0; i < 10; i++) {

        valor[i] = parseFloat(document.getElementById("EjE7" + (i + 1)).value);

    }

    for (let i = 0; i < 10; i++) {
        (valor[i] < 0) ? cont1++ : (valor[i] > 0) ? cont2++ : null;

        /* if (valor[i] < 0) {
             cont1++;
 
         } else if (valor[i] > 0) {
             cont2++;
         }*/

        if (valor[i] % 15 == 0) {
            cont3++;
        }

        if (valor[i] % 2 == 0) {
            suma += valor[i];
        }

    }

    let mensajeEje7 = "El numero de valores negativos es: " + cont1 + "\n";
    mensajeEje7 += "El numero de valores positivos es: " + cont2 + "\n";
    mensajeEje7 += "El numero de valores multiplos de 15 ingresados es: " + cont3 + "\n";
    mensajeEje7 += "La suma de los numeros pares es: " + suma;

    alert(mensajeEje7);

}


//Ejercicio 8---------------------------------------------------------------------------

function multiplicar() {

    let numeroMult = Number(document.getElementById("InEje82").value);
    let n = Number(document.getElementById("InEje81").value);
    let mult = [];
    let resultado = "";
    let tabla = document.getElementById("tabla");


    for (let i = 1; i < n + 1; i++) {
        mult[i] = numeroMult * i;
        resultado += `${numeroMult} x ${i} = ${numeroMult * i}\n`;
        //tabla.innerHTML +=  `${numeroMult} x ${i} = ${numeroMult * i} <br>`;
    }
    alert(resultado);

    /*setTimeout(function(){
        tabla.textContent = " ";
    }, 8*1000);*/
}


//Ejercicio 9:----------------------------------------------------------------


function temperaturas() {

    let temper = Number(document.querySelector(".tempera").value);
    let tempers = document.querySelector("#Temp");
    let TempFar;

    TempFar = ((9 / 5) * temper) + 32;

    if (TempFar >= 13 && TempFar <= 32) {
        tempers.innerHTML = `La temperatura es de ${TempFar.toFixed(2)}°F y es Temperatura Baja`;

    } else if (TempFar > 32 && TempFar <= 68) {
        tempers.innerHTML = `La temperatura es de ${TempFar.toFixed(2)}°F y es Temperatura Adecuada`;

    } else if (TempFar > 68 && TempFar <= 96) {
        tempers.innerHTML = `La temperatura es de ${TempFar.toFixed(2)}°F y es Temperatura Alta`;
    } else {
        tempers.innerHTML = `La temperatura es de ${TempFar.toFixed(2)}°F es desconocida`;
    }

    setTimeout(function () {
        tempers.textContent = " ";

    }, 4000);
}


//Ejercicio 10------------------------------------------------------------------------------------

function Estudiantes_edades() {

    function promedios(n1, n2) {

        let promedio = 0;
        let suma = 0;
        let j = 0;

        for (let i = n1; i <= n2; i++) {

            let edad = parseFloat(document.getElementById("Edad" + i).value);

            if (!isNaN(edad) && edad > 0) {
                suma += edad;
                j++;
            }
            else {
                alert("Ingresa un valor valido");
                return;
            }
        }

        if (j > 0) {
            promedio = suma / j;

            return promedio;

        } else {
            alert("El numero se divide entre 0' error")
        }
    }

    let promedio1 = promedios(1, 5);
    let promedio2 = promedios(6, 10);
    let promedio3 = promedios(11, 21);

    let mensaje = "El promedio de los alumnos de la mañana es: " + promedio1.toFixed(0) + "\n";
    mensaje += "El promedio de los alumnos de la tarde es: " + promedio2.toFixed(0) + "\n";
    mensaje += "El promedio de los alumnos de la noche es: " + promedio3.toFixed(0);
    let mensaje2;
    let mensaje3;

    if (promedio1 > promedio2 && promedio1 > promedio2) {

        mensaje2 = `El promedio mayor es: ${promedio1.toFixed(0)}`;

    } else if (promedio2 > promedio1 && promedio2 > promedio3) {

        mensaje2 = `El promedio mayor es: ${promedio2.toFixed(0)}`;
    } else {
        mensaje2 = "El promedio mayor es: " + promedio3.toFixed(0);
    }

    mensaje3 += mensaje + "\n" + mensaje2;


    alert(mensaje3);
}













