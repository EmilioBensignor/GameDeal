const esEnPages = window.location.pathname.includes('/pages/');
const prefixoImagenes = esEnPages ? '../' : './';

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
        titulo: "Buscá",
        img: "Buscar",
        texto: "Ingresá el nombre del juego que querés en nuestro buscador. Encontrá títulos de todas las plataformas en segundos.",
    },
    {
        titulo: "Compará",
        img: "Comparar",
        texto: "Revisá precios en tiempo real de Steam, Epic Games, GOG y más tiendas. Filtrá por región y moneda para ver ofertas exactas.",
    },
    {
        titulo: "Ahorrá",
        img: "Ahorrar",
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

    if (!contenedorCategorias) return;

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
            tarjeta.href = `./pages/juego.html?id=${encodeURIComponent(juego.img)}`;
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

function generarPreciosDinamicos(precioBase) {
    const variaciones = [
        { porcentaje: -0.10, nombre: 'Steam' },
        { porcentaje: -0.05, nombre: 'Epic Games' },
        { porcentaje: 0.05, nombre: 'GOG' }
    ];

    return variaciones.map(v => ({
        plataforma: v.nombre,
        precio: (precioBase * (1 + v.porcentaje)).toFixed(2),
        lista: [
            v.nombre === 'Steam' ? "Biblioteca integrada en la nube" : "Juegos gratis todas las semanas",
            v.nombre === 'Steam' ? "Reembolsos hasta 14 días" : "Logros y sistema de recompensas",
            v.nombre === 'Steam' ? "Workshop con mods de la comunidad" : "Crossplay con otras plataformas",
        ],
    }));
}

function cortarDescripcion(texto) {
    if (!texto) return '';
    const primerPunto = texto.indexOf('.');
    if (primerPunto === -1) {
        return texto;
    }
    return texto.substring(0, primerPunto + 1);
}

// Comparar precios
document.addEventListener('DOMContentLoaded', function () {
    const contenedorComparar = document.getElementById('contenedor-comparar');

    if (!contenedorComparar) return;

    function generarComparaciones(precioBase = null) {
        contenedorComparar.innerHTML = '';

        const comparacionesAUsar = esEnPages && precioBase ? generarPreciosDinamicos(precioBase) : comparaciones;

        comparacionesAUsar.forEach(comparacion => {
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
                <a href="./ofertas.html" class="black-button">Comparar</a>
            `;
            contenedorComparar.appendChild(tarjeta);
        });
    }

    generarComparaciones();

    window.generarComparacionesConPrecio = generarComparaciones;
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
                <img src="./img/home/${paso.img}.svg" alt="${paso.titulo}">
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
                    <img src="${prefixoImagenes}img/opiniones/${opinion.img}.webp" alt="${opinion.nombre}">
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
                <button class="search-modal-close">&times;</button>
                <input type="text" id="search-modal-input" placeholder="Buscar juegos...">
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
                    <p>Empezá a escribir para buscar juegos</p>
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
                    window.location.href = `./pages/juego.html?id=${encodeURIComponent(juegoId)}`;
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
        campo.addEventListener('blur', function () {
            validarCampo(this);
        });

        campo.addEventListener('input', function () {
            if (this.classList.contains('error')) {
                validarCampo(this);
            }
        });
    });

    formComunidad.addEventListener('submit', function (e) {
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

    modalComunidad.addEventListener('click', function (e) {
        if (e.target === modalComunidad) {
            cerrarModalFormulario();
        }
    });

    modalExito.addEventListener('click', function (e) {
        if (e.target === modalExito) {
            cerrarModalSucces();
        }
    });

    document.addEventListener('keydown', function (e) {
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

// Carousel Catálogo
document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.getElementById('catalogo-carousel');

    if (!carouselContainer) return;

    const juegosIzquierda = ['elden-ring', 'call-of-duty-modern-warfare', 'fifa-26', 'uncharted-4', 'god-of-war-ragnarok', 'baldurs-gate-3', 'microsoft-flight-simulator', 'civilization-vi', 'starcraft-ii', 'age-of-empires-iv'];
    const juegosDerecha = ['gran-turismo-7', 'street-fighter-6', 'tetris-effect', 'portal-2', 'dead-space-remake', 'silent-hill-2-remake', 'hollow-knight', 'celeste', 'super-smash-bros-ultimate', 'mario-kart-8-deluxe'];

    function generarCarousel(juegosLeft, juegoRight) {
        const threeColumns = window.innerWidth >= 480;

        let htmlColumnas = '';

        if (threeColumns) {
            let html1 = '';
            const juegosPorColumna1 = [...juegosLeft, ...juegosLeft, ...juegosLeft];
            juegosPorColumna1.forEach(juegoId => {
                const juego = juegos.find(j => j.img === juegoId);
                if (juego) {
                    html1 += `
                        <div class="grid-item">
                            <img src="../img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                        </div>
                    `;
                }
            });

            let html2 = '';
            const juegosPorColumna2 = [...juegoRight, ...juegoRight, ...juegoRight];
            juegosPorColumna2.forEach(juegoId => {
                const juego = juegos.find(j => j.img === juegoId);
                if (juego) {
                    html2 += `
                        <div class="grid-item">
                            <img src="../img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                        </div>
                    `;
                }
            });

            let html3 = '';
            const usarColActual = Math.random() > 0.5;
            const juegosPorColumna3 = usarColActual
                ? [...juegoRight, ...juegoRight, ...juegoRight]
                : [...juegosLeft, ...juegosLeft, ...juegosLeft];
            juegosPorColumna3.forEach(juegoId => {
                const juego = juegos.find(j => j.img === juegoId);
                if (juego) {
                    html3 += `
                        <div class="grid-item">
                            <img src="../img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                        </div>
                    `;
                }
            });

            htmlColumnas = `
                <div class="grid-column grid-column-1">
                    ${html1}
                </div>
                <div class="grid-column grid-column-2">
                    ${html2}
                </div>
                <div class="grid-column grid-column-3">
                    ${html3}
                </div>
            `;
        } else {
            let htmlIzquierda = '';
            const juegosPorColumna = [...juegosLeft, ...juegosLeft];
            juegosPorColumna.forEach(juegoId => {
                const juego = juegos.find(j => j.img === juegoId);
                if (juego) {
                    htmlIzquierda += `
                        <div class="grid-item">
                            <img src="../img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                        </div>
                    `;
                }
            });

            let htmlDerecha = '';
            const juegosPorColumnaDerecha = [...juegoRight, ...juegoRight];
            juegosPorColumnaDerecha.forEach(juegoId => {
                const juego = juegos.find(j => j.img === juegoId);
                if (juego) {
                    htmlDerecha += `
                        <div class="grid-item">
                            <img src="../img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                        </div>
                    `;
                }
            });

            htmlColumnas = `
                <div class="grid-column grid-column-left">
                    ${htmlIzquierda}
                </div>
                <div class="grid-column grid-column-right">
                    ${htmlDerecha}
                </div>
            `;
        }

        carouselContainer.innerHTML = `
            <div class="hero-catalogo-grid">
                ${htmlColumnas}
            </div>
        `;
    }

    generarCarousel(juegosIzquierda, juegosDerecha);

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            generarCarousel(juegosIzquierda, juegosDerecha);
        }, 250);
    });
});

// Filtros Catálogo
document.addEventListener('DOMContentLoaded', function () {
    const botonesFiltro = document.querySelectorAll('.filtro-toggle');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (!targetElement) return;

            targetElement.classList.toggle('active');
            this.classList.toggle('active');
        });
    });
});

// Categorias Catálogo
document.addEventListener('DOMContentLoaded', function () {
    const contenedorCategorias = document.getElementById('filtro-categorias');

    if (!contenedorCategorias) return;

    categorias.forEach(categoria => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = categoria.nombre;

        label.appendChild(input);
        label.appendChild(document.createTextNode(categoria.nombre));
        contenedorCategorias.appendChild(label);
    });
});

// Catálogo Juegos
document.addEventListener('DOMContentLoaded', function () {
    const contenedorJuegos = document.getElementById('contenedor-juegos');
    const btnCargarMas = document.getElementById('btn-cargar-mas');
    const inputBusqueda = document.getElementById('filtro-buscar-juego');
    const filtroCategoriasContainer = document.getElementById('filtro-categorias');

    if (!contenedorJuegos || !btnCargarMas) return;

    let juegosMostrados = 0;
    let juegosFiltrados = [];
    let juegosInicial = [];

    function obtenerJuegosInicial() {
        return window.innerWidth >= 1080 ? 15 : 10;
    }

    function obtenerJuegosPorCarga() {
        return 6;
    }

    function obtenerJuegosAleatorios(cantidad) {
        const copia = [...juegos].sort(() => Math.random() - 0.5);
        return copia.slice(0, cantidad);
    }

    function filtrarJuegos() {
        let resultado = [...juegos];

        const termino = inputBusqueda.value.toLowerCase();
        if (termino) {
            resultado = resultado.filter(j =>
                j.nombre.toLowerCase().includes(termino) ||
                j.nombreBusqueda.includes(termino)
            );
        }

        const checkboxCategorias = Array.from(filtroCategoriasContainer.querySelectorAll('input[type="checkbox"]'));
        const categoriasSeleccionadas = checkboxCategorias
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        if (categoriasSeleccionadas.length > 0) {
            resultado = resultado.filter(j => categoriasSeleccionadas.includes(j.categoria));
        }

        const checkboxPrecios = Array.from(document.querySelectorAll('#filtro-precio input[type="checkbox"]'));
        const preciosSeleccionados = checkboxPrecios.filter(cb => cb.checked).map(cb => cb.value);
        if (preciosSeleccionados.length > 0) {
            resultado = resultado.filter(j => {
                if (preciosSeleccionados.includes('gratis') && j.freeToPlay) return true;
                if (preciosSeleccionados.includes('0-20') && j.precio > 0 && j.precio < 20) return true;
                if (preciosSeleccionados.includes('20-40') && j.precio >= 20 && j.precio < 40) return true;
                if (preciosSeleccionados.includes('40-60') && j.precio >= 40 && j.precio < 60) return true;
                if (preciosSeleccionados.includes('60+') && j.precio >= 60) return true;
                return false;
            });
        }

        const checkboxOtros = Array.from(document.querySelectorAll('#filtro-otros input[type="checkbox"]'));
        const otrosSeleccionados = checkboxOtros.filter(cb => cb.checked).map(cb => cb.value);
        if (otrosSeleccionados.length > 0) {
            resultado = resultado.filter(j => {
                if (otrosSeleccionados.includes('masJugado') && j.masJugado) return true;
                if (otrosSeleccionados.includes('freeToPlay') && j.freeToPlay) return true;
                if (otrosSeleccionados.includes('masVendido') && j.masVendido) return true;
                if (otrosSeleccionados.includes('proximamente') && j.proximamente) return true;
                return otrosSeleccionados.length === 0;
            });
        }

        if (!termino && categoriasSeleccionadas.length === 0 && preciosSeleccionados.length === 0 && otrosSeleccionados.length === 0) {
            juegosFiltrados = [...juegosInicial];
        } else {
            juegosFiltrados = resultado;
        }

        juegosMostrados = 0;
        renderizarJuegos();
    }

    function renderizarJuegos() {
        const juegosAMostrar = juegosFiltrados.slice(juegosMostrados, juegosMostrados + obtenerJuegosPorCarga());

        if (juegosMostrados === 0) {
            contenedorJuegos.innerHTML = '';
        }

        if (juegosAMostrar.length === 0 && juegosMostrados === 0) {
            contenedorJuegos.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: rgba(255,255,255,0.5);">No se encontraron juegos</p>';
            btnCargarMas.style.display = 'none';
            return;
        }

        juegosAMostrar.forEach(juego => {
            const link = document.createElement('a');
            link.href = `./juego.html?id=${encodeURIComponent(juego.img)}`;
            link.className = 'juego-card-link';

            const card = document.createElement('div');
            card.className = 'juego-card';

            let badgesHTML = '';
            if (juego.freeToPlay) {
                badgesHTML += '<span class="badge free">FREE TO PLAY</span>';
            } else {
                badgesHTML += `<span class="badge price">$${juego.precio} USD</span>`;
            }
            if (juego.masJugado) {
                badgesHTML += '<span class="badge featured">MÁS JUGADO</span>';
            }
            if (juego.masVendido) {
                badgesHTML += '<span class="badge bestseller">MÁS VENDIDO</span>';
            }
            if (juego.proximamente) {
                badgesHTML += '<span class="badge coming-soon">PRÓXIMAMENTE</span>';
            }

            card.innerHTML = `
                <img src="../img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                <div class="juego-card-info">
                    <div>
                        <h3>${juego.nombre}</h3>
                        <p class="juego-card-categoria">${juego.categoria}</p>
                    </div>
                    <div class="juego-card-meta">
                        ${badgesHTML}
                    </div>
                </div>
            `;
            link.appendChild(card);
            contenedorJuegos.appendChild(link);
        });

        juegosMostrados += obtenerJuegosPorCarga();

        if (juegosMostrados >= juegosFiltrados.length) {
            btnCargarMas.style.display = 'none';
        } else {
            btnCargarMas.style.display = 'block';
        }
    }

    inputBusqueda.addEventListener('input', filtrarJuegos);

    filtroCategoriasContainer.addEventListener('change', filtrarJuegos);
    document.getElementById('filtro-precio').addEventListener('change', filtrarJuegos);
    document.getElementById('filtro-otros').addEventListener('change', filtrarJuegos);

    btnCargarMas.addEventListener('click', renderizarJuegos);

    juegosInicial = obtenerJuegosAleatorios(obtenerJuegosInicial());
    juegosFiltrados = [...juegosInicial];
    renderizarJuegos();
});

// Página Juego
document.addEventListener('DOMContentLoaded', function () {
    const heroJuego = document.getElementById('hero-juego');

    if (!heroJuego) return;

    const params = new URLSearchParams(window.location.search);
    const juegoId = params.get('id');

    function mostrarErrorJuego(titulo = "Juego no encontrado", mensaje = "El juego que buscas no existe o el enlace es inválido.") {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.innerHTML = `
                <section class="error-juego" style="
                    min-height: 60vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                ">
                    <div style="
                        text-align: center;
                    ">
                        <h1 style="width: 100%;">${titulo}</h1>
                        <p style="
                            color: rgba(255, 255, 255, 0.8);
                            font-size: 1.1rem;
                            margin-bottom: 2rem;
                            line-height: 1.6;
                        ">${mensaje}</p>
                        <div style="
                            width: 100%;
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                        ">
                            <a href="./catalogo.html" class="primary-button" style="
                                padding: 1rem;
                                display: inline-block;
                                text-decoration: none;
                            ">Ir al Catálogo</a>
                            <a href="../index.html" class="black-button" style="
                                padding: 1rem;
                                display: inline-block;
                                text-decoration: none;
                            ">Volver a Home</a>
                        </div>
                    </div>
                </section>
            `;
        }
    }

    if (!juegoId) {
        mostrarErrorJuego("Juego no especificado", "Por favor selecciona un juego desde el catálogo o la página principal.");
        return;
    }

    const juegoSeleccionado = juegos.find(j => j.img === juegoId);

    if (!juegoSeleccionado) {
        mostrarErrorJuego("Juego no encontrado", `No encontramos el juego "${juegoId}". Intenta navegando desde el catálogo.`);
        return;
    }

    document.title = `GameDeal - ${juegoSeleccionado.nombre}`;

    document.getElementById('juego-titulo').textContent = juegoSeleccionado.nombre;

    const descripcionCortaElement = document.getElementById('juego-descripcion-corta');
    if (descripcionCortaElement) {
        descripcionCortaElement.textContent = cortarDescripcion(juegoSeleccionado.texto);
    }

    const imagenHero = document.createElement('img');
    imagenHero.src = `../img/juegos/${juegoSeleccionado.img}.webp`;
    imagenHero.alt = juegoSeleccionado.nombre;

    const imagenWrapper = document.getElementById('hero-juego-imagen');
    if (imagenWrapper) {
        imagenWrapper.innerHTML = '';
        imagenWrapper.appendChild(imagenHero);
    }

    document.getElementById('juego-categoria').textContent = juegoSeleccionado.categoria;

    if (juegoSeleccionado.informacion) {
        const infoBoxes = document.querySelectorAll('.juego-info-box');
        if (infoBoxes.length > 1) {
            const dl = infoBoxes[1].querySelector('dl');
            if (dl) {
                dl.innerHTML = `
                <dt>Categoría:</dt>
                <dd id="juego-categoria">${juegoSeleccionado.categoria}</dd>
                <dt>Desarrollador:</dt>
                <dd>${juegoSeleccionado.informacion.desarrollador || 'GameDeal Studio'}</dd>
                <dt>Editor:</dt>
                <dd>${juegoSeleccionado.informacion.editor || 'GameDeal'}</dd>
                <dt>Lanzamiento:</dt>
                <dd>${juegoSeleccionado.informacion.fechaLanzamiento || 'Próximamente'}</dd>
                <dt>Plataformas:</dt>
                <dd>${juegoSeleccionado.informacion.plataformas || 'PC, PlayStation, Xbox'}</dd>
                <dt>Duración:</dt>
                <dd>${juegoSeleccionado.informacion.duracionAproximada || '10-20 horas'}</dd>
                <dt>Idiomas:</dt>
                <dd>${juegoSeleccionado.informacion.idiomas || 'Español, Inglés'}</dd>
            `;
            }
        }
    }

    if (juegoSeleccionado.freeToPlay) {
        document.getElementById('juego-precio').textContent = 'GRATIS';
        if (window.generarComparacionesConPrecio) {
            window.generarComparacionesConPrecio(0);
        }
    } else {
        document.getElementById('juego-precio').textContent = `$${juegoSeleccionado.precio.toFixed(2)}`;
        if (window.generarComparacionesConPrecio) {
            window.generarComparacionesConPrecio(juegoSeleccionado.precio);
        }
    }

    const badgesContainer = document.getElementById('juego-badges');
    if (badgesContainer) {
        badgesContainer.innerHTML = '';

        if (juegoSeleccionado.freeToPlay) {
            const badge = document.createElement('span');
            badge.className = 'badge free';
            badge.textContent = 'FREE TO PLAY';
            badgesContainer.appendChild(badge);
        }

        if (juegoSeleccionado.masJugado) {
            const badge = document.createElement('span');
            badge.className = 'badge featured';
            badge.textContent = 'MÁS JUGADO';
            badgesContainer.appendChild(badge);
        }

        if (juegoSeleccionado.masVendido) {
            const badge = document.createElement('span');
            badge.className = 'badge bestseller';
            badge.textContent = 'MÁS VENDIDO';
            badgesContainer.appendChild(badge);
        }

        if (juegoSeleccionado.proximamente) {
            const badge = document.createElement('span');
            badge.className = 'badge coming-soon';
            badge.textContent = 'PRÓXIMAMENTE';
            badgesContainer.appendChild(badge);
        }
    }

    const caracteristicasContainer = document.getElementById('juego-caracteristicas');
    if (caracteristicasContainer) {
        caracteristicasContainer.innerHTML = '';

        if (juegoSeleccionado.caracteristicas && juegoSeleccionado.caracteristicas.length > 0) {
            juegoSeleccionado.caracteristicas.forEach(caracteristica => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${caracteristica.titulo}</strong><small>${caracteristica.texto}</small>`;
                caracteristicasContainer.appendChild(li);
            });
        } else {
            const caracteristicasDefault = [
                `Categoría: ${juegoSeleccionado.categoria}`,
                'Gráficos de alta calidad',
                'Múltiples modos de juego'
            ];
            caracteristicasDefault.forEach(caracteristica => {
                const li = document.createElement('li');
                li.textContent = caracteristica;
                caracteristicasContainer.appendChild(li);
            });
        }
    }

    const juegosRelacionados = juegos
        .filter(j => j.categoria === juegoSeleccionado.categoria && j.img !== juegoSeleccionado.img)
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

    const relacionadosContainer = document.getElementById('juegos-relacionados-container');
    if (relacionadosContainer) {
        relacionadosContainer.innerHTML = '';

        juegosRelacionados.forEach(juego => {
            const link = document.createElement('a');
            link.href = `./juego.html?id=${encodeURIComponent(juego.img)}`;
            link.className = 'juego-card-link';

            const card = document.createElement('div');
            card.className = 'juego-card';

            let badgesHTML = '';
            if (juego.freeToPlay) {
                badgesHTML += '<span class="badge free">FREE TO PLAY</span>';
            } else {
                badgesHTML += `<span class="badge price">$${juego.precio} USD</span>`;
            }
            if (juego.masJugado) {
                badgesHTML += '<span class="badge featured">MÁS JUGADO</span>';
            }
            if (juego.masVendido) {
                badgesHTML += '<span class="badge bestseller">MÁS VENDIDO</span>';
            }

            card.innerHTML = `
                <img src="../img/juegos/${juego.img}.webp" alt="${juego.nombre}">
                <div class="juego-card-info">
                    <div>
                        <h3>${juego.nombre}</h3>
                        <p class="juego-card-categoria">${juego.categoria}</p>
                    </div>
                    <div class="juego-card-meta">
                        ${badgesHTML}
                    </div>
                </div>
            `;
            link.appendChild(card);
            relacionadosContainer.appendChild(link);
        });
    }

    if (juegoSeleccionado.puntaje) {
        const puntajeElement = document.getElementById('juego-puntaje');
        const estrellasElement = document.getElementById('juego-estrellas');

        if (puntajeElement) {
            puntajeElement.textContent = juegoSeleccionado.puntaje.toFixed(1);
        }

        if (estrellasElement) {
            const puntaje = Math.round(juegoSeleccionado.puntaje);
            let estrellas = '★'.repeat(puntaje) + '☆'.repeat(5 - puntaje);
            estrellasElement.textContent = estrellas;
        }
    }

    if (juegoSeleccionado.cantidadReviews) {
        const cantidadElement = document.getElementById('juego-cantidad-reviews');
        if (cantidadElement) {
            const formato = new Intl.NumberFormat('es-ES').format(juegoSeleccionado.cantidadReviews);
            cantidadElement.textContent = formato;
        }
    }
});
