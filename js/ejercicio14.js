function convertir(){
    let texto = document.getElementById("edad").value;
    if (texto.trim() === "") {
        alert("Ingresa al menos una edad");
        return;
    }
    
    let arreglo = texto.split(",");
    let numeros = arreglo.map(Number);

    for(let i = 0; i < numeros.length; i++) {
        if(isNaN(numeros[i]) || numeros[i] <= 0) {
            alert("Asegúrate de ingresar solo números mayores a 0 separados por comas");
            return;
        }
    }
    let maximo = Math.max(...numeros); 
    let minimo = Math.min(...numeros); 
    let suma = 0;
    let promedio = 0;
    for(let i = 0; i<numeros.length; i++){
        suma+=numeros[i];
        promedio=suma/numeros.length;
    }

    document.getElementById("mayor").value = maximo;
    document.getElementById("menor").value = minimo;
    document.getElementById("promedio").value = promedio;

}