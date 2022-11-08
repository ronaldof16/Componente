let obrigado = document.querySelector('.agradecimento');
let submit = document.querySelector('.enviar');
let telaInicial = document.querySelector('.principal');
let nota = document.querySelectorAll('.nota');

submit.addEventListener('click', function() {
    telaInicial.style.display = 'none';
    obrigado.style.display = 'block';
});



