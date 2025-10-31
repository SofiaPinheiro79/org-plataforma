function onlyDigits(v) {
  return v.replace(/\D+/g, '');
}

function maskCPF(el) {
  let v = onlyDigits(el.value).slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, "$1.$2")
       .replace(/(\d{3})(\d)/, "$1.$2")
       .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  el.value = v;
}

function maskPhone(el) {
  let v = onlyDigits(el.value).slice(0, 11);
  if (v.length > 10)
    v = v.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  else
    v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  el.value = v.trim();
}

function maskCEP(el) {
  let v = onlyDigits(el.value).slice(0, 8);
  v = v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
  el.value = v;
}

document.addEventListener('input', (e) => {
  const t = e.target;
  if (t.dataset.mask === 'cpf') maskCPF(t);
  if (t.dataset.mask === 'phone') maskPhone(t);
  if (t.dataset.mask === 'cep') maskCEP(t);
});