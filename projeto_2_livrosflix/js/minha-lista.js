document.addEventListener("DOMContentLoaded", () => {
  // Objeto JavaScript com os dados de todos os livros (simulando um banco de dados)
  // ESTE OBJETO booksData DEVE SER EXATAMENTE O MESMO QUE VOCÊ TEM EM book-details.js e index.js
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
      pdfPath: "pdf/culpa_minha.pdf",
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
      pdfPath: "pdf/culpa_tua.pdf",
    },
    "a-culpa-e-das-estrelas": {
      author: "John Green",
      genre: "Romance, Drama",
      year: 2012,
      pages: 255,
      synopsis:
        "A história é narrada por Hazel Grace Lancaster, uma adolescente que enfrenta um câncer terminal. Ela é forçada por seus pais a frequentar um grupo de apoio, onde conhece Augustus Waters, um sobrevivente de câncer com um carisma contagioso. Juntos, eles embarcam em uma jornada inesquecível sobre a vida, o amor e a busca por significado em meio à adversidade.",
      cover: "img/a_culpa_e_das_estrelas.jpg",
      pdfPath: "pdf/a_culpa_e_das_estrelas.pdf",
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
      pdfPath: "pdf/as_vantagens_de_ser_invisivel.pdf",
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
      pdfPath: "pdf/jogos_vorazes.pdf",
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
      pdfPath: "pdf/diario_de_um_banana.pdf",
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
      pdfPath: "pdf/jack_estripador.pdf",
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
      pdfPath: "pdf/amor_de_verao.pdf",
    },
    "o-lar-das-criancas-peculiares": {
      title: "O Lar das Crianças Peculiares",
      author: "Ransom Riggs",
      genre: "Fantasia, Aventura, Mistério",
      year: 2016,
      pages: 352,
      synopsis:
        "Jacob Portman, um garoto de 16 anos, cresceu ouvindo histórias fantásticas de seu avô sobre um orfanato em uma ilha remota, onde viviam crianças com habilidades incomuns. Após uma tragédia familiar, Jacob viaja para a ilha para investigar as histórias de seu avô, descobrindo que o orfanato e seus habitantes peculiares podem ser reais e estar presos em um loop temporal, ameaçados por criaturas monstruosas.",
      cover: "img/o_lar_das_criancas_peculiares.jpg",
      pdfPath: "pdf/o_lar_das_criancas_peculiares.pdf",
    },
    "percy-jackson-e-os-olimpianos": {
      title: "Percy Jackson e os Olimpianos",
      author: "Rick Riordan",
      genre: "Fantasia, Mitologia, Aventura",
      year: 2005,
      pages: 377,
      synopsis:
        "Percy Jackson é um garoto de 12 anos com TDAH e dislexia que descobre ser um semideus, filho de Poseidon. Ele é levado para o Acampamento Meio-Sangue, onde aprende a controlar seus poderes e embarca em uma missão perigosa para impedir uma guerra entre os deuses do Olimpo e provar sua inocência no roubo do raio-mestre de Zeus.",
      cover: "img/percy_jackson.jpg",
      pdfPath: "pdf/percy_jackson.pdf",
    },
    "um-verao-na-italia": {
      title: "Percy Jackson e os Olimpianos",
      author: "Rick Riordan",
      genre: "Fantasia, Mitologia, Aventura",
      year: 2005,
      pages: 377,
      synopsis:
        "Percy Jackson é um garoto de 12 anos com TDAH e dislexia que descobre ser um semideus, filho de Poseidon. Ele é levado para o Acampamento Meio-Sangue, onde aprende a controlar seus poderes e embarca em uma missão perigosa para impedir uma guerra entre os deuses do Olimpo e provar sua inocência no roubo do raio-mestre de Zeus.",
      cover: "img/percy_jackson.jpg",
      pdfPath: "pdf/percy_jackson.pdf",
    },
  };

  const myListContainer = document.getElementById("My-list-container");
  const emptyListMessage = document.getElementById("empty-list-message");

  // Função para obter a lista de livros do localStorage
  function getMyList() {
    const myListJSON = localStorage.getItem("myBookList");
    return myListJSON ? JSON.parse(myListJSON) : [];
  }

  // Função para salvar a lista de livros no localStorage
  function saveMyList(list) {
    localStorage.setItem("myBookList", JSON.stringify(list));
  }

  // Função para remover um livro da lista e atualizar a UI
  function removeFromMyList(bookIdToRemove) {
    let myList = getMyList();
    myList = myList.filter((id) => id !== bookIdToRemove);
  }
});
