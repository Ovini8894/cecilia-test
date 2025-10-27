function enviarWhatsApp() {
  const numero = '553492263122'; // Código do país + DDD + número
  const mensagem = 'Quero confirmar minha presença para o aniversario da Cecilia';
  
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}