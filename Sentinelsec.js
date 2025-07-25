// Esconde o elemento de ID nessus-watermark-fill via CSS
const style = document.createElement('style');
style.innerText = '#nessus-watermark-fill { display: none !important; }';
document.head.appendChild(style);

// Quando o DOM estiver carregado
window.addEventListener('DOMContentLoaded', () => {
  // Recolhe todas as seções (se a função toggleAll existir)
  if (typeof toggleAll === 'function') {
    toggleAll(true);
  }

  // Estiliza o header e altera conteúdos
  const header = document.querySelector('header'); 
  const img = document.querySelector('header img'); 
  const direitos = document.querySelector('header h2');

  if (header) {
    header.style.boxSizing = 'border-box';
    header.style.backgroundColor = '#10192e';
    header.style.color = '#ffffff';
    header.style.padding = '20px';
  }

  if (img) {
    img.src = 'https://raw.githubusercontent.com/williandotdev/construtor_sentinelsec/refs/heads/main/logo.png';       
    img.height = 100;            
  }

  if (direitos) {
    direitos.textContent = "Relatório gerado por Sentinel Sec";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const divs = Array.from(document.body.children).filter(el => el.tagName === 'DIV');
if (divs.length >= 2) {
  divs[1].style.display = 'none';
}
});