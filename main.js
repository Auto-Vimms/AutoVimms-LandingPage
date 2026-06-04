// ── Ano no rodapé ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Animação de entrada (Reveal on scroll) ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.14 });
reveals.forEach(item => observer.observe(item));

// ── Formulário de orçamento → WhatsApp ──
document.getElementById('budgetForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome     = document.getElementById('nome').value.trim();
  const empresa  = document.getElementById('empresa').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email    = document.getElementById('email').value.trim();
  const servico  = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  const texto =
    `Olá, AutoVimms! Gostaria de solicitar um orçamento.%0A%0A` +
    `Nome: ${encodeURIComponent(nome)}%0A` +
    `Empresa: ${encodeURIComponent(empresa)}%0A` +
    `WhatsApp: ${encodeURIComponent(telefone)}%0A` +
    `Email: ${encodeURIComponent(email)}%0A` +
    `Serviço: ${encodeURIComponent(servico)}%0A` +
    `Mensagem: ${encodeURIComponent(mensagem)}`;

  // TROQUE pelo número oficial da AutoVimms (somente números com DDI e DDD).
  // Exemplo: 5511999999999
  const numeroWhatsApp = '5500000000000';
  const link = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

  const toast = new bootstrap.Toast(document.getElementById('formToast'));
  toast.show();
  window.open(link, '_blank');
});