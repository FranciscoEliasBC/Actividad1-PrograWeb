function convertir(params) {

    let num = document.getElementById("celcius").value;
    if (num === "") {
        alert("Ingresa una temperatura");
        return;
    }
    let celsius = parseFloat(num);
    if (isNaN(celsius)) {
        alert("Ingresa un valor numérico");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;

}