import Router from './router.js';
import { renderHome, renderProjetos, renderCadastro, renderVoluntarios } from './templates.js';

const routes = {
  '/': renderHome,
  '/projetos': renderProjetos,
  '/cadastro': renderCadastro,
  '/voluntarios': renderVoluntarios,
  '/404': () => document.getElementById('app').innerHTML = '<h2>404 - Página não encontrada</h2>'
};

new Router(routes);
if (!location.hash) location.hash = '#/';

