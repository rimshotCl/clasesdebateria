export type Cancion = {
  slug: string;
  artista: string;
  tema: string;
  /** ID del video tutorial en el canal de YouTube del profesor */
  youtubeId: string;
  /** ID del track en Spotify */
  spotifyTrackId?: string;
  /** ID de un video de la banda tocando en vivo */
  liveYoutubeId?: string;
  /** Álbum y año, ej: "Porfiado (2012)" */
  album?: string;
  /** Nombre del baterista original de la canción (o productor, si la batería es programada) */
  baterista?: string;
  /** Descripción/contexto de la canción */
  descripcion?: string;
  /** Nota sobre el contenido del video tutorial */
  notaVideo?: string;
  /** Tip de interpretación para tocar la canción */
  tipInterpretacion?: string;
  /** Premios ganados (solo victorias, no nominaciones) */
  premios?: string[];
};

export const canciones: Cancion[] = [
  {
    slug: "lo-malo-de-ser-bueno",
    artista: "El Cuarteto de Nos",
    tema: "Lo malo de ser bueno",
    youtubeId: "dkR7yx88sJI",
    spotifyTrackId: "7xB3hSztVbX6xFvQqEGKud",
    liveYoutubeId: "xoDX8fDr-Sw",
    album: "Porfiado (2012)",
    baterista: "Álvaro (Alvin) Pintos",
    descripcion:
      "Lo malo de ser bueno es una canción incluída en el álbum Porfiado (2012) de la banda uruguaya El Cuarteto de Nos. Fue escrita por Roberto Musso y producida por Juan Campodónico.",
    notaVideo:
      'En este video toco en batería la canción "Lo malo de ser bueno" en dos tempos distintos. Uno más lento (75 bpm) y uno más rápido (95 bpm). Los tempos solo son referencias, para que tengas una idea de los ritmos que toca Alvin y tengas dos oportunidades para entender qué es lo que toca. Adicionalmente, el video cuenta con transcripciones en tiempo real de las distintas secciones de la canción.',
    tipInterpretacion:
      "Fíjate que lo que Alvin toca en el aro del tom, es el mismo ritmo que toca el tecladista, corcheas.",
    premios: ["Latin Grammy 2012 — Mejor Álbum Pop/Rock"],
  },
  {
    slug: "bailando-solo",
    artista: "Los Bunkers",
    tema: "Bailando Solo",
    youtubeId: "EIBOMQuuRnE",
    spotifyTrackId: "1wGNjZQoO4Ac5zotF3aZTb",
    liveYoutubeId: "Q_X4yruyjls",
    album: "La Velocidad de la Luz (2013)",
    baterista: "Mauricio (Mauro) Basualto",
    descripcion:
      "Bailando Solo es un sencillo del álbum La Velocidad de la Luz (2013) escrito por Francisco y Mauricio Durán y producido por Emmanuel Del Real y Yamil Rezc.",
    notaVideo:
      "En este video toco la canción en dos tempos distintos. Uno más lento (86 o 96 bpm) y uno más rápido (116 bpm). Los tempos solo son referencias para entender lo que se toca a dos velocidades distintas. En algunas secciones no toco lo mismo que sale en la partitura: la partitura es la verdad, al menos la mía, quizás tú no escuchas lo mismo que yo.",
    tipInterpretacion:
      "Lo más importante es que la gente baile. Cuando corresponda toca el bombo en los tiempos 1, 2, 3 y 4 (Four on the floor) de forma consistente y las cajas en los tiempos 2 y 4, como un balazo. Súmale a esto los hi-hats.",
  },
  {
    slug: "hit-me",
    artista: "Molotov",
    tema: "Hit Me",
    youtubeId: "yscDil237DE",
    spotifyTrackId: "5oYQ84f7jWY90pblm2XJAO",
    liveYoutubeId: "tZ_yk4XJSzo",
    album: "Dance and Dense Denso (2003)",
    baterista: "Randy (Amerinaco) Ebright",
    descripcion:
      "Hit Me es una canción incluída en el álbum Dance and Dense Denso (2003) de la banda mexicana Molotov. Fue compuesta por Francisco (Paco) Huidobro y producida por Gustavo Santaolalla y Aníbal Kerpel. El álbum y la canción fueron nominados a un Grammy y a varias categorías del Latin Grammy.",
    notaVideo:
      "En este video encontrarás una demo en batería de las secciones de la canción, en dos tempos distintos: uno más lento (80 bpm) y uno más rápido (90 bpm). Los tempos solo son referencias para entender lo que se toca a dos velocidades distintas.",
    tipInterpretacion:
      "Todos los crashes que Randy toca en la canción son tocados a un volumen moderado, es decir, ni muy fuerte ni muy despacio. Escucha la canción para que entiendas lo que quiero decir.",
    premios: [
      "MTV VMA Latinoamérica 2003 — Mejor Grupo o Dúo",
      "MTV VMA Latinoamérica 2003 — Mejor Artista Alternativo",
      "MTV VMA Latinoamérica 2003 — Mejor Artista de México",
    ],
  },
  {
    slug: "peces",
    artista: "Francisca Valenzuela",
    tema: "Peces",
    youtubeId: "FLXe3PUDQs0",
    spotifyTrackId: "1wDQYLCxPRyMbvamYJiFIU",
    liveYoutubeId: "X8baF-_zFaw",
    album: "Muérdete La Lengua (2007)",
    baterista: "Mauricio (Mauro) Basualto",
    descripcion:
      "Peces es el primer sencillo del álbum Muérdete La Lengua de la cantante chilena Francisca Valenzuela. El álbum fue producido por Mauricio Durán y Francisco Durán.",
    notaVideo:
      "En este video demuestro la canción en dos tempos distintos. La primera vez a 87 bpm y la segunda a 102 bpm. Ambos tempos solo son referencias para que veas los grooves de la canción a dos velocidades distintas.",
    tipInterpretacion:
      "Todos los coros de la canción son tocados con el hi-hat abierto. Y los versos son tocados en el ride.",
  },
  {
    slug: "sacar-la-basura",
    artista: "Los Ex",
    tema: "Sacar la Basura",
    youtubeId: "JFIGrMQycSI",
    spotifyTrackId: "4dCrW7sO0ZaFTziu4ZwCAu",
    liveYoutubeId: "Kx--ZfZFveE",
    album: "Caída Libre (1996)",
    baterista: "Octavio (Tavo) Bascuñán",
    descripcion:
      "Sacar la Basura es un sencillo del álbum Caída Libre (1996) del conjunto Los Ex. La canción fue grabada y mezclada por Guido Nisenson.",
    notaVideo:
      "En este video demuestro la canción en dos tempos distintos. La primera vez a 94 bpm y la segunda a 114 bpm. Ambos tempos solo son referencias para que veas los distintos grooves de la canción a dos velocidades distintas.",
    tipInterpretacion:
      "Octavio toca durante toda la canción las dos corcheas de los tiempos 1 y 3 en el bombo, y el hi-hat lo toca abierto para darle más intensidad a la interpretación y acompañar las guitarras afiladas.",
  },
  {
    slug: "luismi",
    artista: "Polimá Westcoast y Young Cister",
    tema: "LuisMi",
    youtubeId: "nh155EsvDI8",
    spotifyTrackId: "3gZqQz2fgqdg8vakJ17Gij",
    liveYoutubeId: "bwm5SjUqqLs",
    album: "EQILIBRIO (2020)",
    baterista: "Producida por Mauro De Tomasso (batería programada)",
    descripcion:
      "LuisMi es un sencillo del álbum EQILIBRIO (2020) de Polimá Westcoast y Young Cister, un homenaje a Luis Miguel, el Sol de México. Las baterías de la grabación fueron programadas con un DAW, y en el video encontrarás una transcripción libre de lo que se escucha.",
    notaVideo:
      "En este video demuestro la canción en dos tempos distintos. La primera vez a 100 bpm y la segunda a 120 bpm. Ambos tempos solo son referencias para que veas los distintos ritmos de la canción a dos velocidades distintas.",
    tipInterpretacion:
      "Intenta que la apertura del hi-hat coincida con el golpe del bombo cada vez que corresponda, que suenen al mismo tiempo.",
  },
  {
    slug: "el-hijo-de-hernandez",
    artista: "El Cuarteto de Nos",
    tema: "El hijo de Hernández",
    youtubeId: "TmB_YVagbjg",
    spotifyTrackId: "6lSypaQOcC6JtzfwpINLGW",
    liveYoutubeId: "1BTxn96Gkpo",
    album: "Bipolar (2009)",
    baterista: "Álvaro (Alvin) Pintos",
    descripcion:
      "El hijo de Hernández es el primer sencillo del álbum Bipolar (2009) de la banda uruguaya El Cuarteto de Nos. La canción fue escrita por Roberto Musso y producida por Juan Campodónico. El álbum fue muy premiado, y también recibió nominaciones al Latin Grammy 2010.",
    notaVideo:
      "Tempos en que demuestro la canción: 93 bpm y 133 bpm, a excepción del Puente, que solo lo demuestro a 93, porque es solo un crash con un bombo en el tiempo 1 del primer compás, y luego la batería deja de tocar por un buen rato.",
    tipInterpretacion:
      "En el solo de guitarra el bombo va alineado con lo que toca el bajista, Santiago Tavella.",
    premios: [
      "Premios Graffiti 2010 — Mejor Álbum del Año",
      "Premios Graffiti 2010 — Tema del Año",
      "Premios Graffiti 2010 — Mejor Álbum Pop",
    ],
  },
  {
    slug: "cha-cha-cha",
    artista: "Los Tetas",
    tema: "Cha Cha Cha",
    youtubeId: "r8J2vIoka2I",
    spotifyTrackId: "2TuoRWJFfN2DRBNhEaoc6L",
    liveYoutubeId: "z0pH6yalmZs",
    album: "EP Cha-Cha-Cha (1997)",
    baterista: "Francisco (Pepino) González",
    descripcion:
      "Cha-Cha-Cha es la primera canción del EP Cha-Cha-Cha (1997) del grupo chileno Los Tetas, con la participación de C-Funk, Juan Sativo (Tiro de Gracia), Tea Time, Rulo y Pepino. También está incluida en el álbum Latin Funk All-Stars (2000).",
    tipInterpretacion:
      "Precalienta tu pie izquierdo, porque lo vas a usar activamente durante toda la canción.",
    notaVideo: "Tempos en que demuestro la canción: 96 bpm y 116 bpm.",
  },
];
