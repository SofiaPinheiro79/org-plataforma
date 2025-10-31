const KEY_VOLS = 'voluntarios';
const KEY_PROJ = 'projetos';

export default {
  getVoluntarios() {
    return JSON.parse(localStorage.getItem(KEY_VOLS)) || [];
  },
  saveVoluntario(v) {
    const lista = this.getVoluntarios();
    lista.push(v);
    localStorage.setItem(KEY_VOLS, JSON.stringify(lista));
  },
  getProjetos() {
    return JSON.parse(localStorage.getItem(KEY_PROJ)) || [
      { titulo: 'Ação Social', resumo: 'Entrega de alimentos a famílias carentes', meta: 'R$10.000' },
      { titulo: 'Educa Mais', resumo: 'Oficinas educativas para crianças', meta: 'R$5.000' }
    ];
  }
};

