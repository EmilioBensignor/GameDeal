// Categorias
const categorias = [
    {
        nombre: "Aventura"
    },
    {
        nombre: "Acción"
    },
    {
        nombre: "RPG"
    },
    {
        nombre: "Deportes"
    },
    {
        nombre: "Simulación"
    },
    {
        nombre: "Estrategia"
    },
    {
        nombre: "Carreras"
    },
    {
        nombre: "Lucha"
    },
    {
        nombre: "Puzzle"
    },
    {
        nombre: "Terror"
    },
    {
        nombre: "Plataformas"
    }
];

// Juegos
const juegos = [
    {
        img: "the-last-of-us",
        categoria: "Aventura",
        nombre: "The Last of Us",
        nombreBusqueda: "the last of us",
        texto: "Una historia épica de supervivencia en un mundo post-apocalíptico lleno de emociones intensas.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "call-of-duty-modern-warfare",
        categoria: "Acción",
        nombre: "Call of Duty: Modern Warfare",
        nombreBusqueda: "call of duty modern warfare cod",
        texto: "Intensos combates tácticos con gráficos realistas y modos multijugador emocionantes.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "elden-ring",
        categoria: "RPG",
        nombre: "Elden Ring",
        nombreBusqueda: "elden ring",
        texto: "Un vasto mundo abierto lleno de misterios, combates desafiantes y exploración épica.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "fifa-26",
        categoria: "Deportes",
        nombre: "FIFA 26",
        nombreBusqueda: "fifa 26 football soccer",
        texto: "El simulador de fútbol más realista con equipos oficiales y modos de juego variados.",
        precio: 69.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: true
    },
    {
        img: "microsoft-flight-simulator",
        categoria: "Simulación",
        nombre: "Microsoft Flight Simulator",
        nombreBusqueda: "microsoft flight simulator",
        texto: "Experimenta la sensación de volar con la simulación más realista del mundo.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "civilization-vi",
        categoria: "Estrategia",
        nombre: "Civilization VI",
        nombreBusqueda: "civilization vi civ 6",
        texto: "Construye un imperio que resista el paso del tiempo con estrategia por turnos.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "forza-horizon-5",
        categoria: "Carreras",
        nombre: "Forza Horizon 5",
        nombreBusqueda: "forza horizon 5",
        texto: "Carreras arcade en un mundo abierto espectacular en México con cientos de vehículos.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "mortal-kombat-11",
        categoria: "Lucha",
        nombre: "Mortal Kombat 11",
        nombreBusqueda: "mortal kombat 11 mk11",
        texto: "Combates brutales con movimientos fatales icónicos y una narrativa cinematográfica.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "portal-2",
        categoria: "Puzzle",
        nombre: "Portal 2",
        nombreBusqueda: "portal 2",
        texto: "Resuelve acertijos ingeniosos usando portales en este juego de lógica y humor.",
        precio: 9.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "resident-evil-village",
        categoria: "Terror",
        nombre: "Resident Evil Village",
        nombreBusqueda: "resident evil village re8",
        texto: "Horror de supervivencia con atmósfera tenebrosa y enemigos aterradores.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "celeste",
        categoria: "Plataformas",
        nombre: "Celeste",
        nombreBusqueda: "celeste",
        texto: "Plataformas desafiante con una historia conmovedora sobre superación personal.",
        precio: 19.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "god-of-war-ragnarok",
        categoria: "Aventura",
        nombre: "God of War Ragnarök",
        nombreBusqueda: "god of war ragnarok",
        texto: "Kratos y Atreus enfrentan el destino en esta épica aventura de mitología nórdica.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "spider-man-2",
        categoria: "Acción",
        nombre: "Spider-Man 2",
        nombreBusqueda: "spider-man 2 spiderman",
        texto: "Balancea por Nueva York como Peter Parker y Miles Morales en esta secuela espectacular.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "baldurs-gate-3",
        categoria: "RPG",
        nombre: "Baldur's Gate 3",
        nombreBusqueda: "baldurs gate 3 bg3",
        texto: "RPG de mundo abierto con decisiones profundas y combate táctico basado en D&D.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "nba-2k26",
        categoria: "Deportes",
        nombre: "NBA 2K26",
        nombreBusqueda: "nba 2k26 basketball",
        texto: "Vive la experiencia del baloncesto profesional con gráficos y jugabilidad realistas.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: true
    },
    {
        img: "uncharted-4",
        categoria: "Aventura",
        nombre: "Uncharted 4",
        nombreBusqueda: "uncharted 4",
        texto: "Acompaña a Nathan Drake en su última aventura llena de tesoros y peligros.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "doom-eternal",
        categoria: "Acción",
        nombre: "DOOM Eternal",
        nombreBusqueda: "doom eternal",
        texto: "Acción frenética contra hordas de demonios con un arsenal devastador.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "the-witcher-3",
        categoria: "RPG",
        nombre: "The Witcher 3",
        nombreBusqueda: "the witcher 3 witcher",
        texto: "Explora un mundo de fantasía oscura como Geralt de Rivia en esta aventura épica.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "f1-2026",
        categoria: "Deportes",
        nombre: "F1 2026",
        nombreBusqueda: "f1 2026 formula 1",
        texto: "Compite en el campeonato de Fórmula 1 con las escuderías y pilotos oficiales.",
        precio: 69.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: true
    },
    {
        img: "the-sims-4",
        categoria: "Simulación",
        nombre: "The Sims 4",
        nombreBusqueda: "the sims 4 sims",
        texto: "Crea y controla personas virtuales en un simulador de vida sin límites.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "cities-skylines",
        categoria: "Simulación",
        nombre: "Cities: Skylines",
        nombreBusqueda: "cities skylines",
        texto: "Construye y gestiona la ciudad de tus sueños en este simulador urbano.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "starcraft-ii",
        categoria: "Estrategia",
        nombre: "StarCraft II",
        nombreBusqueda: "starcraft 2 ii",
        texto: "Domina la galaxia con estrategia en tiempo real en este clásico de eSports.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "age-of-empires-iv",
        categoria: "Estrategia",
        nombre: "Age of Empires IV",
        nombreBusqueda: "age of empires 4 iv aoe",
        texto: "Construye imperios y conquista civilizaciones en este RTS legendario.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "gran-turismo-7",
        categoria: "Carreras",
        nombre: "Gran Turismo 7",
        nombreBusqueda: "gran turismo 7 gt7",
        texto: "El simulador de conducción más realista con cientos de vehículos auténticos.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "mario-kart-8-deluxe",
        categoria: "Carreras",
        nombre: "Mario Kart 8 Deluxe",
        nombreBusqueda: "mario kart 8 deluxe mk8",
        texto: "Carreras arcade divertidas con personajes icónicos de Nintendo.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "street-fighter-6",
        categoria: "Lucha",
        nombre: "Street Fighter 6",
        nombreBusqueda: "street fighter 6 sf6",
        texto: "Combates competitivos con mecánicas renovadas y roster diverso.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "tekken-8",
        categoria: "Lucha",
        nombre: "Tekken 8",
        nombreBusqueda: "tekken 8",
        texto: "El rey de los juegos de lucha 3D regresa con gráficos impresionantes.",
        precio: 29.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: true
    },
    {
        img: "tetris-effect",
        categoria: "Puzzle",
        nombre: "Tetris Effect",
        nombreBusqueda: "tetris effect",
        texto: "Tetris como nunca antes con música y efectos visuales hipnóticos.",
        precio: 19.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "the-witness",
        categoria: "Puzzle",
        nombre: "The Witness",
        nombreBusqueda: "the witness",
        texto: "Explora una isla misteriosa resolviendo cientos de rompecabezas interconectados.",
        precio: 9.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "silent-hill-2-remake",
        categoria: "Terror",
        nombre: "Silent Hill 2 Remake",
        nombreBusqueda: "silent hill 2 remake sh2",
        texto: "Revive la pesadilla psicológica más icónica del survival horror.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "outlast",
        categoria: "Terror",
        nombre: "Outlast",
        nombreBusqueda: "outlast",
        texto: "Sobrevive en un asilo abandonado sin armas, solo tu cámara y tu ingenio.",
        precio: 29.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "super-mario-odyssey",
        categoria: "Plataformas",
        nombre: "Super Mario Odyssey",
        nombreBusqueda: "super mario odyssey",
        texto: "Viaja por reinos coloridos en la mejor aventura 3D de Mario.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "hollow-knight",
        categoria: "Plataformas",
        nombre: "Hollow Knight",
        nombreBusqueda: "hollow knight",
        texto: "Explora un reino subterráneo lleno de secretos y combates desafiantes.",
        precio: 14.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "horizon-forbidden-west",
        categoria: "Aventura",
        nombre: "Horizon Forbidden West",
        nombreBusqueda: "horizon forbidden west",
        texto: "Explora un mundo post-apocalíptico lleno de máquinas y misterios antiguos.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "red-dead-redemption-2",
        categoria: "Aventura",
        nombre: "Red Dead Redemption 2",
        nombreBusqueda: "red dead redemption 2 rdr2",
        texto: "Vive la épica historia de un forajido en el salvaje oeste americano.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "devil-may-cry-5",
        categoria: "Acción",
        nombre: "Devil May Cry 5",
        nombreBusqueda: "devil may cry 5 dmc5",
        texto: "Combate demoníaco estilizado con combos espectaculares y acción frenética.",
        precio: 29.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "hades",
        categoria: "Acción",
        nombre: "Hades",
        nombreBusqueda: "hades",
        texto: "Roguelike de acción donde escapas del inframundo griego una y otra vez.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: true,
        proximamente: false
    },
    {
        img: "final-fantasy-xvi",
        categoria: "RPG",
        nombre: "Final Fantasy XVI",
        nombreBusqueda: "final fantasy 16 xvi ff16",
        texto: "Épica aventura de fantasía con combate en tiempo real y historia cinematográfica.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "starfield",
        categoria: "RPG",
        nombre: "Starfield",
        nombreBusqueda: "starfield",
        texto: "Explora la galaxia en esta épica aventura espacial de mundo abierto.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: true
    },
    {
        img: "ea-sports-fc-24",
        categoria: "Deportes",
        nombre: "EA Sports FC 24",
        nombreBusqueda: "ea sports fc 24 fifa",
        texto: "La nueva era del fútbol virtual con mecánicas mejoradas y realismo total.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "rocket-league",
        categoria: "Deportes",
        nombre: "Rocket League",
        nombreBusqueda: "rocket league",
        texto: "Fútbol con autos acrobáticos en partidas competitivas y caóticas.",
        precio: 0,
        masJugado: false,
        freeToPlay: true,
        masVendido: false,
        proximamente: false
    },
    {
        img: "farming-simulator-22",
        categoria: "Simulación",
        nombre: "Farming Simulator 22",
        nombreBusqueda: "farming simulator 22",
        texto: "Administra tu propia granja con maquinaria auténtica y cultivos variados.",
        precio: 49.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "planet-coaster",
        categoria: "Simulación",
        nombre: "Planet Coaster",
        nombreBusqueda: "planet coaster",
        texto: "Diseña y administra el parque de atracciones de tus sueños.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "xcom-2",
        categoria: "Estrategia",
        nombre: "XCOM 2",
        nombreBusqueda: "xcom 2",
        texto: "Táctica por turnos liderando la resistencia contra una invasión alienígena.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "total-war-warhammer-iii",
        categoria: "Estrategia",
        nombre: "Total War: Warhammer III",
        nombreBusqueda: "total war warhammer 3 iii",
        texto: "Estrategia épica combinando batallas masivas en tiempo real y gestión por turnos.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "need-for-speed-unbound",
        categoria: "Carreras",
        nombre: "Need for Speed Unbound",
        nombreBusqueda: "need for speed unbound nfs",
        texto: "Carreras callejeras con estilo artístico único y personalización extrema.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "dirt-rally-2-0",
        categoria: "Carreras",
        nombre: "Dirt Rally 2.0",
        nombreBusqueda: "dirt rally 2",
        texto: "Rally realista que pone a prueba tus habilidades en terrenos desafiantes.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "super-smash-bros-ultimate",
        categoria: "Lucha",
        nombre: "Super Smash Bros. Ultimate",
        nombreBusqueda: "super smash bros ultimate ssbu",
        texto: "El crossover de lucha definitivo con personajes icónicos de Nintendo y más.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "dragon-ball-fighterz",
        categoria: "Lucha",
        nombre: "Dragon Ball FighterZ",
        nombreBusqueda: "dragon ball fighterz dbfz",
        texto: "Combates 2D espectaculares con personajes de Dragon Ball en estilo anime.",
        precio: 49.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "baba-is-you",
        categoria: "Puzzle",
        nombre: "Baba Is You",
        nombreBusqueda: "baba is you",
        texto: "Rompecabezas innovador donde manipulas las reglas del juego mismo.",
        precio: 14.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "return-of-the-obra-dinn",
        categoria: "Puzzle",
        nombre: "Return of the Obra Dinn",
        nombreBusqueda: "return of the obra dinn",
        texto: "Misterio de deducción único ambientado en un barco fantasma del siglo XIX.",
        precio: 14.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "dead-space-remake",
        categoria: "Terror",
        nombre: "Dead Space Remake",
        nombreBusqueda: "dead space remake",
        texto: "Terror espacial con atmósfera claustrofóbica y criaturas horripilantes.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "amnesia-the-bunker",
        categoria: "Terror",
        nombre: "Amnesia: The Bunker",
        nombreBusqueda: "amnesia the bunker",
        texto: "Survival horror en un búnker de la Primera Guerra Mundial con amenaza constante.",
        precio: 49.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "cuphead",
        categoria: "Plataformas",
        nombre: "Cuphead",
        nombreBusqueda: "cuphead",
        texto: "Plataformas y shoot 'em up con estética de caricaturas vintage.",
        precio: 19.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    },
    {
        img: "ori-and-the-will-of-the-wisps",
        categoria: "Plataformas",
        nombre: "Ori and the Will of the Wisps",
        nombreBusqueda: "ori and the will of the wisps",
        texto: "Metroidvania hermoso con mecánicas fluidas y historia emotiva.",
        precio: 29.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false
    }
];

// Comparar
const comparaciones = [
    {
        plataforma: "Steam",
        precio: "39,99",
        lista: [
            "Biblioteca integrada en la nube",
            "Reembolsos hasta 14 días",
            "Workshop con mods de la comunidad",
        ],
    },
    {
        plataforma: "Epic Games",
        precio: "44,99",
        lista: [
            "Juegos gratis todas las semanas",
            "Logros y sistema de recompensas",
            "Crossplay con otras plataformas",
        ],
    },
    {
        plataforma: "GOG",
        precio: "42,99",
        lista: [
            "Sin DRM - tuyo para siempre",
            "Instaladores offline incluidos",
            "Garantía de devolución de 30 días",
        ],
    },
];

// Como funciona
const comoFunciona = [
    {
        titulo: "Buscar",
        texto: "Ingresá el nombre del juego que querés en nuestro buscador. Encontrá títulos de todas las plataformas en segundos.",
    },
    {
        titulo: "Comparar",
        texto: "Revisá precios en tiempo real de Steam, Epic Games, GOG y más tiendas. Filtrá por región y moneda para ver ofertas exactas.",
    },
    {
        titulo: "Ahorrar",
        texto: "Comprá al mejor precio disponible y ahorrá hasta un 70% en tus juegos favoritos. Simple, rápido y sin vueltas.",
    },
];

// Opiniones
const opiniones = [
    {
        estrellas: 5,
        texto: "Gracias a esta plataforma encontré Elden Ring mucho más barato que en Steam. Súper fácil comparar precios.",
        img: "juan-perez",
        nombre: "Juan Pérez",
        descripcion: "Gamer, Argentina"
    },
    {
        estrellas: 5,
        texto: "Increíble la diferencia de precios entre tiendas. Me ahorré casi $20 en mi último juego.",
        img: "maria-gonzalez",
        nombre: "María González",
        descripcion: "Streamer, México"
    },
    {
        estrellas: 4,
        texto: "La interfaz es muy intuitiva y me ayudó a encontrar las mejores ofertas rápidamente.",
        img: "carlos-rodriguez",
        nombre: "Carlos Rodríguez",
        descripcion: "Developer, España"
    },
    {
        estrellas: 5,
        texto: "Siempre reviso los precios aquí antes de comprar. Ya me ahorré más de $100 este año.",
        img: "ana-martinez",
        nombre: "Ana Martínez",
        descripcion: "Gamer, Chile"
    },
    {
        estrellas: 5,
        texto: "Perfecta para encontrar ofertas. La recomiendo a todos mis amigos gamers.",
        img: "luis-torres",
        nombre: "Luis Torres",
        descripcion: "Pro Player, Colombia"
    },
    {
        estrellas: 4,
        texto: "Me encanta poder ver todas las tiendas en un solo lugar. Ahorro tiempo y dinero.",
        img: "sofia-ramirez",
        nombre: "Sofia Ramírez",
        descripcion: "Diseñadora, Uruguay"
    },
    {
        estrellas: 5,
        texto: "Desde que uso esta plataforma puedo comprar más juegos con el mismo presupuesto.",
        img: "diego-fernandez",
        nombre: "Diego Fernández",
        descripcion: "Estudiante, Perú"
    },
    {
        estrellas: 5,
        texto: "La función de comparación es genial. Nunca más pago de más por un juego.",
        img: "valentina-silva",
        nombre: "Valentina Silva",
        descripcion: "Content Creator, Bolivia"
    },
    {
        estrellas: 4,
        texto: "Muy útil para seguir las ofertas de mis juegos favoritos. Interfaz clara y rápida.",
        img: "mateo-lopez",
        nombre: "Mateo López",
        descripcion: "Gamer, Ecuador"
    },
    {
        estrellas: 5,
        texto: "Excelente servicio. Encontré juegos que no sabía que existían y a precios increíbles.",
        img: "isabella-castro",
        nombre: "Isabella Castro",
        descripcion: "Streamer, Paraguay"
    }
];

// Menu Lateral
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const menuLateral = document.getElementById('menu-lateral');
    const fondoMenu = document.getElementById('fondo-menu');
    const cerrar = document.getElementById('cruz-cerrar');

    function abrirMenu() {
        menuLateral.classList.add('open');
        fondoMenu.classList.remove('opacity-0', 'invisible');
        fondoMenu.classList.add('opacity-100', 'visible');
        document.body.style.overflow = 'hidden';
    }

    function cerrarMenu() {
        menuLateral.classList.remove('open');
        fondoMenu.classList.remove('opacity-100', 'visible');
        fondoMenu.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = '';
    }

    menu.addEventListener('click', abrirMenu);
    cerrar.addEventListener('click', cerrarMenu);
    fondoMenu.addEventListener('click', cerrarMenu);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuLateral.classList.contains('open')) {
            cerrarMenu();
        }
    });
});

// Animaciones Fade-up
document.addEventListener('DOMContentLoaded', function () {
    const elementosFade = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    elementosFade.forEach(element => {
        observer.observe(element);
    });
});

// Categorias mas jugadas
document.addEventListener('DOMContentLoaded', function () {
    const contenedorCategorias = document.getElementById('contenedor-categorias');

    const botonVerTodo = contenedorCategorias.querySelector('button');
    botonVerTodo.classList.add('active');

    categorias.forEach(categoria => {
        const button = document.createElement('button');
        button.textContent = categoria.nombre;
        button.dataset.categoria = categoria.nombre;
        contenedorCategorias.appendChild(button);
    });
});

// Los mas jugados
document.addEventListener('DOMContentLoaded', function () {
    const contenedorMasJugados = document.getElementById('contenedor-mas-jugados');
    const botonAnterior = document.getElementById('anterior-eventos');
    const botonSiguiente = document.getElementById('siguiente-eventos');
    const contenedorCategorias = document.getElementById('contenedor-categorias');

    if (!contenedorMasJugados || !botonAnterior || !botonSiguiente) return;

    const juegosMasJugados = juegos.filter(juego => juego.masJugado === true);
    let juegosFiltrados = [...juegosMasJugados];
    let indiceActual = 0;

    function generarTarjetas() {
        contenedorMasJugados.innerHTML = '';

        const esDesktop = window.innerWidth >= 1440;
        const juegosAMostrar = esDesktop ? juegosFiltrados.slice(0, 6) : juegosFiltrados;

        juegosAMostrar.forEach(juego => {
            const tarjeta = document.createElement('a');
            tarjeta.className = 'card-mas-jugado';
            tarjeta.href = '#';
            tarjeta.innerHTML = `
                <img src="./img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                <div class="card-content">
                    <span>${juego.categoria}</span>
                    <div class="card-info">
                        <h3>${juego.nombre}</h3>
                        <p>${juego.texto}</p>
                    </div>
                    <div class="card-footer">
                        <p class="explorar-text">Explorar</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="null" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6" />
                        </svg>
                    </div>
                </div>
            `;
            contenedorMasJugados.appendChild(tarjeta);
        });
    }

    function filtrarJuegos(categoria) {
        if (categoria === null) {
            juegosFiltrados = [...juegosMasJugados];
        } else {
            juegosFiltrados = juegosMasJugados.filter(juego => juego.categoria === categoria);
        }
        indiceActual = 0;
        generarTarjetas();
        actualizarCarousel();
    }

    function obtenerJuegosPorVista() {
        if (window.innerWidth >= 1080) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function obtenerIndiceMaximo() {
        const juegosPorVista = obtenerJuegosPorVista();
        return Math.max(0, juegosFiltrados.length - juegosPorVista);
    }

    function actualizarCarousel() {
        const primeraCard = contenedorMasJugados.querySelector('.card-mas-jugado');
        if (!primeraCard) return;

        const cardWidth = primeraCard.offsetWidth;

        const estilosContenedor = window.getComputedStyle(contenedorMasJugados);
        const gap = parseFloat(estilosContenedor.gap) || 16;

        const desplazamiento = indiceActual * (cardWidth + gap);

        contenedorMasJugados.style.transform = `translateX(-${desplazamiento}px)`;
    }

    function irSiguiente() {
        const indiceMaximo = obtenerIndiceMaximo();
        indiceActual = indiceActual >= indiceMaximo ? 0 : indiceActual + 1;
        actualizarCarousel();
    }

    function irAnterior() {
        const indiceMaximo = obtenerIndiceMaximo();
        indiceActual = indiceActual <= 0 ? indiceMaximo : indiceActual - 1;
        actualizarCarousel();
    }

    function manejarRedimension() {
        generarTarjetas();

        const indiceMaximo = obtenerIndiceMaximo();
        if (indiceActual > indiceMaximo) {
            indiceActual = indiceMaximo;
        }
        actualizarCarousel();
    }

    contenedorCategorias.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            contenedorCategorias.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active');

            const categoria = e.target.dataset.categoria || null;
            filtrarJuegos(categoria);
        }
    });

    generarTarjetas();

    botonSiguiente.addEventListener('click', irSiguiente);
    botonAnterior.addEventListener('click', irAnterior);
    window.addEventListener('resize', manejarRedimension);

    actualizarCarousel();
});

// Comparar precios
document.addEventListener('DOMContentLoaded', function () {
    const contenedorComparar = document.getElementById('contenedor-comparar');

    if (!contenedorComparar) return;

    function generarComparaciones() {
        contenedorComparar.innerHTML = '';

        comparaciones.forEach(comparacion => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'card-comparar';
            tarjeta.innerHTML = `
                <div>
                    <p>${comparacion.plataforma}</p>
                    <p>$${comparacion.precio}</p>
                </div>
                <ul>
                    ${comparacion.lista.map(item => `<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"/></svg>${item}</li>`).join('')}
                </ul>
                <a href="#" class="black-button">Comprar</a>
            `;
            contenedorComparar.appendChild(tarjeta);
        });
    }

    generarComparaciones();
});

// Como funciona
document.addEventListener('DOMContentLoaded', function () {
    const contenedorComoFunciona = document.getElementById('contenedor-como-funciona');

    if (!contenedorComoFunciona) return;

    function generarComoFunciona() {
        contenedorComoFunciona.innerHTML = '';

        comoFunciona.forEach(paso => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'card-como-funciona';
            tarjeta.innerHTML = `
                <img src="./img/home/${paso.titulo}.svg" alt="${paso.titulo}">
                <h3>${paso.titulo}</h3>
                <p>${paso.texto}</p>
            `;
            contenedorComoFunciona.appendChild(tarjeta);
        });
    }

    generarComoFunciona();
});

// Opiniones carousel
document.addEventListener('DOMContentLoaded', function () {
    const contenedorOpiniones = document.getElementById('contenedor-opiniones');
    const botonAnteriorOpiniones = document.getElementById('anterior-opiniones');
    const botonSiguienteOpiniones = document.getElementById('siguiente-opiniones');

    if (!contenedorOpiniones || !botonAnteriorOpiniones || !botonSiguienteOpiniones) return;

    function generarOpiniones() {
        contenedorOpiniones.innerHTML = '';

        opiniones.forEach(opinion => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'card-opinion';

            const estrellas = '★ '.repeat(opinion.estrellas);

            tarjeta.innerHTML = `
                <span class="estrellas">${estrellas}</span>
                <p>${opinion.texto}</p>
                <div class="autor">
                    <img src="./img/opiniones/${opinion.img}.webp" alt="${opinion.nombre}">
                    <div>
                        <p>${opinion.nombre}</p>
                        <p>${opinion.descripcion}</p>
                    </div>
                </div>
            `;
            contenedorOpiniones.appendChild(tarjeta);
        });
    }

    let indiceActual = 0;
    const totalOpiniones = opiniones.length;

    function obtenerOpinionesPorVista() {
        if (window.innerWidth >= 1080) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function obtenerIndiceMaximo() {
        const opinionesPorVista = obtenerOpinionesPorVista();
        return Math.max(0, totalOpiniones - opinionesPorVista);
    }

    function actualizarCarousel() {
        const opinionesPorVista = obtenerOpinionesPorVista();
        const anchoSlide = 100 / opinionesPorVista;
        contenedorOpiniones.style.transform = `translateX(-${indiceActual * anchoSlide}%)`;
    }

    function irSiguiente() {
        const indiceMaximo = obtenerIndiceMaximo();
        indiceActual = indiceActual >= indiceMaximo ? 0 : indiceActual + 1;
        actualizarCarousel();
    }

    function irAnterior() {
        const indiceMaximo = obtenerIndiceMaximo();
        indiceActual = indiceActual <= 0 ? indiceMaximo : indiceActual - 1;
        actualizarCarousel();
    }

    function manejarRedimension() {
        const indiceMaximo = obtenerIndiceMaximo();
        if (indiceActual > indiceMaximo) {
            indiceActual = indiceMaximo;
        }
        actualizarCarousel();
    }

    generarOpiniones();

    botonSiguienteOpiniones.addEventListener('click', irSiguiente);
    botonAnteriorOpiniones.addEventListener('click', irAnterior);
    window.addEventListener('resize', manejarRedimension);

    actualizarCarousel();
});

// Búsqueda de juegos - Modal
document.addEventListener('DOMContentLoaded', function () {
    const inputBusqueda = document.getElementById('search');
    const botonesAbrirModal = document.querySelectorAll('.abrir-modal');

    if (!inputBusqueda) return;

    const modalBusqueda = document.createElement('div');
    modalBusqueda.className = 'search-modal';
    modalBusqueda.innerHTML = `
        <div class="search-modal-content">
            <div class="search-modal-header">
                <input type="text" id="search-modal-input" placeholder="Buscar juegos...">
                <button class="search-modal-close">&times;</button>
            </div>
            <div class="search-modal-results"></div>
        </div>
    `;
    document.body.appendChild(modalBusqueda);

    const inputModal = modalBusqueda.querySelector('#search-modal-input');
    const botonCerrar = modalBusqueda.querySelector('.search-modal-close');
    const contenedorResultados = modalBusqueda.querySelector('.search-modal-results');
    let timeoutBusqueda;

    function abrirModal(e) {
        if (e) e.preventDefault();
        modalBusqueda.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => inputModal.focus(), 100);
    }

    inputBusqueda.addEventListener('focus', abrirModal);

    botonesAbrirModal.forEach(boton => {
        boton.addEventListener('click', abrirModal);
    });

    function cerrarModal() {
        modalBusqueda.classList.remove('active');
        document.body.style.overflow = '';
        inputModal.value = '';
        contenedorResultados.innerHTML = '';
    }

    botonCerrar.addEventListener('click', cerrarModal);

    modalBusqueda.addEventListener('click', function (e) {
        if (e.target === modalBusqueda) {
            cerrarModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalBusqueda.classList.contains('active')) {
            cerrarModal();
        }
    });

    inputModal.addEventListener('input', function (e) {
        const terminoBusqueda = e.target.value.trim().toLowerCase();

        clearTimeout(timeoutBusqueda);

        if (terminoBusqueda.length === 0) {
            contenedorResultados.innerHTML = `
                <div class="search-empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
                    </svg>
                    <p>Comienza a escribir para buscar juegos</p>
                </div>
            `;
            return;
        }

        if (terminoBusqueda.length < 2) {
            return;
        }

        timeoutBusqueda = setTimeout(() => {
            const resultados = juegos.filter(juego => {
                return juego.nombreBusqueda.includes(terminoBusqueda) ||
                    juego.nombre.toLowerCase().includes(terminoBusqueda);
            });

            if (resultados.length === 0) {
                contenedorResultados.innerHTML = `
                    <div class="search-no-results">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        <p>No se encontraron juegos para "<strong>${terminoBusqueda}</strong>"</p>
                    </div>
                `;
                return;
            }

            contenedorResultados.innerHTML = `
                <div class="search-results-header">
                    <p>${resultados.length} ${resultados.length === 1 ? 'resultado' : 'resultados'} para "<strong>${terminoBusqueda}</strong>"</p>
                </div>
                <div class="search-results-grid">
                    ${resultados.map(juego => `
                        <div class="search-result-item" data-juego="${juego.img}">
                            <img src="./img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                            <div class="search-result-info">
                                <div>
                                    <h4>${juego.nombre}</h4>
                                    <span class="search-result-category">${juego.categoria}</span>
                                </div>
                                <div class="search-result-meta">
                                    ${juego.freeToPlay ? '<span class="badge free">FREE TO PLAY</span>' : `<span class="badge price">$${juego.precio} USD</span>`}
                                    ${juego.masJugado ? '<span class="badge featured">MÁS JUGADO</span>' : ''}
                                    ${juego.masVendido ? '<span class="badge bestseller">MÁS VENDIDO</span>' : ''}
                                    ${juego.proximamente ? '<span class="badge coming-soon">PRÓXIMAMENTE</span>' : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            contenedorResultados.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function () {
                    const juegoId = this.dataset.juego;
                    console.log('Juego seleccionado:', juegoId);
                    // Redirigir a juego
                    // window.location.href = `./pages/juego.html?id=${juegoId}`;
                    cerrarModal();
                });
            });
        }, 300);
    });
});

// Modal Comunidad
document.addEventListener('DOMContentLoaded', function () {
    const btnUnirse = document.getElementById('btn-unirse');
    const modalComunidad = document.getElementById('modal-comunidad');
    const modalExito = document.getElementById('modal-exito');
    const cerrarModalComunidad = document.getElementById('cerrar-modal-comunidad');
    const cerrarModalExito = document.getElementById('cerrar-modal-exito');
    const btnCerrarExito = document.getElementById('btn-cerrar-exito');
    const formComunidad = document.getElementById('form-comunidad');

    if (!btnUnirse || !modalComunidad || !modalExito || !formComunidad) return;

    function abrirModalComunidad(e) {
        e.preventDefault();
        modalComunidad.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function cerrarModalFormulario() {
        modalComunidad.classList.remove('active');
        document.body.style.overflow = '';
        formComunidad.reset();
        limpiarErrores();
    }

    function abrirModalExito() {
        modalExito.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function cerrarModalSucces() {
        modalExito.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Validación de campos
    function validarCampo(campo) {
        const valor = campo.value.trim();
        const errorSpan = document.getElementById(`error-${campo.id}`);

        if (valor === '') {
            campo.classList.add('error');
            errorSpan.textContent = 'Este campo es requerido';
            return false;
        }

        if (campo.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) {
                campo.classList.add('error');
                errorSpan.textContent = 'Ingresa un email con @ y . (punto)';
                return false;
            }
        }

        if (campo.id === 'nombre' || campo.id === 'apellido') {
            if (valor.length < 2) {
                campo.classList.add('error');
                errorSpan.textContent = 'Debe tener al menos 2 caracteres';
                return false;
            }
        }

        if (campo.id === 'comentario' && valor.length < 10) {
            campo.classList.add('error');
            errorSpan.textContent = 'Debe tener al menos 10 caracteres';
            return false;
        }

        campo.classList.remove('error');
        errorSpan.textContent = '';
        return true;
    }

    function limpiarErrores() {
        const campos = formComunidad.querySelectorAll('input, textarea');
        campos.forEach(campo => {
            campo.classList.remove('error');
            const errorSpan = document.getElementById(`error-${campo.id}`);
            if (errorSpan) errorSpan.textContent = '';
        });
    }

    const campos = formComunidad.querySelectorAll('input, textarea');
    campos.forEach(campo => {
        campo.addEventListener('blur', function() {
            validarCampo(this);
        });

        campo.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validarCampo(this);
            }
        });
    });

    formComunidad.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const email = document.getElementById('email');
        const comentario = document.getElementById('comentario');

        const nombreValido = validarCampo(nombre);
        const apellidoValido = validarCampo(apellido);
        const emailValido = validarCampo(email);
        const comentarioValido = validarCampo(comentario);

        if (nombreValido && apellidoValido && emailValido && comentarioValido) {
            console.log('Formulario enviado con éxito:');
            console.log({
                nombre: nombre.value.trim(),
                apellido: apellido.value.trim(),
                email: email.value.trim(),
                comentario: comentario.value.trim()
            });

            cerrarModalFormulario();
            setTimeout(() => {
                abrirModalExito();
            }, 300);
        }
    });

    btnUnirse.addEventListener('click', abrirModalComunidad);
    cerrarModalComunidad.addEventListener('click', cerrarModalFormulario);
    cerrarModalExito.addEventListener('click', cerrarModalSucces);
    btnCerrarExito.addEventListener('click', cerrarModalSucces);

    modalComunidad.addEventListener('click', function(e) {
        if (e.target === modalComunidad) {
            cerrarModalFormulario();
        }
    });

    modalExito.addEventListener('click', function(e) {
        if (e.target === modalExito) {
            cerrarModalSucces();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modalComunidad.classList.contains('active')) {
                cerrarModalFormulario();
            }
            if (modalExito.classList.contains('active')) {
                cerrarModalSucces();
            }
        }
    });
});