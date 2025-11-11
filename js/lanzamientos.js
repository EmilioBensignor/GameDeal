const estrenos = [
    {
        nombre: "Star Wars Outlaws",
        fecha: "30 de Agosto",
        fechaCompleta: "2025-08-30",
        descripcion: "Sigue al proscrito legendario de la galaxia. La esperada continuación de esta épica saga de ciencia ficción."
    },
    {
        nombre: "Assassin's Creed Mirage",
        fecha: "05 de Octubre",
        fechaCompleta: "2025-10-05",
        descripcion: "Sumérgete en la historia de un orden antiguo. Una nueva experiencia en la franquicia de acción histórica."
    },
    {
        nombre: "Hollow Knight: Silksong",
        fecha: "11 de Noviembre",
        fechaCompleta: "2025-11-11",
        descripcion: "Continúa la aventura en el reino corrompido. El esperado regreso del clásico indie de plataformas."
    }
];

function cargarEstrenos() {
    const estrenoslista = document.getElementById("estrenos-lista");

    estrenos.forEach(estreno => {
        const estenoHTML = document.createElement("div");
        estenoHTML.className = "estreno-item";
        estenoHTML.innerHTML = `
            <div class="estreno-fecha">
                <span class="dia">${estreno.fecha.split(" ")[0]}</span>
                <span class="mes">${estreno.fecha.split(" ")[2]}</span>
            </div>
            <div class="estreno-contenido">
                <h3>${estreno.nombre}</h3>
                <p>${estreno.descripcion}</p>
            </div>
        `;
        estrenoslista.appendChild(estenoHTML);
    });
}

function obtener10JuegosAleatorios() {
    const juegosAleatorios = [];
    const indices = new Set();

    while (indices.size < Math.min(10, juegos.length)) {
        const indiceAleatorio = Math.floor(Math.random() * juegos.length);
        indices.add(indiceAleatorio);
    }

    indices.forEach(indice => {
        juegosAleatorios.push(juegos[indice]);
    });

    return juegosAleatorios;
}

function cargarCarruselEstrenos() {
    const juegosAleatorios = obtener10JuegosAleatorios();
    const carouselImages = document.getElementById("carousel-images");
    const carouselDots = document.getElementById("carousel-dots");

    juegosAleatorios.forEach((juego, index) => {
        const imgDiv = document.createElement("div");
        imgDiv.className = "carousel-item";
        if (index === 0) imgDiv.classList.add("active");

        const img = document.createElement("img");
        img.src = `../img/juegos/${juego.img}.webp`;
        img.alt = juego.nombre;

        imgDiv.appendChild(img);
        carouselImages.appendChild(imgDiv);
    });

    juegosAleatorios.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "carousel-dot";
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => irASlide(index));
        carouselDots.appendChild(dot);
    });
}

let currentSlide = 0;
let totalSlides = 10;

function irASlide(index) {
    const slides = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".carousel-dot");

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    if (slides[index]) {
        slides[index].classList.add("active");
        dots[index].classList.add("active");
        currentSlide = index;
    }
}

function siguienteSlide() {
    const slides = document.querySelectorAll(".carousel-item");
    totalSlides = slides.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    irASlide(currentSlide);
}

function slideAnterior() {
    const slides = document.querySelectorAll(".carousel-item");
    totalSlides = slides.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    irASlide(currentSlide);
}

function inicializarLanzamientos() {
    cargarEstrenos();
    cargarCarruselEstrenos();
    inicializarCarousel();
    inicializarNewsletter();
}

function inicializarCarousel() {
    const prevBtn = document.getElementById("prev-carousel");
    const nextBtn = document.getElementById("next-carousel");

    console.log("prevBtn:", prevBtn);
    console.log("nextBtn:", nextBtn);

    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            slideAnterior();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            siguienteSlide();
        });
    }
}

function inicializarNewsletter() {
    const btnRecibir = document.getElementById("btn-recibir-lanzamientos");
    const emailInput = document.getElementById("email-lanzamientos");
    const errorMsg = document.getElementById("error-email-lanzamientos");
    const modalExito = document.getElementById("modal-exito-lanzamientos");
    const cerrarModal = document.getElementById("cerrar-modal-lanzamientos");

    if (btnRecibir) {
        btnRecibir.addEventListener("click", (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();

            if (!email) {
                errorMsg.textContent = "Por favor ingresá tu correo electrónico.";
                errorMsg.style.display = "block";
                return;
            }

            if (!validarEmail(email)) {
                errorMsg.textContent = "Por favor ingresá un correo válido.";
                errorMsg.style.display = "block";
                return;
            }

            errorMsg.style.display = "none";
            abrirModalExito();
            emailInput.value = "";
        });
    }

    if (cerrarModal) {
        cerrarModal.addEventListener("click", cerrarModalExito);
    }

    if (modalExito) {
        modalExito.addEventListener("click", (e) => {
            if (e.target === modalExito) {
                cerrarModalExito();
            }
        });
    }
}

function abrirModalExito() {
    const modalExito = document.getElementById("modal-exito-lanzamientos");
    if (modalExito) {
        modalExito.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function cerrarModalExito() {
    const modalExito = document.getElementById("modal-exito-lanzamientos");
    if (modalExito) {
        modalExito.classList.remove("active");
        document.body.style.overflow = "";
    }
}

document.addEventListener("DOMContentLoaded", inicializarLanzamientos);

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
