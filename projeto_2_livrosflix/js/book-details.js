document.addEventListener("DOMContentLoaded", () => {
  // Objeto JavaScript com os dados de todos os livros (simulando um banco de dados)
  const booksData = {
    "culpa-minha": {
      title: "Culpa Minha",
      author: "Mercedes Ron",
      genre: "Romance, Drama, Suspense",
      year: "2022",
      pages: "400",
      synopsis:
        "Noah deixou sua cidade, seu namorado e seus amigos para se mudar para a mansão de William Leister, o novo e rico marido de sua mãe. Morar com Nick, seu novo meio-irmão, é um desafio. Ele é tudo o que ela evita: arrogante, problemático e perigoso. Eles vivem de segredos e mentiras, mas a atração entre eles é inevitável. Prepare-se para uma história intensa, cheia de suspense, drama e romance proibido.",
      cover: "img/culpa_minha.png",
    },
    "culpa-tua": {
      title: "Culpa Tua",
      author: "Mercedes Ron",
      genre: "Romance, Drama, Suspense",
      year: "2023",
      pages: "416",
      synopsis:
        "A relação de Nick e Noah está no seu pior momento, e parece que nada pode mudar isso. Eles precisam superar muitos obstáculos para não perder tudo o que construíram, mas o amor nem sempre é suficiente e a família nem sempre é uma ajuda. Será que eles conseguirão superar os desafios ou o destino os forçará a se separar para sempre?",
      cover: "img/culpa_tua.png",
    },
    "a-culpa-e-das-estrelas": {
      title: "A Culpa é Das Estrelas",
      author: "John Green",
      genre: "Romance, Drama",
      year: "2012",
      pages: "255",
      synopsis:
        "A história é narrada por Hazel Grace Lancaster, uma adolescente que enfrenta um câncer terminal. Ela é forçada por seus pais a frequentar um grupo de apoio, onde conhece Augustus Waters, um sobrevivente de câncer com um carisma contagioso. Juntos, eles embarcam em uma jornada inesquecível sobre a vida, o amor e a busca por significado em meio à adversidade.",
      cover: "img/culpa_das_estrelas.jpg",
    },
    "as-vantagens-de-ser-invisivel": {
      title: "As Vantagens de Ser Invisível",
      author: "Stephen Chbosky",
      genre: "Drama, Coming-of-Age",
      year: "1999",
      pages: "288",
      synopsis:
        "Charlie é um garoto tímido e sensível que está começando o ensino médio. Ele se sente um peixe fora d'água até conhecer Sam e Patrick, dois irmãos mais velhos que o acolhem em seu grupo. Através de cartas que escreve para um destinatário anônimo, Charlie narra suas experiências com amizade, primeiro amor, perdas e traumas, enquanto tenta encontrar seu lugar no mundo e superar seus próprios demônios.",
      cover: "img/as_vantagens_de_ser_invisivel.jpg",
    },
    "jogos-vorazes": {
      title: "Jogos Vorazes",
      author: "Suzanne Collins",
      genre: "Distopia, Aventura",
      year: "2008",
      pages: "400",
      synopsis:
        "Em um futuro distópico, nação de Panem é dividida em 12 distritos, controlados por uma capital opressora. Anualmente, cada distrito é forçado a enviar dois 'tributos' para participar dos Jogos Vorazes, um evento televisionado onde os participantes lutam até a morte. Katniss Everdeen, uma garota de 16 anos do Distrito 12, se oferece como tributo no lugar de sua irmã mais nova, embarcando em uma luta pela sobrevivência e por esperança.",
      cover: "img/jogos_vorazes.jpg",
    },
    "diario-de-um-banana": {
      title: "Diário de um Banana",
      author: "Jeff Kinney",
      genre: "Humor, Infantojuvenil",
      year: "2007",
      pages: "224",
      synopsis:
        "Greg Heffley é um garoto do ensino fundamental que se considera um gênio incompreendido. Em seu diário, ele narra suas aventuras, desventuras e pensamentos sarcásticos sobre a escola, a família e a luta para ser popular. Com ilustrações hilárias e uma linguagem descontraída, o livro explora os desafios da pré-adolescência de uma forma divertida e cativante.",
      cover: "img/diario_de_um_banana.jpg",
    },
    "jack-estripador": {
      title: "Jack Estripador",
      author: "Kerri Maniscalco",
      genre: "Mistério, Thriller Histórico",
      
    },
  };
});
