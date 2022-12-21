let telaFinal = document.querySelector('.agradecimento');
let submit = document.querySelector('.enviar');
let telaInicial = document.querySelector('.principal');
let nota = document.querySelectorAll('.btn-nota');
const notaSelecionada = document.querySelector('#nota');

submit.disabled = true;

nota.forEach((notaClicada) => {
    notaClicada.addEventListener('click', () => {
        notaSelecionada.innerHTML = notaClicada.value;
        submit.disabled = false;
    });
});

submit.addEventListener('click', function() {
    telaInicial.style.display = 'none';
    telaFinal.style.display = 'block';
});






