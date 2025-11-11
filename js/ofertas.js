const searchOfertasInput = document.getElementById('search-ofertas');
const buscarOfertasBtn = document.getElementById('buscar-ofertas');
const ofertasEmpty = document.getElementById('ofertas-empty');
const ofertasContent = document.getElementById('ofertas-content');
const ofertasGrid = document.getElementById('ofertas-grid');
const ofertasTitulo = document.getElementById('ofertas-titulo');
const ofertasSection = document.querySelector('.ofertas-seccion');
const heroSection = document.querySelector('.hero');
const header = document.querySelector('header');

function getHeaderHeight() {
    const width = window.innerWidth;

    if (width >= 1440) {
        return 128;
    } else if (width >= 1080) {
        return 120;
    } else if (width >= 768) {
        return 88;
    } else {
        return 80;
    }
}

function scrollToElement(element) {
    const headerHeight = getHeaderHeight();
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

function generarPreciosAleatorios(precioOriginal) {
    const precioMas5 = (precioOriginal * 1.05).toFixed(2);
    const precioMenos5 = (precioOriginal * 0.95).toFixed(2);

    const precios = [
        { precio: precioOriginal.toFixed(2), plataforma: 'Steam' },
        { precio: precioMas5, plataforma: 'G2A' },
        { precio: precioMenos5, plataforma: 'Epic Games' }
    ];

    return precios.sort(() => Math.random() - 0.5);
}

function buscarOferta(termino) {
    if (!termino.trim()) {
        alert('Por favor ingresá un término de búsqueda');
        return;
    }

    const terminoLower = termino.toLowerCase();
    const resultados = juegos.filter(juego =>
        juego.nombreBusqueda.includes(terminoLower)
    );

    if (resultados.length === 0) {
        alert('No se encontraron juegos con ese nombre');
        return;
    }

    const resultadosLimitados = resultados.slice(0, 3);

    mostrarResultados(resultadosLimitados);

    const dropdown = document.getElementById('ofertas-dropdown');
    if (dropdown) {
        dropdown.style.display = 'none';
    }

    setTimeout(() => {
        scrollToElement(ofertasSection);
    }, 100);
}

function mostrarResultados(juegosEncontrados) {
    ofertasEmpty.style.display = 'none';
    ofertasContent.style.display = 'block';

    ofertasTitulo.textContent = `Ofertas encontradas: ${juegosEncontrados.length}`;

    ofertasGrid.innerHTML = '';

    if (juegosEncontrados.length === 1) {
        ofertasGrid.classList.add('single-oferta');
    } else {
        ofertasGrid.classList.remove('single-oferta');
    }

    juegosEncontrados.forEach(juego => {
        const preciosAleatorios = generarPreciosAleatorios(juego.precio);

        const html = `
            <div class="oferta-card">
                <div class="oferta-imagen">
                    <img src="${prefixoImagenes}img/juegos/${juego.img}.webp" alt="${juego.nombre}" />
                    <span class="oferta-categoria">${juego.categoria}</span>
                </div>
                <div class="oferta-info">
                    <h3>${juego.nombre}</h3>
                    <p class="oferta-descripcion">${juego.texto.substring(0, 100)}...</p>
                    <div class="oferta-precios">
                        ${preciosAleatorios.map((p) => `
                            <div class="precio-box">
                                <span class="precio-plataforma">${p.plataforma}</span>
                                <span class="precio-valor">$${p.precio}</span>
                            </div>
                        `).join('')}
                    </div>
                    <a href="./juego.html?id=${juego.img}" class="primary-button">Ver detalles</a>
                </div>
            </div>
        `;

        ofertasGrid.innerHTML += html;
    });
}

function volverAlVacio() {
    ofertasEmpty.style.display = 'block';
    ofertasContent.style.display = 'none';
    searchOfertasInput.value = '';

    setTimeout(() => {
        scrollToElement(heroSection);
    }, 100);
}

function mostrarDropdownBusqueda(terminoBusqueda) {
    if (!terminoBusqueda.trim()) {
        ocultarDropdownBusqueda();
        return;
    }

    const terminoLower = terminoBusqueda.toLowerCase();
    const resultados = juegos.filter(juego =>
        juego.nombreBusqueda.includes(terminoLower)
    ).slice(0, 3);

    if (resultados.length === 0) {
        ocultarDropdownBusqueda();
        return;
    }

    let dropdown = document.getElementById('ofertas-dropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'ofertas-dropdown';
        dropdown.className = 'ofertas-dropdown';
        const inputParent = searchOfertasInput.parentElement;
        inputParent.style.position = 'relative';
        inputParent.appendChild(dropdown);
    }

    dropdown.innerHTML = resultados.map(juego => `
        <div class="ofertas-dropdown-item" data-juego="${juego.img}">
            ${juego.nombre}
        </div>
    `).join('');

    dropdown.style.display = 'block';

    dropdown.querySelectorAll('.ofertas-dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const nombreJuego = item.textContent.trim();
            searchOfertasInput.value = nombreJuego;
            buscarOferta(nombreJuego);
        });
    });
}

function ocultarDropdownBusqueda() {
    const dropdown = document.getElementById('ofertas-dropdown');
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

buscarOfertasBtn.addEventListener('click', () => {
    buscarOferta(searchOfertasInput.value);
});

searchOfertasInput.addEventListener('input', (e) => {
    mostrarDropdownBusqueda(e.target.value);
});

searchOfertasInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarOferta(searchOfertasInput.value);
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero-ofertas')) {
        ocultarDropdownBusqueda();
    }
});

const emailOfertasInput = document.getElementById('email-ofertas');
const btnRecibirOfertas = document.getElementById('btn-recibir-ofertas');
const errorEmailOfertas = document.getElementById('error-email-ofertas');

if (emailOfertasInput && btnRecibirOfertas) {
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function mostrarError(mensaje) {
        errorEmailOfertas.textContent = mensaje;
        errorEmailOfertas.style.display = 'block';
    }

    function limpiarError() {
        errorEmailOfertas.textContent = '';
        errorEmailOfertas.style.display = 'none';
    }

    function mostrarExitoNewsletter() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'modal-exito-newsletter';
        modal.innerHTML = `
            <div class="modal-content modal-exito">
                <button class="modal-close" id="cerrar-modal-exito-newsletter">&times;</button>
                <div class="exito-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#6FFFE9" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                    </svg>
                </div>
                <h2>¡Te has suscrito exitosamente!</h2>
            </div>
        `;

        document.body.appendChild(modal);

        setTimeout(() => {
            modal.classList.add('active');
        }, 10);

        const closeBtn = document.getElementById('cerrar-modal-exito-newsletter');

        const cerrarModal = () => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                emailOfertasInput.value = '';
                limpiarError();
            }, 300);
        };

        if (closeBtn) closeBtn.addEventListener('click', cerrarModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                cerrarModal();
            }
        });
    }

    btnRecibirOfertas.addEventListener('click', () => {
        const email = emailOfertasInput.value.trim();

        if (!email) {
            mostrarError('Por favor ingresá tu correo electrónico');
            return;
        }

        if (!validarEmail(email)) {
            mostrarError('Por favor ingresá un correo electrónico válido');
            return;
        }

        limpiarError();

        mostrarExitoNewsletter();
    });

    emailOfertasInput.addEventListener('input', () => {
        if (emailOfertasInput.value.trim()) {
            limpiarError();
        }
    });

    emailOfertasInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            btnRecibirOfertas.click();
        }
    });
}
