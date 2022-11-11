let telaFinal = document.querySelector('.agradecimento');
let submit = document.querySelector('.enviar');
let telaInicial = document.querySelector('.principal');
let nota = document.querySelectorAll('.nota');
const notaSelecionada = document.querySelector('#nota');

submit.addEventListener('click', function() {
    telaInicial.style.display = 'none';
    telaFinal.style.display = 'block';
});

nota.forEach((notaClicada) => {
    notaClicada.addEventListener('click', () => {
        notaSelecionada.innerHTML = notaClicada.value;
    });
});


function selecionarNota() {

}
    

telaInicial.addEventListener('submit', (e) => {

});


