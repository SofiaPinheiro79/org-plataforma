export function showToast(msg, type = 'info') {
    const box = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = msg;
    box.appendChild(t);
  
    setTimeout(() => t.classList.add('visible'), 10);
  
    setTimeout(() => {
      t.classList.remove('visible');
      setTimeout(() => t.remove(), 300);
    }, 3000);
  }
