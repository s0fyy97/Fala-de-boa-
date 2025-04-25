function mostrarResposta(elemento) {
  const resposta = elemento.querySelector('.resposta');
  resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensagem-enviada').textContent = "Mensagem enviada com sucesso! Valeu por entrar em contato.";
  this.reset();
});
