function convertir(){
    let num = document.getElementById("edad").value;
     if (num === "") {
        alert("Ingresa tu edad");
        return;
    }
    let valor = parseFloat(num);
    if (isNaN(valor) || valor<=0) {
        alert("Edad invalida");
        return;
    }
    if(valor>=18){
        document.getElementById("siono").value = "Puedes votar";
    }else{
        document.getElementById("siono").value = "No puedes votar";
    } 
    

}