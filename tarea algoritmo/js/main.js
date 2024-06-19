
function repetirMensaje() {
    
    let mensaje = document.getElementById("mensaje").value;
    let veces = parseInt(document.getElementById("veces").value);

    
    if (isNaN(veces) || veces <= 0) {
        alert("Por favor ingrese un número entero positivo para la cantidad de veces.");
        return;
    }

    
    let resultado = ""
    let i = 0;
    while (i < veces) {
        resultado += mensaje + "<br>"
        i++;
    }

    
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = `<h5>Mensaje Repetido ${veces} Veces:</h5><p>${resultado}</p>`;
}
//EJERCICIO 2
class MultiplosDe7Utils {
    static encontrarMultiplos() {
        let N = parseInt(document.getElementById("numeroN").value)
        let msg = ""

        for (let i = 1; i <= N; i++) {
            if (i % 7 == 0) {
                msg += i + "<br>"
            }
        }

        let r = document.getElementById("resp")
        r.innerHTML = msg
    }
}

// EJERCICIO 3 
function encontrarMultiplos() {
    
    let numeroBase = parseInt(document.getElementById("numeroBase").value)
    let numeroN = parseInt(document.getElementById("numeroN").value)

    
    if (isNaN(numeroBase) || numeroBase <= 0 || isNaN(numeroN) || numeroN <= 0) {
        alert("Por favor ingrese números enteros positivos.")
        return
    }
    
    let resultado = ""
    let i = 1
    while (i <= numeroN) {
        let multiplo = numeroBase * i
        resultado += multiplo + "<br>"
        i++;
    }

    
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = `<h5>Múltiplos de ${numeroBase} hasta ${numeroN}:</h5><p>${resultado}</p>`;
}

// EJERCICIO 4
function mostrarNumerosPositivos() {
    let numerosStr = document.getElementById("numeros").value
    let numerosArray = numerosStr.split(",").map(num => parseFloat(num.trim()))

    let numerosPositivos = []

    let i = 0;
    while (i < numerosArray.length) {
        if (numerosArray[i] > 0) {
            numerosPositivos.push(numerosArray[i])
        }
        i++;
    }
    let resp = document.getElementById("resp")
    resp.innerHTML = "Números positivos encontrados: " + numerosPositivos.join(", ")
}

// EJERCICIO 5
function encontrarPares() {
    
    let numeroN = parseInt(document.getElementById("numeroN").value)

    
    if (isNaN(numeroN) || numeroN <= 0) {
        alert("Por favor ingrese un número entero positivo.")
        return;
    }

    
    let resultado = ""
    let i = 1;
    while (i <= numeroN) {
        if (i % 2 === 0) {
            resultado += i + "<br>"
        }
        i++;
    }

    // Mostrar los números pares en el div correspondiente
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h5>Números Pares hasta ${numeroN}:</h5><p>${resultado}</p>`;
}

//EJERCICIO 6
function mostrarDivisores() {
    let numero = parseInt(document.getElementById("numero").value)
    let divisores = []

    // Encontrar divisores del número
    let i = 1
    while (i <= numero) {
        if (numero % i === 0) {
            divisores.push(i)
        }
        i++;
    }

    let resp = document.getElementById("resp")
    resp.innerHTML = `Divisores de ${numero}: ${divisores.join(", ")}`
}

//EJERCICIO 7
function mostrarTablaSumar10() {
    let tabla = ""
    for (let i = 1; i <= 12; i++) {
        let resultado = i + 10
        tabla += `( 10 + ${i}  = ${resultado})<br>`
    }
    document.getElementById("tablaSumar10").innerHTML = tabla
}

// EJERCICIO 8
function mostrarTablaMultiplicar() {
    let inicio = parseInt(document.getElementById("inicio").value)
    let fin = parseInt(document.getElementById("fin").value)
    let tabla = ""
    for (let i = inicio; i <= fin; i++) {
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j
            tabla += `${i} x ${j} = ${resultado}<br>`
        }
        tabla += "<br>"
    }

    document.getElementById("tablaMultiplicar").innerHTML = tabla
}

// EJERCICIO 9
function mostrarNumerosComprendidos() {
    // Obtener los valores ingresados por el usuario
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

    // Validar que se hayan ingresado números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingrese números válidos en ambos campos.");
        return;
    }

    // Encontrar el menor y mayor número para iterar en orden ascendente
    let menor = Math.min(num1, num2);
    let mayor = Math.max(num1, num2);

    // Construir el mensaje con los números comprendidos
    let numerosComprendidos = "";
    let i = menor;
    while (i <= mayor) {
        numerosComprendidos += i + " ";
        i++;
    }

    // Mostrar los números comprendidos
    mostrarResultado(numerosComprendidos.trim());
}

function mostrarResultados(resultado) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Números comprendidos entre los dos números:</h3>";
    resultadoDiv.innerHTML += "<p>" + resultado + "</p>";
}
// EJERCICIO 10
function encontrarParesEntreDosNumeros() {
    // Obtener los valores ingresados por el usuario
    let numeroInicio = parseInt(document.getElementById("numeroInicio").value);
    let numeroFin = parseInt(document.getElementById("numeroFin").value);

    // Validar que los valores sean enteros
    if (isNaN(numeroInicio) || isNaN(numeroFin)) {
        alert("Por favor ingrese números enteros válidos.");
        return;
    }

    // Asegurarse de que numeroInicio sea menor o igual que numeroFin
    if (numeroInicio > numeroFin) {
        alert("El número de inicio debe ser menor o igual que el número de fin.");
        return;
    }

    // Encontrar los números pares entre los dos números
    let resultado = "";
    let i = numeroInicio;
    while (i <= numeroFin) {
        if (i % 2 === 0) {
            resultado += i + "<br>";
        }
        i++;
    }

    // Mostrar los números pares en el div correspondiente
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h5>Números Pares entre ${numeroInicio} y ${numeroFin}:</h5><p>${resultado}</p>`;
}

//EJERCICIO 11
function ingresarYMostrarNumeros() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 5 números
    if (numerosArray.length !== 5) {
        alert("Por favor ingrese exactamente 5 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Mostrar los números ingresados
    mostrarNumerosIngresados(numerosArray);
}

function mostrarNumerosIngresados(numeros) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Números ingresados:</h3>";
    
    let ul = document.createElement("ul");
    let i = 0;
    while (i < numeros.length) {
        let li = document.createElement("li");
        li.textContent = numeros[i];
        ul.appendChild(li);
        i++;
    }

    resultadoDiv.appendChild(ul);
}

//EJERCICIO12
function ingresarYMostrarNumerosPares() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 10 números
    if (numerosArray.length !== 10) {
        alert("Por favor ingrese exactamente 10 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Filtrar los números pares
    let paresArray = [];
    i = 0;
    while (i < numerosArray.length) {
        if (numerosArray[i] % 2 === 0) {
            paresArray.push(numerosArray[i]);
        }
        i++;
    }

    // Mostrar los números pares ingresados
    mostrarNumerosPares(paresArray);
}

function mostrarNumerosPares(pares) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h5>Números pares ingresados:</h5>";
    
    let ul = document.createElement("ul");
    let i = 0;
    while (i < pares.length) {
        let li = document.createElement("li");
        li.textContent = pares[i];
        ul.appendChild(li);
        i++;
    }

    resultadoDiv.appendChild(ul);
}

//EJERCICIO 13
function ingresarYSumarNumeros() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 8 números
    if (numerosArray.length !== 8) {
        alert("Por favor ingrese exactamente 8 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Calcular la suma de los números
    let suma = 0;
    i = 0;
    while (i < numerosArray.length) {
        suma += numerosArray[i];
        i++;
    }

    // Mostrar la suma de los números
    mostrarSuma(suma);
}

function mostrarSuma(suma) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Suma de los números ingresados: ${suma}</h3>`;
}

//EJERCICIO 14
function ingresarYPromediarNumeros() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 6 números
    if (numerosArray.length !== 6) {
        alert("Por favor ingrese exactamente 6 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Calcular la suma de los números
    let suma = 0;
    i = 0;
    while (i < numerosArray.length) {
        suma += numerosArray[i];
        i++;
    }

    // Calcular el promedio
    let promedio = suma / numerosArray.length;

    // Mostrar el promedio de los números
    mostrarPromedio(promedio);
}

function mostrarPromedio(promedio) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Promedio de los números ingresados: ${promedio}</h3>`;
}

//EJERCICIO 15
function ingresarYCalcularMayorMenor() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 7 números
    if (numerosArray.length !== 7) {
        alert("Por favor ingrese exactamente 7 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Calcular el mayor y el menor número
    let mayor = numerosArray[0];
    let menor = numerosArray[0];
    i = 1;
    while (i < numerosArray.length) {
        if (numerosArray[i] > mayor) {
            mayor = numerosArray[i];
        }
        if (numerosArray[i] < menor) {
            menor = numerosArray[i];
        }
        i++;
    }

    // Mostrar el mayor y el menor número
    mostrarMayorMenor(mayor, menor);
}

function mostrarMayorMenor(mayor, menor) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Mayor número: ${mayor}</h3><h3>Menor número: ${menor}</h3>`;
}


//EJERCICIO16
function ingresarYSepararNumeros() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 10 números
    if (numerosArray.length !== 10) {
        alert("Por favor ingrese exactamente 10 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Separar los números positivos y negativos
    let positivos = [];
    let negativos = [];
    i = 0;
    while (i < numerosArray.length) {
        if (numerosArray[i] >= 0) {
            positivos.push(numerosArray[i]);
        } else {
            negativos.push(numerosArray[i]);
        }
        i++;
    }

    // Mostrar los números positivos y negativos
    mostrarPositivosYNegativos(positivos, negativos);
}

function mostrarPositivosYNegativos(positivos, negativos) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Números Positivos:</h3>`;
    let ulPositivos = document.createElement("ul");
    let i = 0;
    while (i < positivos.length) {
        let li = document.createElement("li");
        li.textContent = positivos[i];
        ulPositivos.appendChild(li);
        i++;
    }
    resultadoDiv.appendChild(ulPositivos);

    resultadoDiv.innerHTML += `<h3>Números Negativos:</h3>`;
    let ulNegativos = document.createElement("ul");
    i = 0;
    while (i < negativos.length) {
        let li = document.createElement("li");
        li.textContent = negativos[i];
        ulNegativos.appendChild(li);
        i++;
    }
    resultadoDiv.appendChild(ulNegativos);
}

//EJERCICIO 17
function contarOcurrencias() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 10 números
    if (numerosArray.length !== 10) {
        alert("Por favor ingrese exactamente 10 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Pedir al usuario el número a buscar
    let numeroBuscado = prompt("Ingrese el número que desea buscar:");

    // Convertir el número ingresado por el usuario a entero
    numeroBuscado = parseInt(numeroBuscado);

    // Validar que se haya ingresado un número válido
    if (isNaN(numeroBuscado)) {
        alert("Por favor ingrese un número válido.");
        return;
    }

    // Contar las ocurrencias del número buscado en el arreglo
    let contador = 0;
    i = 0;
    while (i < numerosArray.length) {
        if (numerosArray[i] === numeroBuscado) {
            contador++;
        }
        i++;
    }

    // Mostrar el resultado
    mostrarResultado(numeroBuscado, contador);
}

function mostrarResultado(numeroBuscado, contador) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>El número ${numeroBuscado} aparece ${contador} veces.</h3>`;
}

// EJERCICIO 18
function mostrarOrdenInverso() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 5 números
    if (numerosArray.length !== 5) {
        alert("Por favor ingrese exactamente 5 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Invertir el arreglo de números
    let numerosInverso = [];
    i = numerosArray.length - 1; // Empezar desde el último elemento
    while (i >= 0) {
        numerosInverso.push(numerosArray[i]);
        i--;
    }

    // Mostrar los números en orden inverso
    mostrarResultado(numerosInverso);
}

function mostrarResultado(numeros) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h5>Números en Orden Inverso:</h5>";
    
    let ul = document.createElement("ul");
    let i = 0;
    while (i < numeros.length) {
        let li = document.createElement("li");
        li.textContent = numeros[i];
        ul.appendChild(li);
        i++;
    }

    resultadoDiv.appendChild(ul);
}

//EJERCICIO 19
function mostrarMayoresQue() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 8 números
    if (numerosArray.length !== 8) {
        alert("Por favor ingrese exactamente 8 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Pedir al usuario el valor específico
    let valor = prompt("Ingrese un valor para comparar:");

    // Convertir el valor ingresado por el usuario a entero
    valor = parseInt(valor);

    // Validar que se haya ingresado un número válido
    if (isNaN(valor)) {
        alert("Por favor ingrese un número válido.");
        return;
    }

    // Filtrar los números mayores que el valor dado
    let mayoresArray = numerosArray.filter(numero => numero > valor);

    // Mostrar los números mayores que el valor dado
    mostrarResultado(mayoresArray);
}

function mostrarResultado(mayores) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h5>Números mayores que el valor dado:</h5>";
    
    let ul = document.createElement("ul");
    let i = 0;
    while (i < mayores.length) {
        let li = document.createElement("li");
        li.textContent = mayores[i];
        ul.appendChild(li);
        i++;
    }

    resultadoDiv.appendChild(ul);
}

//EJERCICIO 20
function encontrarDuplicados() {
    // Obtener el valor ingresado por el usuario
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",");

    // Validar que se ingresen exactamente 10 números
    if (numerosArray.length !== 10) {
        alert("Por favor ingrese exactamente 10 números separados por coma.");
        return;
    }

    // Convertir los números a enteros
    let i = 0;
    while (i < numerosArray.length) {
        numerosArray[i] = parseInt(numerosArray[i].trim());
        i++;
    }

    // Encontrar los números duplicados
    let duplicados = [];
    let revisados = {};
    i = 0;
    while (i < numerosArray.length) {
        let num = numerosArray[i];
        if (revisados[num]) {
            if (!duplicados.includes(num)) {
                duplicados.push(num);
            }
        } else {
            revisados[num] = true;
        }
        i++;
    }

    // Mostrar los números duplicados
    mostrarResultado(duplicados);
}

function mostrarResultado(duplicados) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Números duplicados:</h3>";
    
    if (duplicados.length === 0) {
        resultadoDiv.innerHTML += "<p>No hay números duplicados.</p>";
    } else {
        let ul = document.createElement("ul");
        let i = 0;
        while (i < duplicados.length) {
            let li = document.createElement("li");
            li.textContent = duplicados[i];
            ul.appendChild(li);
            i++;
        }
        resultadoDiv.appendChild(ul);
    }
}

// USO DE CADENAS
//EJERCICIO 21
function mostrarCaracteres() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Div donde se mostrará el resultado
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "<h5>Cada Carácter de la Cadena:</h5>"

    // Mostrar cada carácter en líneas diferentes usando un bucle while
    let i = 0;
    while (i < cadena.length) {
        let caracter = cadena.charAt(i)
        let parrafo = document.createElement("p")
        parrafo.textContent = caracter
        resultadoDiv.appendChild(parrafo)
        i++; // Incrementar el índice para avanzar al siguiente carácter
    }
}

//EJERCICIO 22
function contarVocales() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Convertir la cadena a minúsculas para simplificar la comparación
    cadena = cadena.toLowerCase()

    // Definir un conjunto de vocales para comparar
    let vocales = "aeiou"
    let conteo = 0

    // Iterar sobre cada caracter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Verificar si el caracter actual es una vocal
        if (vocales.includes(cadena.charAt(i))) {
            conteo++;
        }
    }

    // Mostrar el resultado en el div de resultado
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = `<h5>Número de vocales encontradas: ${conteo}</h5>`
}

//EJERCICIO 23
function mostrarCaracteresPares() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Div donde se mostrará el resultado
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "<h5>Caracteres en Posiciones Pares:</h5>"

    // Mostrar caracteres en posiciones pares
    for (let i = 0; i < cadena.length; i += 2) {
        let caracter = cadena.charAt(i)
        let parrafo = document.createElement("p")
        parrafo.textContent = caracter;
        resultadoDiv.appendChild(parrafo)
    }
}

//EJERCICIO 24
function convertirMayusculas() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Div donde se mostrará el resultado
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "<h5>Cada Carácter en Mayúsculas:</h5>"
    // Inicializar el índice para el bucle while
    let i = 0;
    // Mientras haya caracteres por procesar en la cadena
    while (i < cadena.length) {
        // Obtener el carácter actual y convertir a mayúsculas
        let caracter = cadena.charAt(i).toUpperCase()
        // Crear un párrafo para mostrar el carácter en mayúsculas
        let parrafo = document.createElement("p")
        parrafo.textContent = caracter
        // Agregar el párrafo al resultadoDiv
        resultadoDiv.appendChild(parrafo)
        // Incrementar el índice para pasar al siguiente carácter
        i++
    }
}

//EJERCICIO 25
 // Función para manejar el evento de envío del formulario
 function contarPalabras() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Div donde se mostrará el resultado
    let resultadoDiv = document.getElementById("resultado")

    // Dividir la cadena en palabras utilizando split y contar
    let palabras = cadena.split(" ") // Separar por espacios en blanco
    // Filtrar palabras vacías (puede haber espacios en blanco adicionales)
    palabras = palabras.filter(function(palabra) {
        return palabra.trim() !== ""
    })
    // Mostrar el número de palabras
    resultadoDiv.innerHTML = `<h5>Número de Palabras:</h5><p>${palabras.length}</p>`
}

//EJERCICIO 26
function presentarPrimerCaracter() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Obtener la longitud de la cadena
    let longitud = cadena.length;

    // Obtener el primer carácter de la cadena
    let primerCaracter = cadena.charAt(0)

    // Construir la cadena a mostrar
    let resultado = "";
    let i = 0;
    while (i < longitud) {
        resultado += primerCaracter + " "
        i++;
    }
    // Mostrar el resultado en el div correspondiente
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h5>Resultado:</h5><p>" + resultado + "</p>"
}

//EJERCICIO 27
function invertirCadena() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Invertir la cadena
    let cadenaInvertida = ""
    let i = cadena.length - 1 // Comenzar desde el último carácter de la cadena

    while (i >= 0) {
        cadenaInvertida += cadena.charAt(i)
        i--;
    }
    // Mostrar la cadena invertida en el div correspondiente
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "<h5>Cadena Invertida:</h5><p>" + cadenaInvertida + "</p>"
}

//EJERCICIO 28
function calcularFrecuencia() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Validar que la cadena no esté vacía
    if (cadena.trim() === "") {
        alert("Por favor ingrese una cadena válida.")
        return;
    }

    // Obtener el último carácter de la cadena
    let ultimoCaracter = cadena.charAt(cadena.length - 1)

    // Contar la frecuencia del último carácter en la cadena
    let frecuencia = 0
    let i = 0
    while (i < cadena.length) {
        if (cadena.charAt(i) === ultimoCaracter) {
            frecuencia++
        }
        i++
    }
    // Mostrar la frecuencia del último carácter en el div correspondiente
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h5>Frecuencia del Último Carácter (${ultimoCaracter}):</h5><p>${frecuencia}</p>`
}

//EJERCICIO 29
function contarCaracteres() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Contar los caracteres de la cadena
    let longitud = 0
    let i = 0
    while (i < cadena.length) {
        longitud++
        i++
    }

    // Mostrar la longitud de la cadena en el div correspondiente
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = `<h5>Longitud de la Cadena:</h5><p>${longitud}</p>`
}

//EJERCICIO 30
function eliminarEspacios() {
    // Obtener el valor ingresado por el usuario
    let cadena = document.getElementById("cadena").value

    // Eliminar espacios de la cadena
    let cadenaSinEspacios = ""
    let i = 0
    while (i < cadena.length) {
        if (cadena.charAt(i) !== ' ') {
            cadenaSinEspacios += cadena.charAt(i)
        }
        i++
    }

    // Mostrar la cadena sin espacios en el div correspondiente
    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = `<h5>Cadena sin Espacios:</h5><p>${cadenaSinEspacios}</p>`
}
