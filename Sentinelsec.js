// Esconde o elemento de ID nessus-watermark-fill via CSS
const style = document.createElement('style');
style.innerText = '#nessus-watermark-fill { display: none !important; }';
document.head.appendChild(style);

// Recolhe todas as seções ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    if (typeof toggleAll === 'function') {
        toggleAll(true);
    }
});

window.onload = function setFavicon() {
  let link = document.querySelector("link[rel='icon']") || document.querySelector("link[rel='shortcut icon']");

  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  // type="image/x-icon";
  link.type ="image/x-icon";
  link.href = 'https://raw.githubusercontent.com/williandotdev/construtor_sentinelsec/refs/heads/main/favicon.ico';
}

window.onload = function () {
  const img = document.querySelector('header img'); 
  const direitos = document.querySelector('header h2');
  const footer = document.querySelector('font');
  if (img) {
    img.src = './logo.png';       
    img.height = 100;            
  }

  if(direitos) {
    direitos.textContent = "Relatório gerado por Sentinel Sec";
  }
  
  if(footer) {
    footer.textContent = "© 2025 Sentinel Sec. Todos os direitos reservados.";
  }
};

