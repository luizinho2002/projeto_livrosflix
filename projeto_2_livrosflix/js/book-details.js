document.addEventListener("DOMContentLoaded", () => {
  // Objeto JavaScript com os dados de todos os livros (simulando um banco de dados)
  const booksData = {
    "culpa-minha": {
      title: "Culpa Minha",
      author: "Mercedes Ron",
      genre: "Romance, Drama, Suspense",
      year: 2022,
      pages: 400,
      synopsis:
        "Noah deixou sua cidade, seu namorado e seus amigos para se mudar para a mansão de William Leister, o novo e rico marido de sua mãe. Morar com Nick, seu novo meio-irmão, é um desafio. Ele é tudo o que ela evita: arrogante, problemático e perigoso. Eles vivem de segredos e mentiras, mas a atração entre eles é inevitável. Prepare-se para uma história intensa, cheia de suspense, drama e romance proibido.",
      cover: "img/culpa_minha.png",
    },
    "culpa-tua": {
      title: "Culpa Tua",
      author: "Mercedes Ron",
      genre: "Romance, Drama, Suspense",
      year: 2023,
      pages: 416,
      synopsis:
        "A relação de Nick e Noah está no seu pior momento, e parece que nada pode mudar isso. Eles precisam superar muitos obstáculos para não perder tudo o que construíram, mas o amor nem sempre é suficiente e a família nem sempre é uma ajuda. Será que eles conseguirão superar os desafios ou o destino os forçará a se separar para sempre?",
      cover: "img/culpa_tua.png",
    },
    "a-culpa-e-das-estrelas": {
      title: "A Culpa é Das Estrelas",
      author: "John Green",
      genre: "Romance, Drama",
      year: 2012,
      pages: 255,
      synopsis:
        "A história é narrada por Hazel Grace Lancaster, uma adolescente que enfrenta um câncer terminal. Ela é forçada por seus pais a frequentar um grupo de apoio, onde conhece Augustus Waters, um sobrevivente de câncer com um carisma contagioso. Juntos, eles embarcam em uma jornada inesquecível sobre a vida, o amor e a busca por significado em meio à adversidade.",
      cover: "img/culpa_das_estrelas.jpg",
    },
    "as-vantagens-de-ser-invisivel": {
      title: "As Vantagens de Ser Invisível",
      author: "Stephen Chbosky",
      genre: "Drama, Coming-of-Age",
      year: 1999,
      pages: 288,
      synopsis:
        "Charlie é um garoto tímido e sensível que está começando o ensino médio. Ele se sente um peixe fora d'água até conhecer Sam e Patrick, dois irmãos mais velhos que o acolhem em seu grupo. Através de cartas que escreve para um destinatário anônimo, Charlie narra suas experiências com amizade, primeiro amor, perdas e traumas, enquanto tenta encontrar seu lugar no mundo e superar seus próprios demônios.",
      cover: "img/as_vantagens_de_ser_invisivel.jpg",
    },
    "jogos-vorazes": {
      title: "Jogos Vorazes",
      author: "Suzanne Collins",
      genre: "Distopia, Aventura",
      year: 2008,
      pages: 400,
      synopsis:
        "Em um futuro distópico, nação de Panem é dividida em 12 distritos, controlados por uma capital opressora. Anualmente, cada distrito é forçado a enviar dois 'tributos' para participar dos Jogos Vorazes, um evento televisionado onde os participantes lutam até a morte. Katniss Everdeen, uma garota de 16 anos do Distrito 12, se oferece como tributo no lugar de sua irmã mais nova, embarcando em uma luta pela sobrevivência e por esperança.",
      cover: "img/jogos_vorazes.jpg",
    },
    "diario-de-um-banana": {
      title: "Diário de um Banana",
      author: "Jeff Kinney",
      genre: "Humor, Infantojuvenil",
      year: 2007,
      pages: 224,
      synopsis:
        "Greg Heffley é um garoto do ensino fundamental que se considera um gênio incompreendido. Em seu diário, ele narra suas aventuras, desventuras e pensamentos sarcásticos sobre a escola, a família e a luta para ser popular. Com ilustrações hilárias e uma linguagem descontraída, o livro explora os desafios da pré-adolescência de uma forma divertida e cativante.",
      cover: "img/diario_de_um_banana.jpg",
    },
    "jack-estripador": {
      title: "Jack Estripador",
      author: "Kerri Maniscalco",
      genre: "Mistério, Thriller Histórico",
      year: 2018,
      pages: 354,
      synopsis:
        "Audrey Rose Wadsworth é uma jovem nobre vitoriana que desafia as expectativas da sociedade ao estudar medicina forense com seu tio. Quando uma série de assassinatos brutais aterroriza Londres, ela se vê envolvida na investigação do infame Jack, o Estripador. Com a ajuda de um brilhante, mas arrogante colega, ela mergulha nos recantos sombrios da cidade para descobrir a verdade, mesmo que isso signifique expor segredos perigosos e lidar com preconceitos de gênero.",
      cover: "img/jack_stripador.png",
    },
    "amor-de-verao": {
      title: "Amor de Verão",
      author: "Diana Burin",
      genre: "Romance, Comédia Romântica",
      year: 2021,
      pages: 327,
      synopsis:
        "Alice está passando o verão na casa de praia da família, esperando um tempo de paz e reflexão. No entanto, seus planos são interrompidos quando ela conhece Leo, um surfista charmoso e misterioso que bagunça seu mundo. Entre passeios na praia, festas e segredos do passado, eles descobrem uma conexão inesperada. Mas o que acontece quando o verão acaba?",
      cover: "img/amor_de_verao.png",
    },
    "o-lar-das-criancas-peculiares": {
      title: "O Lar das Crianças Peculiares",
      author: "Ransom Riggs",
      genre: "Fantasia, Aventura, Mistério",
      year: 2016,
      pages: 352,
      synopsys:
        "Jacob Portman, um garoto de 16 anos, cresceu ouvindo histórias fantásticas de seu avô sobre um orfanato em uma ilha remota, onde viviam crianças com habilidades incomuns. Após uma tragédia familiar, Jacob viaja para a ilha para investigar as histórias de seu avô, descobrindo que o orfanato e seus habitantes peculiares podem ser reais e estar presos em um loop temporal, ameaçados por criaturas monstruosas.",
      cover: "img/o_lar_das_criancas_peculiares.jpg",
    },
  };
});

// Função para obter o parâmetro 'id' da URL
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get("id");

// Referências aos elementos HTML onde os detalhes serão exibidos

const bookImage = document.getElementById("book-details-image");
const bookTitle = document.getElementById("book-details-title");
const bookAuthor = document.getElementById("book-details-author");
const bookGenre = document.getElementById("book-details-genre");
const bookYear = document.getElementById("book-details-year");
const bookPages = document.getElementById("book=details-pages");
const bookSynopsis = document.getElementById("book-details-synopsis");

// Verifica se um bookId foi encontrado e se o livro existe nos dados
if (bookId && booksData[bookId]) {
  const book = booksData[bookId];

  // Preenche os elementos HTML com os dados do livro
  bookImage.src = book.cover;
  bookImage.alt = `Capa do Livre ${book.title}`;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookGenre.textContent = `Gênero: ${book.genre}`;
  bookYear.textContent = `Ano de Publicação: ${book.year}`;
  bookPages.textContent = `Número de Páginas: ${book.pages}`;
  bookSynopsis.textContent = book.synopsis;

  // Altera o título da página
  document.title = `${book.title} - LivrosFlix`;
} else {
  // Se o livro não for encontrado, pode exibir uma mensagem de erro
  bookTitle.textContent = "Livro Não Encontrado";
  bookAuthor.textContent = "";
  bookGenre.textContent = "";
  bookYear.textContent = "";
  bookPages.textContent = "";
  bookSynopsis.textContent =
    "Desculpe não conseguimos encontrar os detalhes para este livro.";
  bookImage.src =
    "https://via.placeholder.com/300x450/444?text=Livro+Nao+Encontrado"; // Imagem de placeholder
  bookImage.alt = "Livro não encontrado";
}

// --- Lógica de Cliques para Botões de Ação na página de Detalhes ---
const btnLerAgora = document.querySelector(".book-details-buttons .btn-play");
const btnMinhaLista = document.querySelector(
  ".book-details-buttons .btn-info:nth-of-type(1)"
); // Primeiro btn-info
const btnCompartilhar = document.querySelector(
  ".book-details-buttons .btn-info:nth-of-type(2)"
); // Segundo btn-info

if (btnLerAgora) {
  btnLerAgora.addEventListener("click", () => {
    alert(`Você clicou em 'Ler'Agora para o livro: ${bookTitle.textContent}`);
    // Aqui você integraria com um leitor de livros ou link para o conteúdo
  });
}

if (btnMinhaLista) {
  btnMinhaLista.addEventListener("click", () => {
    alert(
      `Você clicou em 'Minha' Lista para o livro: ${bookTitle.textContent}`
    );
    // Aqui você adicionaria a lógica para adicionar à lista do usuário
  });
}

if (btnCompartilhar) {
  btnCompartilhar.addEventListener("click", () => {
    if (navigator.share) {
      navigator
        .share({
          title: bookTitle.textContent,
          text: bookSynopsis.textContent.substring(0, 100),
          url: window.location.href,
        })
        .then(() => {
          // console.log('Conteúdo compartilhado com sucesso!');
        })
        .catch((error) => {
          // console.error('Erro ao compartilhar:', error);
        });
    } else {
      alert(`Compartilhar link do livro: ${window.location.href}`);
    }
  });
}

// --- Lógica para o menu moile (se você quiser que ele funcione nesta página também) ---
const menuToggle = document.querySelector(".menu-toggle-mobile");
const mobileMenu = document.querySelector(".mobile-menu-items");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}
