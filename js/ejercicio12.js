function convertir(){
    let num = document.getElementById("pesos").value;
    if (num === "") {
        alert("Ingresa tus pesos a dolares");
        return;
    }
    let pesos = parseFloat(num);
    if (isNaN(pesos)) {
        alert("Ingresa un valor numerico");
        return;
    }
    let dolares = (pesos/18.18).toFixed(2)+"$";
    document.getElementById("usd").value = dolares;

}