function validarCPF() {
    const cpf = document.getElementById("input3").value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || !validarDigitos(cpf)) {
        document.getElementById("resultado").textContent = "CPF inválido";
    } else {
        document.getElementById("resultado").textContent = "CPF válido";
    }
}

function validarDigitos(cpf) {
    const cpfArray = cpf.split('').map(Number);
    const somaPrimeirosDigitos = cpfArray.slice(0, 9).reduce((acumulado, valor, indice) => acumulado + valor * (10 - indice), 0);
    const primeiroDigitoVerificador = (somaPrimeirosDigitos * 10) % 11;

    if (primeiroDigitoVerificador === 10 || primeiroDigitoVerificador === 11) {
        if (primeiroDigitoVerificador !== cpfArray[9]) {
            return false;
        }
    } else {
        if (primeiroDigitoVerificador !== cpfArray[9]) {
            return false;
        }
    }

    const somaSegundosDigitos = cpfArray.slice(0, 10).reduce((acumulado, valor, indice) => acumulado + valor * (11 - indice), 0);
    const segundoDigitoVerificador = (somaSegundosDigitos * 10) % 11;

    if (segundoDigitoVerificador === 10 || segundoDigitoVerificador === 11) {
        if (segundoDigitoVerificador !== cpfArray[10]) {
            return false;
        }
    } else {
        if (segundoDigitoVerificador !== cpfArray[10]) {
            return false;
        }
    }

    return true;
}