function calcularIMC() {
    /* Aqui os inputs recebem os valores */
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    if (altura === '' || peso === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    /* Calculo da formula do imc */
    let imc = peso / (altura * altura);

    document.querySelector('.imcResult').textContent = 'IMC: ' + imc.toFixed(2);
}