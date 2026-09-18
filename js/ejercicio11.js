function convertir(){
    let num = document.getElementById("km").value;
    if (num === "") {
        alert("Ingresa tus kilometros a convertir");
        return;
    }
    let km = parseFloat(num);
    if (isNaN(km)) {
        alert("Ingresa un valor numerico");
        return;
    }
    let millas = km*0.621371;
    document.getElementById("millas").value = millas;
}