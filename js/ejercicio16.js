
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : null;

const calcularOperacion = (operacion) => {
    const val1 = document.getElementById("numero1").value.trim();
    const val2 = document.getElementById("numero2").value.trim();

    if (val1 === "" || val2 === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor, ingresa ambos números antes de realizar la operación.'
        });
        return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada no válida',
            text: 'Debes ingresar únicamente valores numéricos.'
        });
        return;
    }

    let res;

    switch (operacion) {
        case 'suma':
            res = sumar(num1, num2);
            break;
        case 'resta':
            res = restar(num1, num2);
            break;
        case 'multiplicacion':
            res = multiplicar(num1, num2);
            break;
        case 'division':
            res = dividir(num1, num2);
            if (res === null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error matemático',
                    text: 'No es posible dividir entre cero.'
                });
                document.getElementById("resultado").value = "";
                return;
            }
            break;
        default:
            return;
    }

    document.getElementById("resultado").value = res;
};