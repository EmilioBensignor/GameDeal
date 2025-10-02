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

// Juegos mas jugados
const juegosMasJugados = [
    {
        img: "Juego-Placeholder",
        categoria: "Aventura",
        nombre: "The Last of Us Part II",
        texto: "Una historia épica de supervivencia en un mundo post-apocalíptico lleno de emociones intensas."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Acción",
        nombre: "Call of Duty: Modern Warfare",
        texto: "Intensos combates tácticos con gráficos realistas y modos multijugador emocionantes."
    },
    {
        img: "Juego-Placeholder",
        categoria: "RPG",
        nombre: "Elden Ring",
        texto: "Un vasto mundo abierto lleno de misterios, combates desafiantes y exploración épica."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Deportes",
        nombre: "FIFA 24",
        texto: "El simulador de fútbol más realista con equipos oficiales y modos de juego variados."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Simulación",
        nombre: "Microsoft Flight Simulator",
        texto: "Experimenta la sensación de volar con la simulación más realista del mundo."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Estrategia",
        nombre: "Civilization VI",
        texto: "Construye un imperio que resista el paso del tiempo con estrategia por turnos."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Carreras",
        nombre: "Forza Horizon 5",
        texto: "Carreras arcade en un mundo abierto espectacular en México con cientos de vehículos."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Lucha",
        nombre: "Mortal Kombat 11",
        texto: "Combates brutales con movimientos fatales icónicos y una narrativa cinematográfica."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Puzzle",
        nombre: "Portal 2",
        texto: "Resuelve acertijos ingeniosos usando portales en este juego de lógica y humor."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Terror",
        nombre: "Resident Evil Village",
        texto: "Horror de supervivencia con atmósfera tenebrosa y enemigos aterradores."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Plataformas",
        nombre: "Celeste",
        texto: "Plataformas desafiante con una historia conmovedora sobre superación personal."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Aventura",
        nombre: "God of War Ragnarök",
        texto: "Kratos y Atreus enfrentan el destino en esta épica aventura de mitología nórdica."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Acción",
        nombre: "Spider-Man 2",
        texto: "Balancea por Nueva York como Peter Parker y Miles Morales en esta secuela espectacular."
    },
    {
        img: "Juego-Placeholder",
        categoria: "RPG",
        nombre: "Baldur's Gate 3",
        texto: "RPG de mundo abierto con decisiones profundas y combate táctico basado en D&D."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Deportes",
        nombre: "NBA 2K24",
        texto: "Vive la experiencia del baloncesto profesional con gráficos y jugabilidad realistas."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Aventura",
        nombre: "Uncharted 4",
        texto: "Acompaña a Nathan Drake en su última aventura llena de tesoros y peligros."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Acción",
        nombre: "DOOM Eternal",
        texto: "Acción frenética contra hordas de demonios con un arsenal devastador."
    },
    {
        img: "Juego-Placeholder",
        categoria: "RPG",
        nombre: "The Witcher 3",
        texto: "Explora un mundo de fantasía oscura como Geralt de Rivia en esta aventura épica."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Deportes",
        nombre: "F1 2024",
        texto: "Compite en el campeonato de Fórmula 1 con las escuderías y pilotos oficiales."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Simulación",
        nombre: "The Sims 4",
        texto: "Crea y controla personas virtuales en un simulador de vida sin límites."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Simulación",
        nombre: "Cities: Skylines",
        texto: "Construye y gestiona la ciudad de tus sueños en este simulador urbano."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Estrategia",
        nombre: "StarCraft II",
        texto: "Domina la galaxia con estrategia en tiempo real en este clásico de eSports."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Estrategia",
        nombre: "Age of Empires IV",
        texto: "Construye imperios y conquista civilizaciones en este RTS legendario."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Carreras",
        nombre: "Gran Turismo 7",
        texto: "El simulador de conducción más realista con cientos de vehículos auténticos."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Carreras",
        nombre: "Mario Kart 8 Deluxe",
        texto: "Carreras arcade divertidas con personajes icónicos de Nintendo."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Lucha",
        nombre: "Street Fighter 6",
        texto: "Combates competitivos con mecánicas renovadas y roster diverso."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Lucha",
        nombre: "Tekken 8",
        texto: "El rey de los juegos de lucha 3D regresa con gráficos impresionantes."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Puzzle",
        nombre: "Tetris Effect",
        texto: "Tetris como nunca antes con música y efectos visuales hipnóticos."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Puzzle",
        nombre: "The Witness",
        texto: "Explora una isla misteriosa resolviendo cientos de rompecabezas interconectados."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Terror",
        nombre: "Silent Hill 2 Remake",
        texto: "Revive la pesadilla psicológica más icónica del survival horror."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Terror",
        nombre: "Outlast",
        texto: "Sobrevive en un asilo abandonado sin armas, solo tu cámara y tu ingenio."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Plataformas",
        nombre: "Super Mario Odyssey",
        texto: "Viaja por reinos coloridos en la mejor aventura 3D de Mario."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Plataformas",
        nombre: "Hollow Knight",
        texto: "Explora un reino subterráneo lleno de secretos y combates desafiantes."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Aventura",
        nombre: "Horizon Forbidden West",
        texto: "Explora un mundo post-apocalíptico lleno de máquinas y misterios antiguos."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Aventura",
        nombre: "Red Dead Redemption 2",
        texto: "Vive la épica historia de un forajido en el salvaje oeste americano."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Acción",
        nombre: "Devil May Cry 5",
        texto: "Combate demoníaco estilizado con combos espectaculares y acción frenética."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Acción",
        nombre: "Hades",
        texto: "Roguelike de acción donde escapas del inframundo griego una y otra vez."
    },
    {
        img: "Juego-Placeholder",
        categoria: "RPG",
        nombre: "Final Fantasy XVI",
        texto: "Épica aventura de fantasía con combate en tiempo real y historia cinematográfica."
    },
    {
        img: "Juego-Placeholder",
        categoria: "RPG",
        nombre: "Starfield",
        texto: "Explora la galaxia en esta épica aventura espacial de mundo abierto."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Deportes",
        nombre: "EA Sports FC 24",
        texto: "La nueva era del fútbol virtual con mecánicas mejoradas y realismo total."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Deportes",
        nombre: "Rocket League",
        texto: "Fútbol con autos acrobáticos en partidas competitivas y caóticas."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Simulación",
        nombre: "Farming Simulator 22",
        texto: "Administra tu propia granja con maquinaria auténtica y cultivos variados."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Simulación",
        nombre: "Planet Coaster",
        texto: "Diseña y administra el parque de atracciones de tus sueños."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Estrategia",
        nombre: "XCOM 2",
        texto: "Táctica por turnos liderando la resistencia contra una invasión alienígena."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Estrategia",
        nombre: "Total War: Warhammer III",
        texto: "Estrategia épica combinando batallas masivas en tiempo real y gestión por turnos."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Carreras",
        nombre: "Need for Speed Unbound",
        texto: "Carreras callejeras con estilo artístico único y personalización extrema."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Carreras",
        nombre: "Dirt Rally 2.0",
        texto: "Rally realista que pone a prueba tus habilidades en terrenos desafiantes."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Lucha",
        nombre: "Super Smash Bros. Ultimate",
        texto: "El crossover de lucha definitivo con personajes icónicos de Nintendo y más."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Lucha",
        nombre: "Dragon Ball FighterZ",
        texto: "Combates 2D espectaculares con personajes de Dragon Ball en estilo anime."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Puzzle",
        nombre: "Baba Is You",
        texto: "Rompecabezas innovador donde manipulas las reglas del juego mismo."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Puzzle",
        nombre: "Return of the Obra Dinn",
        texto: "Misterio de deducción único ambientado en un barco fantasma del siglo XIX."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Terror",
        nombre: "Dead Space Remake",
        texto: "Terror espacial con atmósfera claustrofóbica y criaturas horripilantes."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Terror",
        nombre: "Amnesia: The Bunker",
        texto: "Survival horror en un búnker de la Primera Guerra Mundial con amenaza constante."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Plataformas",
        nombre: "Cuphead",
        texto: "Plataformas y shoot 'em up con estética de caricaturas vintage."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Plataformas",
        nombre: "Ori and the Will of the Wisps",
        texto: "Metroidvania hermoso con mecánicas fluidas y historia emotiva."
    }
];

// Comparar
const comparaciones = [
    {
        plataforma: "Steam",
        precio: "49,99",
        lista: [
            "Compra oficial y segura",
            "Soporte completo de la plataforma",
            "Actualizaciones automáticas",
        ],
    },
    {
        plataforma: "Steam",
        precio: "49,99",
        lista: [
            "Compra oficial y segura",
            "Soporte completo de la plataforma",
            "Actualizaciones automáticas",
        ],
    },
    {
        plataforma: "Steam",
        precio: "49,99",
        lista: [
            "Compra oficial y segura",
            "Soporte completo de la plataforma",
            "Actualizaciones automáticas",
        ],
    },
];

// Como funciona
const comoFunciona = [
    {
        img: "Como-funciona-Placeholder",
        titulo: "Buscar",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
        img: "Como-funciona-Placeholder",
        titulo: "Comparar",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
        img: "Como-funciona-Placeholder",
        titulo: "Ahorrar",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
];

// Opiniones
const opiniones = [
    {
        estrellas: 5,
        texto: "Gracias a esta plataforma encontré Elden Ring mucho más barato que en Steam. Súper fácil comparar precios.",
        img: "Opinion-Placeholder",
        nombre: "Juan Pérez",
        descripcion: "Gamer, Argentina"
    },
    {
        estrellas: 5,
        texto: "Increíble la diferencia de precios entre tiendas. Me ahorré casi $20 en mi último juego.",
        img: "Opinion-Placeholder",
        nombre: "María González",
        descripcion: "Streamer, México"
    },
    {
        estrellas: 4,
        texto: "La interfaz es muy intuitiva y me ayudó a encontrar las mejores ofertas rápidamente.",
        img: "Opinion-Placeholder",
        nombre: "Carlos Rodríguez",
        descripcion: "Developer, España"
    },
    {
        estrellas: 5,
        texto: "Siempre reviso los precios aquí antes de comprar. Ya me ahorré más de $100 este año.",
        img: "Opinion-Placeholder",
        nombre: "Ana Martínez",
        descripcion: "Gamer, Chile"
    },
    {
        estrellas: 5,
        texto: "Perfecta para encontrar ofertas. La recomiendo a todos mis amigos gamers.",
        img: "Opinion-Placeholder",
        nombre: "Luis Torres",
        descripcion: "Pro Player, Colombia"
    },
    {
        estrellas: 4,
        texto: "Me encanta poder ver todas las tiendas en un solo lugar. Ahorro tiempo y dinero.",
        img: "Opinion-Placeholder",
        nombre: "Sofia Ramírez",
        descripcion: "Diseñadora, Uruguay"
    },
    {
        estrellas: 5,
        texto: "Desde que uso esta plataforma puedo comprar más juegos con el mismo presupuesto.",
        img: "Opinion-Placeholder",
        nombre: "Diego Fernández",
        descripcion: "Estudiante, Perú"
    },
    {
        estrellas: 5,
        texto: "La función de comparación es genial. Nunca más pago de más por un juego.",
        img: "Opinion-Placeholder",
        nombre: "Valentina Silva",
        descripcion: "Content Creator, Bolivia"
    },
    {
        estrellas: 4,
        texto: "Muy útil para seguir las ofertas de mis juegos favoritos. Interfaz clara y rápida.",
        img: "Opinion-Placeholder",
        nombre: "Mateo López",
        descripcion: "Gamer, Ecuador"
    },
    {
        estrellas: 5,
        texto: "Excelente servicio. Encontré juegos que no sabía que existían y a precios increíbles.",
        img: "Opinion-Placeholder",
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
                <img src="./img/home/${juego.img}.png" alt="${juego.nombre}">
                <div class="card-content">
                    <span>${juego.categoria}</span>
                    <div>
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
                <img src="./img/home/${paso.img}.png" alt="${paso.titulo}">
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
                    <img src="./img/home/${opinion.img}.png" alt="${opinion.nombre}">
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