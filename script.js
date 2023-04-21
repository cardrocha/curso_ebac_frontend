const form = document.getElementById('formulario');

form.addEventListener('submit', function(evento) {
  evento.preventDefault();
  let valorA = document.getElementById('campoA');
  let valorB = document.getElementById('campoB');

  if(parseInt(valorA.value) <= parseInt(valorB.value)) {
    alert('Valor de B é maior ou igual');
    valorA.value = '';
    valorB.value = '';
  } else {
    alert('Tudo certo, enviado!');
    valorA.value = '';
    valorB.value = '';
  }
});