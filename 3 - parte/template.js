import Storage from './storage.js';
import { showToast } from './ui.js';

const app = document.getElementById('app');

// Página inicial
export function renderHome() {
  app.innerHTML = `
    <h1>Bem-vindo(a) à ONG Esperança</h1>
    <p>Trabalhamos para transformar vidas através da solidariedade e do amor ao próximo.</p>
  `;
}

// Página de projetos
export function renderProjetos() {
  const projetos = Storage.getProjetos();
  app.innerHTML = `
    <h1>Projetos</h1>
    <div>${projetos.map(p => `
      <div class="card">
        <h3>${p.titulo}</h3>
        <p>${p.resumo}</p>
        <p><strong>Meta:</strong> ${p.meta}</p>
      </div>
    `).join('')}</div>
  `;
}

// Página de cadastro
export function renderCadastro() {
  app.innerHTML = `
    <h1>Cadastro de Voluntário</h1>
    <form id="cadForm" novalidate>
      <input name="nome" placeholder="Nome completo" required>
      <input type="email" name="email" placeholder="Email" required>
      <input id="cpf" name="cpf" placeholder="CPF" required maxlength="14">
      <input id="telefone" name="telefone" placeholder="Telefone" required>
      <input type="date" name="nascimento" required>
      <input id="cep" name="cep" placeholder="CEP" required>
      <input name="estado" placeholder="Estado" required>
      <input name="cidade" placeholder="Cidade" required>
      <button type="submit">Enviar</button>
    </form>
  `;
  import('./formValidation.js').then(m => m.initForm());
}

// Página de voluntários
export function renderVoluntarios() {
  const voluntarios = Storage.getVoluntarios();
  app.innerHTML = `
    <h1>Voluntários Cadastrados</h1>
    <ul>${voluntarios.length ? voluntarios.map(v => `<li>${v.nome} - ${v.email}</li>`).join('') : '<li>Nenhum cadastro.</li>'}</ul>
  `;
}

