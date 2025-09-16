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
        categoria: "Cooperativo",
        nombre: "Split Fiction",
        texto: "Vive una historia surreal compartida, donde cada jugador percibe mundos diferentes y debe colaborar."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Cooperativo",
        nombre: "Split Fiction",
        texto: "Vive una historia surreal compartida, donde cada jugador percibe mundos diferentes y debe colaborar."
    },
    {
        img: "Juego-Placeholder",
        categoria: "Cooperativo",
        nombre: "Split Fiction",
        texto: "Vive una historia surreal compartida, donde cada jugador percibe mundos diferentes y debe colaborar."
    },
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
        texto: "Gracias a esta plataforma encontré Elden Ring mucho más barato que en Steam. Súper fácil comparar precios.",
        img: "Opinion-Placeholder",
        nombre: "Juan Pérez",
        descripcion: "Gamer, Argentina"
    },
    {
        estrellas: 5,
        texto: "Gracias a esta plataforma encontré Elden Ring mucho más barato que en Steam. Súper fácil comparar precios.",
        img: "Opinion-Placeholder",
        nombre: "Juan Pérez",
        descripcion: "Gamer, Argentina"
    },
    {
        estrellas: 5,
        texto: "Gracias a esta plataforma encontré Elden Ring mucho más barato que en Steam. Súper fácil comparar precios.",
        img: "Opinion-Placeholder",
        nombre: "Juan Pérez",
        descripcion: "Gamer, Argentina"
    },
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

    categorias.forEach(categoria => {
        const button = document.createElement('button');
        button.textContent = categoria.nombre;
        contenedorCategorias.appendChild(button);
    });
});

// Los mas jugados
document.addEventListener('DOMContentLoaded', function () {
    const contenedorMasJugados = document.getElementById('contenedor-mas-jugados');
    const botonAnterior = document.getElementById('anterior-eventos');
    const botonSiguiente = document.getElementById('siguiente-eventos');

    if (!contenedorMasJugados || !botonAnterior || !botonSiguiente) return;

    function generarTarjetas() {
        contenedorMasJugados.innerHTML = '';

        juegosMasJugados.forEach(juego => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'card-mas-jugado';
            tarjeta.innerHTML = `
                <img src="./img/home/${juego.img}.png" alt="${juego.nombre}">
                <div>
                    <span>${juego.categoria}</span>
                    <div>
                        <h3>${juego.nombre}</h3>
                        <p>${juego.texto}</p>
                    </div>
                </div>
                <a href="#">Explorar
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6" />
                    </svg>
                </a>
            `;
            contenedorMasJugados.appendChild(tarjeta);
        });
    }

    let indiceActual = 0;
    const totalJuegos = juegosMasJugados.length;

    function obtenerJuegosPorVista() {
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function obtenerIndiceMaximo() {
        const juegosPorVista = obtenerJuegosPorVista();
        return Math.max(0, totalJuegos - juegosPorVista);
    }

    function actualizarCarousel() {
        const juegosPorVista = obtenerJuegosPorVista();
        const anchoSlide = 100 / juegosPorVista;
        contenedorMasJugados.style.transform = `translateX(-${indiceActual * anchoSlide}%)`;
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

    function actualizarCarousel() {
        contenedorOpiniones.style.transform = `translateX(-${indiceActual * 100}%)`;
    }

    function irSiguiente() {
        indiceActual = indiceActual >= totalOpiniones - 1 ? 0 : indiceActual + 1;
        actualizarCarousel();
    }

    function irAnterior() {
        indiceActual = indiceActual <= 0 ? totalOpiniones - 1 : indiceActual - 1;
        actualizarCarousel();
    }

    generarOpiniones();

    botonSiguienteOpiniones.addEventListener('click', irSiguiente);
    botonAnteriorOpiniones.addEventListener('click', irAnterior);

    actualizarCarousel();
});