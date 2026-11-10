// Impacto Verde — main.js
// Menu responsivo (mobile). Progressivamente aprimorado:
// a navegação funciona por links normais mesmo sem JavaScript.

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('menu-principal');

  if (!navToggle || !mainNav) return;

  navToggle.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
});

// ---------- Preferências de acessibilidade (tamanho da fonte e alto contraste) ----------
// As escolhas ficam salvas no navegador e valem para todas as páginas.
const html = document.documentElement;

function aplicarPreferencias() {
  const tamanho = localStorage.getItem('tamanhoFonte');
  if (tamanho) html.style.fontSize = tamanho + '%';
  if (localStorage.getItem('altoContraste') === 'sim') document.body.classList.add('alto-contraste');
}
aplicarPreferencias();

const btnMais = document.getElementById('fonte-mais');
const btnMenos = document.getElementById('fonte-menos');
const btnContraste = document.getElementById('alto-contraste');

function mudarFonte(passo) {
  const atual = parseInt(localStorage.getItem('tamanhoFonte') || '100', 10);
  const novo = Math.min(150, Math.max(80, atual + passo));
  localStorage.setItem('tamanhoFonte', novo);
  html.style.fontSize = novo + '%';
}

if (btnMais) btnMais.addEventListener('click', () => mudarFonte(10));
if (btnMenos) btnMenos.addEventListener('click', () => mudarFonte(-10));
if (btnContraste) {
  btnContraste.setAttribute('aria-pressed', document.body.classList.contains('alto-contraste'));
  btnContraste.addEventListener('click', () => {
    const ativo = document.body.classList.toggle('alto-contraste');
    localStorage.setItem('altoContraste', ativo ? 'sim' : 'nao');
    btnContraste.setAttribute('aria-pressed', ativo);
  });
}

// ---------- Formulário de contato ----------
// A validação (required, pattern, email...) é feita pelo próprio HTML5.
// Aqui só tratamos o envio: como não há servidor, mostramos uma confirmação.
const form = document.getElementById('form-contato');
if (form) {
  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    document.getElementById('form-status').textContent =
      'Mensagem enviada com sucesso! Responderemos em até 2 dias úteis.';
    form.reset();
  });
}
