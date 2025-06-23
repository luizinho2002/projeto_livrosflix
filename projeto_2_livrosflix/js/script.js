document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os elementos com a classe 'book-card'
  const bookCards = document.querySelectorAll(".book-card");

  // Adiciona um ouvinte de evento de clique para cada book-card
  bookCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Obtém o ID do livro do atributo 'data-id'
      const bookId = card.dataset.id;

      if (bookId) {
        // Redireciona para a página de detalhes do livro, passando o ID na URL
        window.location.href = `detalhes-livro.html?id=${bookId}`;
      } else {
        console.warn("O book-card clicado não possui um atributo data-id");
      }
    });
  });

  // Lógica para o menu mobile (se já tiver, pode integrar aqui)
  const menuToggle = document.querySelector(".menu-toggle-mobile");
  const mobileMenu = document.querySelector("mobile-menu-items");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }
});
