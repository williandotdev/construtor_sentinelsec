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

  // Define favicon
  const url = './favicon.ico';
  let link = document.querySelector("link[rel='icon'], link[rel='shortcut icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/x-icon';
  link.href = url;

  // Estiliza o header e altera conteúdos
  const header = document.querySelector('header'); 
  const img = document.querySelector('header img'); 
  const direitos = document.querySelector('header h2');
  const footer = document.querySelector('font');

  if (header) {
    header.style.boxSizing = 'border-box';
    header.style.backgroundColor = '#10192e';
    header.style.color = '#ffffff';
    header.style.padding = '20px';
  }

  if (img) {
    img.src = './logo.png';       
    img.height = 100;            
  }

  if (direitos) {
    direitos.textContent = "Relatório gerado por Sentinel Sec";
  }

  if (footer) {
    footer.textContent = "© 2025 Sentinel Sec. Todos os direitos reservados.";
  }
});
