// Juegos
const juegos = [
    {
        img: "the-last-of-us",
        categoria: "Aventura",
        nombre: "The Last of Us",
        nombreBusqueda: "the last of us",
        texto: "Sumérgete en una historia épica de supervivencia que redefine el género. En un mundo post-apocalíptico devastado por una pandemia fúngica, acompaña a Joel, un contrabandista endurecido, y a Ellie, una adolescente inmune al virus, en un viaje emocional a través de un Estados Unidos en ruinas. Esta obra maestra narrativa de Naughty Dog combina acción intensa, sigilo estratégico y supervivencia con recursos limitados, mientras exploras ciudades abandonadas llenas de infectados y bandas de sobrevivientes desesperados. Con actuaciones capturadas por movimiento que te harán sentir cada emoción, diseño sonoro ganador de premios y una banda sonora inolvidable, The Last of Us te llevará a través de una montaña rusa emocional donde cada decisión cuenta y las relaciones humanas son lo único que mantiene la esperanza viva en un mundo sin futuro.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.5,
        cantidadReviews: 15234,
        caracteristicas: [
            {
                titulo: "Historia",
                texto: "Una narrativa profundamente emotiva que explora la relación entre Joel y Ellie mientras atraviesan un Estados Unidos post-pandémico. Decisiones morales complejas y personajes memorables."
            },
            {
                titulo: "Jugabilidad",
                texto: "Combina elementos de sigilo, acción y supervivencia. Recursos limitados que obligan a pensar estratégicamente cada encuentro con enemigos infectados y humanos hostiles."
            },
            {
                titulo: "Atmósfera",
                texto: "Ambientación post-apocalíptica impresionante con entornos detallados que cuentan historias. Diseño sonoro excepcional que intensifica la tensión en cada momento."
            }
        ],
        informacion: {
            desarrollador: "Naughty Dog",
            editor: "Sony Interactive Entertainment",
            fechaLanzamiento: "14 de junio de 2013",
            genero: "Aventura, Acción, Supervivencia",
            plataformas: "PlayStation 3, PlayStation 4, PlayStation 5, PC",
            duracionAproximada: "15-20 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés"
        },
        tiempoJuego: {
            historiaPrincipal: 15,
            historiaExtra: 20,
            speedrunLogros: 35,
            completacionista: 45
        }
    },
    {
        img: "call-of-duty-modern-warfare",
        categoria: "Acción",
        nombre: "Call of Duty: Modern Warfare",
        nombreBusqueda: "call of duty modern warfare cod",
        texto: "Experimenta el combate moderno como nunca antes en este reinicio visceral de la franquicia que lo inició todo. Modern Warfare te lleva a través de operaciones encubiertas en zonas de conflicto internacional con una campaña cinematográfica moralmente compleja que desafía la línea entre héroe y villano. El modo multijugador revoluciona la serie con mapas tácticos diseñados para promover estrategias creativas, armamento completamente personalizable con más de 50 armas y accesorios, y el innovador modo Ground War que presenta batallas masivas de 64 jugadores con vehículos terrestres y aéreos. El motor gráfico de nueva generación ofrece visuales fotorrealistas con iluminación dinámica, efectos de partículas impresionantes y animaciones capturadas por movimiento que hacen que cada tiroteo se sienta auténtico y brutal. Incluye el modo cooperativo Spec Ops y acceso al Battle Royale Warzone, creando el paquete FPS más completo del mercado.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.3,
        cantidadReviews: 28456,
        caracteristicas: [
            {
                titulo: "Combate Táctico",
                texto: "Sistema de combate realista con mecánicas de puntería avanzadas, balística precisa y armamento moderno completamente personalizable."
            },
            {
                titulo: "Multijugador",
                texto: "Amplia variedad de modos competitivos y cooperativos con mapas dinámicos. Ground War, Warzone y modos tácticos para todos los estilos."
            },
            {
                titulo: "Gráficos",
                texto: "Motor gráfico de nueva generación con iluminación realista, efectos de partículas impresionantes y animaciones capturadas por movimiento."
            }
        ],
        informacion: {
            desarrollador: "Infinity Ward",
            editor: "Activision",
            fechaLanzamiento: "25 de octubre de 2019",
            genero: "Acción, Shooter, Táctica",
            plataformas: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, PC",
            duracionAproximada: "6-8 horas (Campaña)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 6,
            historiaExtra: 8,
            speedrunLogros: 25,
            completacionista: 50
        }
    },
    {
        img: "elden-ring",
        categoria: "RPG",
        nombre: "Elden Ring",
        nombreBusqueda: "elden ring",
        texto: "Del visionario Hidetaka Miyazaki y el aclamado autor George R.R. Martin llega la evolución definitiva del género Souls-like. Las Tierras Intermedias te esperan con un mundo abierto masivo lleno de secretos ancestrales, mazmorras ocultas y jefes épicos que pondrán a prueba tu habilidad como nunca antes. Elden Ring combina la libertad de exploración total con el combate táctico y desafiante característico de FromSoftware, donde cada enemigo requiere estrategia, timing perfecto y dominio de tu arsenal. Crea tu propio Sinluz personalizando atributos, habilidades mágicas, armas legendarias y estilo de combate entre cientos de opciones. Cabalga a través de praderas doradas, explora castillos imponentes, descubre catacumbas subterráneas y enfrenta a dragones antiguos en paisajes que van desde bosques místicos hasta ciudades en ruinas. Con combate montado, invocaciones de espíritus, cooperativo online y narrativa fragmentada que se revela poco a poco, este es el RPG de acción definitivo que redefine el género con su perfecta fusión de mundo abierto, desafío hardcore y libertad creativa total.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 45892,
        caracteristicas: [
            {
                titulo: "Mundo Abierto",
                texto: "Las Tierras Intermedias ofrecen exploración sin precedentes con mazmorras ocultas, secretos por descubrir y paisajes épicos que invitan a la aventura constante."
            },
            {
                titulo: "Combate Desafiante",
                texto: "Sistema de combate profundo heredado de Dark Souls con nuevas mecánicas. Cada enemigo requiere estrategia, timing perfecto y dominio de armas y habilidades."
            },
            {
                titulo: "Personalización",
                texto: "Creación de personaje con múltiples clases, estilos de combate, construcciones de habilidades y equipamiento. Cada partida puede ser completamente única."
            }
        ],
        informacion: {
            desarrollador: "FromSoftware",
            editor: "Bandai Namco Entertainment",
            fechaLanzamiento: "25 de febrero de 2022",
            genero: "RPG, Acción, Mundo Abierto, Souls-like",
            plataformas: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, PC",
            duracionAproximada: "50-80 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 55,
            historiaExtra: 80,
            speedrunLogros: 120,
            completacionista: 140
        }
    },
    {
        img: "fifa-26",
        categoria: "Deportes",
        nombre: "FIFA 26",
        nombreBusqueda: "fifa 26 football soccer",
        texto: "Vive el fútbol como nunca antes con la entrega más avanzada de la serie que define el género deportivo. FIFA 26 revoluciona el realismo con el motor HyperMotion 3 que captura movimientos de más de 6,000 animaciones únicas de partidos reales, creando una fluidez y autenticidad nunca vista en un juego de fútbol. Controla a tus estrellas favoritas en más de 700 equipos licenciados oficialmente, desde los gigantes europeos hasta ligas emergentes de todo el mundo, jugando en más de 100 estadios recreados con precisión fotográfica que capturan la atmósfera única de cada país. El modo Ultimate Team alcanza nuevas alturas con eventos semanales temáticos, desafíos de construcción de plantillas y la posibilidad de crear tu equipo de ensueño mezclando leyendas históricas con las estrellas actuales del deporte. El renovado modo Carrera te permite vivir tu sueño como jugador o manager, con sistemas de desarrollo mejorados, entrevistas interactivas y decisiones que afectan tu legado. Con física de balón mejorada, tácticas personalizables al detalle y jugabilidad que respeta cada aspecto del deporte rey, FIFA 26 es la simulación futbolística definitiva.",
        precio: 69.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: true,
        puntaje: 4.0,
        cantidadReviews: 8234,
        caracteristicas: [
            {
                titulo: "Realismo",
                texto: "Motor HyperMotion 3 con física mejorada, animaciones capturadas de partidos reales y movimientos de jugadores más fluidos y realistas que nunca."
            },
            {
                titulo: "Licencias Oficiales",
                texto: "Más de 700 equipos, 30 ligas oficiales y los mejores jugadores del mundo. Estadios auténticos con atmósferas únicas de cada país."
            },
            {
                titulo: "Ultimate Team",
                texto: "Construye tu equipo de ensueño combinando leyendas y estrellas actuales. Nuevos eventos, desafíos semanales y modo de competición mejorado."
            }
        ],
        informacion: {
            desarrollador: "EA Vancouver",
            editor: "Electronic Arts",
            fechaLanzamiento: "27 de septiembre de 2025",
            genero: "Deportes, Simulación, Fútbol",
            plataformas: "PlayStation 5, Xbox Series X|S, PC, Nintendo Switch",
            duracionAproximada: "Ilimitada (Multijugador)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Holandés, Ruso, Árabe"
        },
        tiempoJuego: {
            historiaPrincipal: 10,
            historiaExtra: 30,
            speedrunLogros: 100,
            completacionista: 500
        }
    },
    {
        img: "microsoft-flight-simulator",
        categoria: "Simulación",
        nombre: "Microsoft Flight Simulator",
        nombreBusqueda: "microsoft flight simulator",
        texto: "Alza el vuelo en la simulación de aviación más ambiciosa y fotorrealista jamás creada, que transforma todo el planeta Tierra en tu campo de juego. Utilizando tecnología de última generación con datos satelitales de Bing Maps y Azure AI, Microsoft Flight Simulator recrea 2 petabytes de datos geográficos del mundo real con 37,000 aeropuertos meticulosamente modelados, 2 millones de ciudades y paisajes que van desde las selvas amazónicas hasta los desiertos del Sahara, todos renderizados en tiempo real con condiciones climáticas auténticas que incluyen tormentas, nieve, niebla y formaciones de nubes volumétricas. Pilotea desde aviones ligeros Cessna hasta jets comerciales Boeing 747 y aviones históricos militares, cada uno con cabinas completamente interactivas donde cada interruptor, palanca y sistema funciona exactamente como en la vida real. La física de vuelo avanzada simula aerodinámica precisa, turbulencias, efectos de viento y más de 20 variables atmosféricas. Ya sea que quieras sobrevolar tu propia casa, aterrizar en el aeropuerto más peligroso del mundo o cruzar el Atlántico en un viaje transoceánico de 8 horas, esta simulación te ofrece experiencias de aviación auténticas e inolvidables.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.6,
        cantidadReviews: 12890,
        caracteristicas: [
            {
                titulo: "Realismo Extremo",
                texto: "Simulación de vuelo más avanzada del mundo con física aerodinámica precisa, sistemas de aeronaves completamente funcionales y condiciones climáticas en tiempo real."
            },
            {
                titulo: "Mundo Completo",
                texto: "Todo el planeta Tierra recreado con 37,000 aeropuertos, 2 millones de ciudades y paisajes fotorrealistas generados con datos satelitales de Bing Maps."
            },
            {
                titulo: "Variedad de Aeronaves",
                texto: "Desde aviones ligeros hasta jets comerciales y aviones históricos. Cada aeronave con cabinas detalladas y sistemas completamente simulados."
            }
        ],
        informacion: {
            desarrollador: "Asobo Studio",
            editor: "Xbox Game Studios",
            fechaLanzamiento: "18 de agosto de 2020",
            genero: "Simulación, Vuelo",
            plataformas: "PC, Xbox Series X|S",
            duracionAproximada: "Ilimitada",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 20,
            historiaExtra: 50,
            speedrunLogros: 100,
            completacionista: 200
        }
    },
    {
        img: "civilization-vi",
        categoria: "Estrategia",
        nombre: "Civilization VI",
        nombreBusqueda: "civilization vi civ 6",
        texto: "Lidera tu civilización desde la edad de piedra hasta la era espacial en el juego de estrategia por turnos más profundo y adictivo jamás creado. Sid Meier's Civilization VI te pone al mando de naciones legendarias lideradas por figuras históricas como Cleopatra, Gandhi, Teddy Roosevelt o Gilgamesh, cada una con habilidades únicas, unidades especiales y bonificaciones que transforman completamente tu estilo de juego. Gestiona todos los aspectos de tu imperio: explora territorios desconocidos, establece ciudades estratégicamente para aprovechar recursos naturales, desarrolla tecnologías desde la rueda hasta la inteligencia artificial, fomenta las artes y la cultura, establece religiones y difúndelas por el mundo, negocia alianzas diplomáticas complejas y lidera ejércitos en batallas tácticas. El innovador sistema de distritos te permite expandir ciudades físicamente por el mapa, especializando áreas en ciencia, cultura, producción industrial o maravillas arquitectónicas que alteran la geografía. Con cinco caminos hacia la victoria—dominación militar, victoria científica espacial, supremacía cultural, conversión religiosa o triunfo diplomático—cada partida ofrece centenares de horas de rejugabilidad donde tus decisiones moldean el curso de la historia humana.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.5,
        cantidadReviews: 18765,
        caracteristicas: [
            {
                titulo: "Estrategia Profunda",
                texto: "Construye tu civilización desde la edad de piedra hasta la era espacial. Gestiona recursos, diplomacia, tecnología, cultura y expansión territorial con decisiones significativas."
            },
            {
                titulo: "Múltiples Victorias",
                texto: "Cinco formas diferentes de ganar: dominación militar, victoria científica, cultural, religiosa o diplomática. Cada partida puede desarrollarse de manera única."
            },
            {
                titulo: "Civilizaciones Únicas",
                texto: "Más de 50 líderes históricos con habilidades especiales, unidades únicas y bonificaciones. Desde Cleopatra hasta Gandhi, cada civilización tiene su estilo."
            }
        ],
        informacion: {
            desarrollador: "Firaxis Games",
            editor: "2K Games",
            fechaLanzamiento: "21 de octubre de 2016",
            genero: "Estrategia, Por turnos, 4X",
            plataformas: "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
            duracionAproximada: "Variable (20-100+ horas por partida)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 30,
            historiaExtra: 60,
            speedrunLogros: 150,
            completacionista: 300
        }
    },
    {
        img: "forza-horizon-5",
        categoria: "Carreras",
        nombre: "Forza Horizon 5",
        nombreBusqueda: "forza horizon 5",
        texto: "Embárcate en el festival de carreras más espectacular del planeta en el increíble escenario de México, donde cada kilómetro es una postal viviente que va desde playas paradisíacas del Caribe hasta las alturas nevadas de volcanes activos. Forza Horizon 5 presenta el mapa más grande, diverso y vibrante de la serie, con biomas que incluyen junglas densas, desiertos áridos, ciudades coloniales históricas, ruinas mayas antiguas y cañones impresionantes, todos renderizados con gráficos de siguiente generación que aprovechan al máximo el poder del Xbox Series X|S. Elige entre más de 500 vehículos legendarios licenciados oficialmente, desde clásicos vintage hasta los superdeportivos más extremos y bestias todoterreno, cada uno modelado con detalles obsesivos y personalizable con miles de opciones de pinturas, vinilos, mejoras de rendimiento y afinación. El modo Horizonte te permite explorar libremente, descubrir tesoros escondidos, realizar acrobacias épicas y participar en eventos dinámicos que cambian con las estaciones en tiempo real. Compite en carreras callejeras ilegales, rallies offroad brutales, circuitos profesionales y desafíos de velocidad mientras construyes tu colección de autos, personaliza tu avatar y creas tu casa de ensueño en paraísos mexicanos exclusivos.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 34567,
        caracteristicas: [
            {
                titulo: "México Vibrante",
                texto: "Explora paisajes diversos desde playas tropicales hasta desiertos áridos, junglas densas y ciudades coloniales. El mapa más grande y variado de la serie."
            },
            {
                titulo: "Cientos de Autos",
                texto: "Más de 500 vehículos licenciados de las marcas más prestigiosas. Desde superdeportivos hasta todo terreno, cada auto se siente único y personalizable."
            },
            {
                titulo: "Eventos Dinámicos",
                texto: "Carreras, desafíos, expediciones y eventos comunitarios en constante actualización. Estaciones cambiantes que transforman el mundo y las condiciones de carrera."
            }
        ],
        informacion: {
            desarrollador: "Playground Games",
            editor: "Xbox Game Studios",
            fechaLanzamiento: "9 de noviembre de 2021",
            genero: "Carreras, Arcade, Mundo Abierto",
            plataformas: "Xbox One, Xbox Series X|S, PC",
            duracionAproximada: "25-30 horas (Historia principal)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 25,
            historiaExtra: 50,
            speedrunLogros: 100,
            completacionista: 150
        }
    },
    {
        img: "mortal-kombat-11",
        categoria: "Lucha",
        nombre: "Mortal Kombat 11",
        nombreBusqueda: "mortal kombat 11 mk11",
        texto: "La franquicia de lucha más brutal y visceral alcanza nuevas alturas de violencia cinematográfica en su undécima entrega. Mortal Kombat 11 reinventa el combate competitivo con un sistema de mecánicas personalizables que permite ajustar cada aspecto de tus luchadores favoritos, desde sus movimientos especiales hasta sus brutales finishing moves. La campaña narrativa de 12 capítulos te lleva a través de una historia épica de viajes temporales donde versiones pasadas y presentes de guerreros legendarios como Scorpion, Sub-Zero, Raiden y Liu Kang se enfrentan para determinar el destino del universo. Con más de 25 personajes jugables, incluyendo luchadores invitados icónicos como The Terminator, Spawn y Joker, el juego ofrece combates técnicamente profundos con nuevas mecánicas como Fatal Blows devastadores y Krushing Blows cinematográficos. Los Fatalities más detallados y brutales jamás creados, con animaciones que aprovechan la tecnología de captura de movimiento y gráficos de última generación, garantizan que cada victoria sea un espectáculo memorable de gore artístico.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.4,
        cantidadReviews: 21345,
        caracteristicas: [
            {
                titulo: "Fatalities Brutales",
                texto: "Los finishing moves más elaborados y cinematográficos de la serie. Cada personaje cuenta con múltiples fatalities, brutalities y movimientos especiales únicos."
            },
            {
                titulo: "Historia Épica",
                texto: "Modo historia cinematográfico de 12 capítulos que expande el universo MK. Viajes en el tiempo, paradojas y batallas entre versiones antiguas y nuevas de los personajes."
            },
            {
                titulo: "Personalización",
                texto: "Sistema de personalización profundo con skins, equipamiento, intros y victorias. Cada luchador puede modificarse con cientos de opciones cosméticas."
            }
        ],
        informacion: {
            desarrollador: "NetherRealm Studios",
            editor: "Warner Bros. Interactive",
            fechaLanzamiento: "23 de abril de 2019",
            genero: "Lucha, Acción",
            plataformas: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, PC, Nintendo Switch",
            duracionAproximada: "8-10 horas (Historia)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés"
        },
        tiempoJuego: {
            historiaPrincipal: 8,
            historiaExtra: 15,
            speedrunLogros: 80,
            completacionista: 120
        }
    },
    {
        img: "portal-2",
        categoria: "Puzzle",
        nombre: "Portal 2",
        nombreBusqueda: "portal 2",
        texto: "La obra maestra de Valve que redefine los juegos de puzzle en primera persona con ingenio, humor y física imposible. Portal 2 te coloca en las ruinas de Aperture Science, donde deberás usar tu emblemática Portal Gun para resolver cámaras de prueba cada vez más complejas que desafían tu percepción del espacio tridimensional. El juego expande magistralmente el concepto del original con nuevos elementos como geles de propulsión, superficies repulsivas, rayos láser redirigibles, puentes de luz sólida y paneles aéreos de fe, todo mientras el villano más carismático de los videojuegos, GLaDOS, te insulta con diálogos escritos brillantemente que mezclan ciencia ficción distópica con comedia oscura británica. La campaña para un jugador te lleva por las instalaciones abandonadas desde los años 50 hasta las secciones modernas, revelando la historia oscura de Cave Johnson y Aperture Science, mientras el modo cooperativo diseña 40 cámaras únicas específicamente para dos jugadores donde Atlas y P-Body deben trabajar en equipo usando cuatro portales simultáneos para resolver puzzles imposibles de completar solo.",
        precio: 9.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.9,
        cantidadReviews: 56789,
        caracteristicas: [
            {
                titulo: "Puzzles Ingeniosos",
                texto: "Cámaras de prueba diseñadas brillantemente que requieren pensamiento lateral y uso creativo de portales, geles especiales, rayos láser y cubos complementarios."
            },
            {
                titulo: "Humor Inteligente",
                texto: "Diálogos escritos magistralmente con GLaDOS, Wheatley y Cave Johnson. Comedia oscura que mantiene entretenido entre puzzle y puzzle."
            },
            {
                titulo: "Cooperativo",
                texto: "Modo cooperativo único para dos jugadores con cámaras diseñadas específicamente para el trabajo en equipo. Robots Atlas y P-body con portales independientes."
            }
        ],
        informacion: {
            desarrollador: "Valve Corporation",
            editor: "Valve Corporation",
            fechaLanzamiento: "19 de abril de 2011",
            genero: "Puzzle, Primera persona, Ciencia ficción",
            plataformas: "PC, PlayStation 3, Xbox 360, macOS, Linux",
            duracionAproximada: "8-10 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 8,
            historiaExtra: 12,
            speedrunLogros: 20,
            completacionista: 25
        }
    },
    {
        img: "resident-evil-village",
        categoria: "Terror",
        nombre: "Resident Evil Village",
        nombreBusqueda: "resident evil village re8",
        texto: "Adéntrate en una pesadilla gótica europea donde el horror sobrenatural se encuentra con el terror visceral de supervivencia en la octava entrega principal de la saga Resident Evil. Tres años después de los eventos traumáticos de Resident Evil 7, Ethan Winters se ve arrastrado a un misterioso pueblo europeo plagado de criaturas licántropas y dominado por cuatro señores terroríficos bajo el mando de la enigmática Madre Miranda. El juego te lleva desde el infame castillo de Lady Dimitrescu y sus hijas vampíricas, pasando por la mansión de muñecas poseídas de Donna Beneviento (hogar de la sección más aterradora de la serie), hasta las cavernas infestadas del monstruoso Moreau y la fábrica industrial del ingeniero mecánico Heisenberg. Con gráficos impresionantes potenciados por el RE Engine, combate evolucionado que balancea perfectamente acción y horror, un arsenal diverso de armas actualizables, un misterioso comerciante conocido como El Duque, y una narrativa que mezcla elementos de terror gótico clásico con ciencia ficción bioterrorista, Village es una experiencia inolvidable que redefine el género.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.6,
        cantidadReviews: 29876,
        caracteristicas: [
            {
                titulo: "Atmósfera Terrorífica",
                texto: "Ambientación gótica en un pueblo europeo maldito. Casa Beneviento, el castillo Dimitrescu y otros escenarios que mantienen la tensión constante con excelente diseño sonoro."
            },
            {
                titulo: "Combate Mejorado",
                texto: "Evolución del sistema de RE7 con más acción y arsenal variado. Balance perfecto entre horror y combate contra licántropos, vampiros y criaturas grotescas."
            },
            {
                titulo: "Exploración",
                texto: "Diseño semi-abierto que permite explorar el pueblo y sus alrededores. Secretos ocultos, tesoros, mejoras de armas y objetos coleccionables por descubrir."
            }
        ],
        informacion: {
            desarrollador: "Capcom",
            editor: "Capcom",
            fechaLanzamiento: "7 de mayo de 2021",
            genero: "Terror, Survival Horror, Primera persona",
            plataformas: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, PC",
            duracionAproximada: "10-12 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 10,
            historiaExtra: 14,
            speedrunLogros: 30,
            completacionista: 40
        }
    },
    {
        img: "celeste",
        categoria: "Plataformas",
        nombre: "Celeste",
        nombreBusqueda: "celeste",
        texto: "Una joya indie aclamada universalmente que combina plataformas pixel-perfect brutalmente difíciles con una narrativa profundamente emotiva sobre salud mental y superación personal. Acompaña a Madeline en su ascenso a la cima de la Montaña Celeste, enfrentando no solo desafíos físicos que requieren timing milimétrico y reflejos de acero, sino también sus propios demonios internos literalmente manifestados. Cada uno de los ocho capítulos principales presenta mecánicas nuevas e innovadoras, desde nubes que te impulsan hasta bloques de hielo resbaladizos y plumas que te permiten volar brevemente, todo diseñado con una precisión quirúrgica que hace que cada muerte (y morirás miles de veces) se sienta justa y cada victoria absolutamente satisfactoria. El juego respeta a jugadores de todos los niveles con un modo Assist totalmente personalizable, mientras ofrece niveles B-Side, C-Side y el capítulo Farewell adicional para los masoquistas que buscan el desafío definitivo. Con una banda sonora excepcional de Lena Raine que captura perfectamente cada momento emocional, arte pixel hermoso y un mensaje positivo sobre aceptar tus imperfecciones, Celeste trasciende su género para convertirse en una experiencia verdaderamente transformadora.",
        precio: 19.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 23456,
        caracteristicas: [
            {
                titulo: "Plataformas Precisas",
                texto: "Controles perfectamente ajustados con mecánicas simples pero profundas. Dash, escalada y saltos que requieren precisión milimétrica y timing perfecto."
            },
            {
                titulo: "Historia Emotiva",
                texto: "Narrativa conmovedora sobre ansiedad, depresión y superación personal. Madeline escala la Montaña Celeste enfrentando sus demonios internos de forma literal y metafórica."
            },
            {
                titulo: "Desafío Justo",
                texto: "Dificultad alta pero justa con checkpoints generosos y respawn instantáneo. Niveles B y C-Side para los jugadores que buscan el desafío extremo."
            }
        ],
        informacion: {
            desarrollador: "Maddy Makes Games",
            editor: "Maddy Makes Games",
            fechaLanzamiento: "25 de enero de 2018",
            genero: "Plataformas, Indie, Pixel Art",
            plataformas: "PC, PlayStation 4, Xbox One, Nintendo Switch",
            duracionAproximada: "8-10 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 8,
            historiaExtra: 12,
            speedrunLogros: 35,
            completacionista: 50
        }
    },
    {
        img: "god-of-war-ragnarok",
        categoria: "Aventura",
        nombre: "God of War Ragnarök",
        nombreBusqueda: "god of war ragnarok",
        texto: "El apocalipsis nórdico llega en la épica conclusión de la saga escandinava de Kratos, donde padre e hijo deben enfrentar a los dioses del Asgard en la batalla que determinará el destino de los Nueve Reinos. Ragnarök expande todo lo que hizo grande a su predecesor con combate más profundo y visceral que te permite alternar fluidamente entre las icónicas Espadas del Caos llameantes y el poderoso Leviatán helado, ahora complementados con nuevas habilidades devastadoras y enemigos épicos que incluyen a Thor en su forma más intimidante y brutal jamás vista, y Odín interpretado magistralmente como el villano manipulador definitivo. Explora los Nueve Reinos con libertad sin precedentes desde los gélidos paisajes de Midgard hasta los exuberantes campos de Vanaheim y las impresionantes alturas doradas del Asgard, resolviendo puzzles ambientales complejos, descubriendo secretos mitológicos y enfrentando criaturas legendarias en un mundo visualmente impresionante sin una sola pantalla de carga. La relación entre Kratos y Atreus evoluciona de formas profundas y emotivas mientras el joven busca su propia identidad, con actuaciones capturadas por movimiento que rivalizan con el mejor cine, todo orquestado por Bear McCreary con una banda sonora memorable.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 41234,
        caracteristicas: [
            {
                titulo: "Mitología Nórdica",
                texto: "Exploración profunda de los nueve reinos con Kratos y Atreus. Encuentros con dioses como Thor, Odin y Freya en una narrativa que mezcla acción con drama familiar."
            },
            {
                titulo: "Combate Evolucionado",
                texto: "Sistema de combate perfeccionado con las Espadas del Caos y el Leviatán. Nuevos enemigos, jefes épicos y combos devastadores con mecánicas fluidas y satisfactorias."
            },
            {
                titulo: "Gráficos Impresionantes",
                texto: "Visuales de siguiente generación sin pantallas de carga. Entornos detallados desde helados glaciares hasta reinos místicos, captura de actuación cinematográfica."
            }
        ],
        informacion: {
            desarrollador: "Santa Monica Studio",
            editor: "Sony Interactive Entertainment",
            fechaLanzamiento: "9 de noviembre de 2022",
            genero: "Aventura, Acción, Mitología",
            plataformas: "PlayStation 4, PlayStation 5, PC",
            duracionAproximada: "25-30 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 25,
            historiaExtra: 35,
            speedrunLogros: 60,
            completacionista: 70
        }
    },
    {
        img: "spider-man-2",
        categoria: "Acción",
        nombre: "Spider-Man 2",
        nombreBusqueda: "spider-man 2 spiderman",
        texto: "Balancea entre los rascacielos de Nueva York más grande y viva que nunca en la secuela definitiva de superhéroes que te permite controlar tanto a Peter Parker como a Miles Morales en una historia épica que explora el lado oscuro del poder. La ciudad se expande más allá de Manhattan para incluir Brooklyn y Queens completamente explorables con mecánicas de traversal mejoradas que incluyen las revolucionarias Web Wings para planear entre edificios, haciendo que el movimiento por la ciudad sea la experiencia más fluida y satisfactoria jamás creada en un juego de Spider-Man. Peter obtiene el simbionte alienígena que le otorga poderes oscuros y devastadores pero corrompe su personalidad, mientras Miles debe dominar completamente sus habilidades bio-eléctricas únicas para convertirse en el héroe que la ciudad necesita. Enfrenta a un elenco de villanos icónicos liderados por Kraven el Cazador en su interpretación más brutal y amenazante, y el aterrador Venom en toda su gloria simbiótica con un diseño que hará temblar hasta a los fans más valientes. Con gráficos de siguiente generación exclusivos de PS5, ray-tracing impresionante, tiempos de carga casi instantáneos y combate refinado que combina las habilidades únicas de ambos Spider-Man, esta es la experiencia superheroica definitiva.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 38901,
        caracteristicas: [
            {
                titulo: "Dos Spider-Man",
                texto: "Alterna entre Peter Parker y Miles Morales, cada uno con habilidades únicas. El simbionte le da a Peter nuevos poderes oscuros mientras Miles domina sus habilidades bio-eléctricas."
            },
            {
                titulo: "Nueva York Expandida",
                texto: "Manhattan completo más Brooklyn y Queens. Ciudad viva con actividades, crímenes aleatorios, misiones secundarias y rascacielos para balancearse como nunca antes."
            },
            {
                titulo: "Villanos Icónicos",
                texto: "Enfréntate a Venom, Kraven, Lagarto y otros villanos clásicos en batallas cinematográficas. Historia que explora el lado oscuro del poder y la responsabilidad."
            }
        ],
        informacion: {
            desarrollador: "Insomniac Games",
            editor: "Sony Interactive Entertainment",
            fechaLanzamiento: "20 de octubre de 2023",
            genero: "Acción, Aventura, Superhéroes, Mundo Abierto",
            plataformas: "PlayStation 5",
            duracionAproximada: "18-22 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 18,
            historiaExtra: 25,
            speedrunLogros: 45,
            completacionista: 55
        }
    },
    {
        img: "baldurs-gate-3",
        categoria: "RPG",
        nombre: "Baldur's Gate 3",
        nombreBusqueda: "baldurs gate 3 bg3",
        texto: "El RPG definitivo que establece un nuevo estándar para el género con su ambición sin límites, narrativa ramificada incomparable y fidelidad absoluta al sistema de Dungeons & Dragons 5ta edición. Creado por Larian Studios con una pasión obsesiva por los detalles, Baldur's Gate 3 te infecta con un parásito de mind flayer que amenaza con transformarte en un illithid, forzándote a embarcarte en una aventura épica a través de los Reinos Olvidados donde cada decisión tiene consecuencias reales y duraderas. Crea tu personaje desde cero eligiendo entre 12 clases, 46 subclases y 11 razas con origen personalizado, o selecciona uno de los compañeros pre-diseñados con historias complejas y arcos narrativos profundos. El combate por turnos implementa perfectamente las reglas de D&D con ventaja/desventaja, tiradas de dados visibles, interacción ambiental revolucionaria que te permite empujar enemigos por precipicios, electrocutarlos en agua, congelar superficies y usar el terreno creativamente. Con más de 174 horas de cinematográficas capturadas por movimiento, 17,000 variaciones finales posibles, romance con compañeros complejos, y cada problema resoluble de múltiples formas según tu construcción de personaje, BG3 redefine lo que significa libertad en un RPG.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.9,
        cantidadReviews: 52341,
        caracteristicas: [
            {
                titulo: "D&D 5e Auténtico",
                texto: "Implementación fiel del sistema de Dungeons & Dragons 5ta edición. Tiradas de dados, clases, hechizos y mecánicas exactas del juego de mesa con libertad total."
            },
            {
                titulo: "Narrativa Ramificada",
                texto: "Cada decisión importa con consecuencias reales que afectan la historia, compañeros y final. Cientos de horas de diálogo con múltiples soluciones para cada problema."
            },
            {
                titulo: "Combate Táctico",
                texto: "Sistema de combate por turnos profundo con entorno interactivo. Usa el terreno, elementos y creatividad para superar encuentros desafiantes contra enemigos variados."
            }
        ],
        informacion: {
            desarrollador: "Larian Studios",
            editor: "Larian Studios",
            fechaLanzamiento: "3 de agosto de 2023",
            genero: "RPG, Táctica, Fantasía, Por turnos",
            plataformas: "PC, PlayStation 5, Xbox Series X|S",
            duracionAproximada: "75-100 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 75,
            historiaExtra: 100,
            speedrunLogros: 150,
            completacionista: 200
        }
    },
    {
        img: "nba-2k26",
        categoria: "Deportes",
        nombre: "NBA 2K26",
        nombreBusqueda: "nba 2k26 basketball",
        texto: "La simulación de baloncesto más realista y completa jamás creada regresa con tecnología de siguiente generación que captura cada aspecto del deporte profesional con precisión fotorrealista. NBA 2K26 implementa un sistema ProPLAY revolucionario que traduce movimientos capturados de partidos reales de la NBA directamente al juego, resultando en animaciones fluidas y auténticas de las estrellas actuales como LeBron James, Stephen Curry, Giannis Antetokounmpo y Luka Dončić. El modo MyCAREER te permite crear tu propio jugador y vivir la experiencia completa desde el draft hasta convertirte en leyenda de la liga, con una historia cinematográfica dirigida por profesionales de Hollywood que incluye decisiones narrativas que afectan tu carrera, contratos de marcas, rivalidades en la cancha y vida fuera de ella. MyTEAM evoluciona el modo de cartas coleccionables con nuevas mecánicas, desafíos semanales y eventos limitados donde construyes el escuadrón de ensueño mezclando leyendas históricas con estrellas modernas. Los gráficos potenciados por ray-tracing recrean cada estadio NBA con precisión obsesiva, desde el parquet del Madison Square Garden hasta la atmósfera eléctrica de cada arena, complementados por comentarios dinámicos mejorados y una banda sonora curada con lo mejor del hip-hop actual.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: true,
        puntaje: 4.1,
        cantidadReviews: 6543,
        caracteristicas: [
            {
                titulo: "Simulación Realista",
                texto: "Física de balón mejorada, animaciones mocap de jugadores reales y mecánicas de tiro refinadas. Siente cada dribling, pase y volcada con precisión nunca vista."
            },
            {
                titulo: "MyCAREER",
                texto: "Crea tu jugador y vive su carrera desde rookie hasta leyenda de la NBA. Historia narrativa cinematográfica con decisiones que afectan tu trayectoria profesional."
            },
            {
                titulo: "MyTEAM & Multijugador",
                texto: "Construye tu equipo de ensueño con cartas coleccionables. Compite online en ligas, torneos y el parque con jugadores de todo el mundo."
            }
        ],
        informacion: {
            desarrollador: "Visual Concepts",
            editor: "2K Sports",
            fechaLanzamiento: "12 de septiembre de 2025",
            genero: "Deportes, Simulación, Baloncesto",
            plataformas: "PlayStation 5, Xbox Series X|S, PC, Nintendo Switch",
            duracionAproximada: "Ilimitada (Modos carrera)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 20,
            historiaExtra: 40,
            speedrunLogros: 100,
            completacionista: 400
        }
    },
    {
        img: "uncharted-4",
        categoria: "Aventura",
        nombre: "Uncharted 4",
        nombreBusqueda: "uncharted 4",
        texto: "La despedida perfecta de Nathan Drake en la aventura más ambiciosa, emotiva y espectacular de Naughty Dog que cierra la saga del cazatesoros más carismático de los videojuegos. Tres años después de retirarse, Nathan es arrastrado de vuelta al mundo del tesoro cuando su hermano Sam, a quien creía muerto, reaparece necesitando ayuda para encontrar el legendario tesoro pirata del capitán Henry Avery valorado en 400 millones de dólares. El juego te lleva desde las calles de Nueva Orleans hasta las exuberantes selvas de Madagascar, pasando por espectaculares paisajes escoceses y finalmente llegando a Libertalia, la utopía pirata perdida en una isla remota llena de palacios en ruinas, mansiones coloniales y secretos oscuros. Con el revolucionario sistema de gancho que expande las posibilidades de traversal y combate, gráficos que siguen impresionando años después de su lanzamiento, setpieces dignos de Hollywood como la persecución de camiones en Madagascar y el colapso del edificio en Escocia, Uncharted 4 perfecciona la fórmula mezclando exploración arqueológica, parkour cinematográfico, tiroteos tácticos con sigilo opcional y puzzles históricos. La historia madura explora temas de familia, legado y el costo de la obsesión, todo actuado magistralmente por Nolan North y Troy Baker con química perfecta.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 32145,
        caracteristicas: [
            {
                titulo: "Aventura Cinematográfica",
                texto: "Historia épica que cierra la saga de Nathan Drake con escenas de acción espectaculares, giros argumentales y momentos emotivos. Narrativa digna del mejor cine de aventuras."
            },
            {
                titulo: "Exploración Global",
                texto: "Viaja desde Madagascar hasta Escocia pasando por islas tropicales. Escenarios impresionantes con ruinas antiguas, ciudades piratas perdidas y paisajes de ensueño."
            },
            {
                titulo: "Acción Variada",
                texto: "Combina parkour, tiroteos, sigilo, conducción y puzzles ambientales. Sistema de gancho amplía las posibilidades de movimiento y combate de forma innovadora."
            }
        ],
        informacion: {
            desarrollador: "Naughty Dog",
            editor: "Sony Interactive Entertainment",
            fechaLanzamiento: "10 de mayo de 2016",
            genero: "Aventura, Acción, Tercera persona",
            plataformas: "PlayStation 4, PlayStation 5, PC",
            duracionAproximada: "15-18 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 15,
            historiaExtra: 20,
            speedrunLogros: 40,
            completacionista: 50
        }
    },
    {
        img: "doom-eternal",
        categoria: "Acción",
        nombre: "DOOM Eternal",
        nombreBusqueda: "doom eternal",
        texto: "El shooter en primera persona más intenso, brutal y adictivo jamás creado que redefine el género con combate de ajedrez a 200 km/h donde cada segundo cuenta. DOOM Eternal amplifica todo lo que hizo grande a su predecesor con un sistema de combate revolucionario llamado \"push forward\" que te obliga a estar constantemente en movimiento, alternando entre todas tus armas y usando Glory Kills para recuperar salud, flamethrow para armadura y motosierra para munición en un ciclo de recurso-recompensa brutalmente satisfactorio. Enfrenta hordas infinitas de demonios desde el infierno y dimensiones alternativas con un arsenal devastador que incluye el icónico Super Shotgun con gancho de carne, el BFG 9000, el Crucible de energía de argent y el nuevo Ballista de plasma, cada arma con mods completamente personalizables. La campaña de 20+ horas te lleva desde una Tierra invadida hasta la luna Phobos, pasando por instalaciones de UAC, la fortaleza del DOOM Slayer en órbita y las profundidades ardientes del infierno mismo, todo mientras descubres la mitología expandida del Slayer y los Centinelas Nocturnos. Con gráficos id Tech 7 espectaculares corriendo a 60fps sin compromisos, banda sonora de Mick Gordon que es pura adrenalina metalera y diseño de niveles que recompensa la exploración con secretos, coleccionables y desafíos de combate opcionales, DOOM Eternal es perfección en forma de shooter.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.6,
        cantidadReviews: 27890,
        caracteristicas: [
            {
                titulo: "Combate Frenético",
                texto: "Acción a 60fps sin descanso. Sistema de combate profundo que recompensa la agresividad, movimiento constante y uso estratégico del arsenal completo."
            },
            {
                titulo: "Arsenal Legendario",
                texto: "Super Shotgun, BFG, Crucible y más armas icónicas totalmente mejoradas. Cada arma con modos alternativos y mejoras que cambian tu estilo de juego."
            },
            {
                titulo: "Gloria Kills",
                texto: "Ejecuciones brutales contra demonios debilitados que recuperan salud. Sistema riesgo-recompensa que mantiene la adrenalina al máximo en cada encuentro."
            }
        ],
        informacion: {
            desarrollador: "id Software",
            editor: "Bethesda Softworks",
            fechaLanzamiento: "20 de marzo de 2020",
            genero: "Acción, Shooter, Primera persona",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch",
            duracionAproximada: "14-16 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 14,
            historiaExtra: 20,
            speedrunLogros: 50,
            completacionista: 70
        }
    },
    {
        img: "the-witcher-3",
        categoria: "RPG",
        nombre: "The Witcher 3",
        nombreBusqueda: "the witcher 3 witcher",
        texto: "La obra maestra definitiva del RPG de mundo abierto que establece el estándar de oro para narrativa interactiva, diseño de misiones y construcción de mundos. Como Geralt de Rivia, el brujo mutante con poderes sobrenaturales, embárcate en una búsqueda épica para encontrar a Ciri, tu hija adoptiva y heredera de un antiguo poder, mientras los jinetes espectrales de la Cacería Salvaje arrasan los reinos persiguiéndola. El mundo masivo abarca tres regiones distintas: los pantanos de guerra de Velen con su atmósfera gótica opresiva, la bulliciosa metrópolis medieval de Novigrad donde la política y el fanatismo religioso dominan, y el archipiélago vikingo de Skellige con sus clanes de guerreros y criaturas marinas legendarias. Cada misión secundaria cuenta una historia digna de un juego completo con giros inesperados, dilemas morales grises donde no existen respuestas correctas y consecuencias que se manifiestan horas después. El combate táctico contra monstruos requiere preparación: investiga a cada bestia, prepara aceites, pociones y bombas específicas, y usa señales mágicas estratégicamente. Con las expansiones Hearts of Stone y Blood and Wine añadiendo 50+ horas de contenido de calidad AAA, más de 100 horas de juego principal, gráficos mejorados con ray-tracing en la versión next-gen, y una banda sonora eslava memorable, The Witcher 3 es una experiencia imprescindible.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.9,
        cantidadReviews: 67890,
        caracteristicas: [
            {
                titulo: "Mundo Vivo",
                texto: "Mundo abierto masivo con múltiples regiones distintas. Novigrad, Skellige, Velen... cada zona tiene su propia cultura, clima, fauna y conflictos políticos únicos."
            },
            {
                titulo: "Decisiones Morales",
                texto: "Elecciones difíciles sin respuestas correctas. Consecuencias a largo plazo que afectan personajes, regiones enteras y múltiples finales posibles para la historia."
            },
            {
                titulo: "Cazador de Monstruos",
                texto: "Combate táctico contra bestias únicas. Investiga, prepara pociones, aceites y señales específicas para cada monstruo. Contratos de brujo con historias profundas."
            }
        ],
        informacion: {
            desarrollador: "CD Projekt Red",
            editor: "CD Projekt",
            fechaLanzamiento: "19 de mayo de 2015",
            genero: "RPG, Mundo Abierto, Fantasía Oscura",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch",
            duracionAproximada: "50-100 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino, Polaco"
        },
        tiempoJuego: {
            historiaPrincipal: 50,
            historiaExtra: 100,
            speedrunLogros: 170,
            completacionista: 200
        }
    },
    {
        img: "f1-2026",
        categoria: "Deportes",
        nombre: "F1 2026",
        nombreBusqueda: "f1 2026 formula 1",
        texto: "La simulación oficial más auténtica y completa del pináculo del automovilismo que te coloca al volante de las máquinas más rápidas del planeta. F1 2026 presenta todos los 24 circuitos oficiales del calendario de la temporada, desde los clásicos como Monza y Silverstone hasta los desafiantes circuitos callejeros de Singapur y Mónaco, todos recreados con precisión milimétrica usando escaneo láser y datos telemetricos reales de los equipos. Pilota como Max Verstappen, Lewis Hamilton, Charles Leclerc o cualquiera de los 20 pilotos oficiales, o crea tu propia leyenda en el modo My Team donde construyes tu escudería desde cero: diseña tu librea, contrata personal técnico, desarrolla el monoplaza gestionando investigación aerodinámica y de motor, y compite por el campeonato mundial enfrentando presupuestos limitados y expectativas de sponsors. El modelo de física se ha refinado con comportamiento de neumáticos ultra-realista que simula degradación térmica, aerodinámica de efecto suelo actualizada según las nuevas regulaciones técnicas, y desgaste mecánico que afecta el rendimiento. El modo carrera inmersivo incluye entrevistas con medios que afectan tu reputación, rivalidades dinámicas que se desarrollan en pista, sistema de desarrollo de habilidades del piloto, y decisiones estratégicas cruciales sobre contratos y transferencias.",
        precio: 69.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: true,
        puntaje: 4.2,
        cantidadReviews: 5678,
        caracteristicas: [
            {
                titulo: "Simulación Oficial",
                texto: "Todos los circuitos, equipos y pilotos de la temporada 2026 de F1. Físicas mejoradas con modelo de neumáticos realista y comportamiento aerodinámico preciso."
            },
            {
                titulo: "Mi Equipo",
                texto: "Crea y gestiona tu propia escudería desde cero. Contrata personal, desarrolla el monoplaza, gestiona presupuesto y compite por el campeonato mundial."
            },
            {
                titulo: "Carrera Profesional",
                texto: "Modo carrera inmersivo con entrevistas, rivalidades, desarrollo de piloto y decisiones estratégicas que afectan tu reputación y contratos futuros."
            }
        ],
        informacion: {
            desarrollador: "Codemasters",
            editor: "EA Sports",
            fechaLanzamiento: "18 de julio de 2026",
            genero: "Carreras, Simulación, Deportes",
            plataformas: "PlayStation 5, Xbox Series X|S, PC",
            duracionAproximada: "Variable (Temporadas)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 15,
            historiaExtra: 40,
            speedrunLogros: 80,
            completacionista: 150
        }
    },
    {
        img: "the-sims-4",
        categoria: "Simulación",
        nombre: "The Sims 4",
        nombreBusqueda: "the sims 4 sims",
        texto: "El simulador de vida definitivo que te da poder absoluto para crear personas, construir casas y vivir historias únicas donde la única limitación es tu imaginación. The Sims 4 te permite diseñar Sims completamente personalizados con el sistema Create-A-Sim más avanzado de la serie, moldeando cada rasgo facial con precisión milimétrica, eligiendo entre miles de opciones de vestimenta y definiendo personalidades complejas a través de traits y aspiraciones que afectan genuinamente su comportamiento y objetivos en la vida. Construye la casa de tus sueños con herramientas intuitivas de construcción que van desde modestas casas iniciales hasta mansiones lujosas, decorando con miles de objetos y muebles mientras aprovechas el revolucionario sistema de habitaciones que permite mover estructuras completas. Controla todos los aspectos de la vida de tus Sims: elige entre docenas de carreras desde astronauta hasta influencer, cultiva relaciones románticas complejas que pueden terminar en matrimonio o drama, desarrolla habilidades como pintura, música, cocina o programación, y responde a un innovador sistema de emociones que hace que tus Sims se sientan verdaderamente vivos con sentimientos que afectan sus acciones. Con actualizaciones gratuitas constantes y expansiones opcionales que añaden mascotas, estaciones, universidades, famosos y más, The Sims 4 ofrece posibilidades infinitas de juego.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.3,
        cantidadReviews: 44567,
        caracteristicas: [
            {
                titulo: "Creación Total",
                texto: "Sistema de creación de Sims más detallado con edición facial precisa, personalización corporal completa y miles de opciones de vestimenta y accesorios."
            },
            {
                titulo: "Vida sin Límites",
                texto: "Controla todos los aspectos de la vida de tus Sims: carreras, relaciones, hobbies, emociones. Construye casas, forma familias y crea historias únicas."
            },
            {
                titulo: "Contenido Expandible",
                texto: "Múltiples packs de expansión, objetos y contenido que añaden profesiones, mundos, mascotas, estaciones y mecánicas completamente nuevas al juego."
            }
        ],
        informacion: {
            desarrollador: "Maxis",
            editor: "Electronic Arts",
            fechaLanzamiento: "2 de septiembre de 2014",
            genero: "Simulación, Vida, Sandbox",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S",
            duracionAproximada: "Ilimitada",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 30,
            historiaExtra: 100,
            speedrunLogros: 200,
            completacionista: 500
        }
    },
    {
        img: "cities-skylines",
        categoria: "Simulación",
        nombre: "Cities: Skylines",
        nombreBusqueda: "cities skylines",
        texto: "El simulador de construcción de ciudades más profundo y satisfactorio jamás creado que te pone en control absoluto de cada aspecto del desarrollo urbano. Cities: Skylines es el sucesor espiritual de SimCity que los fans esperaban, ofreciendo libertad total para diseñar y gestionar metrópolis masivas con hasta un millón de habitantes simulados individualmente. Comienza con un terreno vacío y construye tu imperio urbano zona por zona: residencial, comercial e industrial, mientras gestionas sistemas complejos e interconectados de transporte público (metro, trenes, buses, tranvías), servicios esenciales (policía, bomberos, hospitales, escuelas), utilidades (electricidad, agua, alcantarillado, gestión de residuos) y políticas que afectan la economía local. El motor de simulación altamente detallado calcula tráfico en tiempo real obligándote a diseñar redes viales inteligentes con autopistas, rotondas e intercambiadores para evitar embotellamientos, mientras monitoras contaminación ambiental, nivel de ruido, densidad poblacional y felicidad ciudadana. El verdadero poder del juego reside en Steam Workshop con decenas de miles de mods creados por la comunidad que añaden edificios históricos reales, sistemas de transporte avanzados, mecánicas de gameplay expandidas y mapas de ciudades reales del mundo entero, garantizando contenido virtualmente infinito.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.5,
        cantidadReviews: 19234,
        caracteristicas: [
            {
                titulo: "Planificación Urbana",
                texto: "Diseña cada aspecto de tu ciudad: zonas residenciales, comerciales, industriales. Gestiona servicios, transporte público, electricidad, agua y más sistemas complejos."
            },
            {
                titulo: "Crecimiento Orgánico",
                texto: "Observa cómo tu ciudad crece desde un pequeño pueblo hasta una metrópolis. Gestiona tráfico, contaminación, felicidad ciudadana y presupuesto municipal."
            },
            {
                titulo: "Mods Ilimitados",
                texto: "Soporte masivo de mods en Steam Workshop con miles de edificios, vehículos, mapas y mecánicas creadas por la comunidad que expanden infinitamente el juego."
            }
        ],
        informacion: {
            desarrollador: "Colossal Order",
            editor: "Paradox Interactive",
            fechaLanzamiento: "10 de marzo de 2015",
            genero: "Simulación, Gestión, Estrategia",
            plataformas: "PC, PlayStation 4, Xbox One, Nintendo Switch",
            duracionAproximada: "Ilimitada",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 25,
            historiaExtra: 60,
            speedrunLogros: 100,
            completacionista: 200
        }
    },
    {
        img: "starcraft-ii",
        categoria: "Estrategia",
        nombre: "StarCraft II",
        nombreBusqueda: "starcraft 2 ii",
        texto: "El rey indiscutido de la estrategia en tiempo real competitiva y el pilar de los eSports que define un género con balance perfecto y profundidad infinita. StarCraft II te coloca en el centro de un conflicto galáctico entre tres razas asimétricas magistralmente diseñadas: los versátiles humanos Terran con sus bases fortificadas y ejércitos mecanizados, los alienígenas insectoides Zerg que abruman con números masivos y evolución rápida, y los psíquicos tecnológicamente avanzados Protoss con unidades poderosas pero costosas y habilidades devastadoras. La campaña épica se desarrolla a través de tres expansiones narrativas (Wings of Liberty, Heart of the Swarm, Legacy of the Void) con más de 70 misiones cinematográficas que te permiten personalizar tu facción entre misiones, desbloquear nuevas unidades, y tomar decisiones estratégicas que afectan el desarrollo tecnológico. El verdadero corazón late en el multijugador competitivo balanceado meticulosamente durante más de una década de parches profesionales, con un sistema de escalera clasificatoria desde Bronze hasta Grand Master que acomoda todos los niveles de habilidad. Observa replays detallados para analizar cada decisión, estudia build orders optimizados, y participa en la escena de eSports más grande del RTS con torneos globales y premios millonarios.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 35678,
        caracteristicas: [
            {
                titulo: "RTS Competitivo",
                texto: "Estrategia en tiempo real balanceada perfectamente para competición profesional. Tres razas únicas (Terran, Protoss, Zerg) con estilos completamente diferentes."
            },
            {
                titulo: "Campaña Épica",
                texto: "Historia cinematográfica a través de tres campañas expansivas. Decisiones estratégicas entre misiones, mejoras de unidades y narrativa de ciencia ficción envolvente."
            },
            {
                titulo: "eSports Legendario",
                texto: "Escena competitiva global con torneos profesionales. Escalera competitiva, replays, observadores y todas las herramientas para el juego competitivo de alto nivel."
            }
        ],
        informacion: {
            desarrollador: "Blizzard Entertainment",
            editor: "Blizzard Entertainment",
            fechaLanzamiento: "27 de julio de 2010",
            genero: "Estrategia, RTS, Ciencia Ficción",
            plataformas: "PC, macOS",
            duracionAproximada: "20-25 horas (Campaña)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 20,
            historiaExtra: 35,
            speedrunLogros: 80,
            completacionista: 120
        }
    },
    {
        img: "age-of-empires-iv",
        categoria: "Estrategia",
        nombre: "Age of Empires IV",
        nombreBusqueda: "age of empires 4 iv aoe",
        texto: "El legendario regreso de la franquicia de estrategia en tiempo real más querida que combina la jugabilidad clásica con innovaciones modernas y producción de clase mundial. Age of Empires IV te transporta a través de 500 años de historia medieval y renacentista con ocho civilizaciones asimétricas jugables: ingleses, franceses, el Sacro Imperio Romano, chinos, mongoles, el sultanato de Delhi, abasíes y rus, cada una con mecánicas únicas, unidades especiales y monumentos que desbloquean tecnologías avanzadas. Avanza a través de cuatro edades históricas desde la Edad Oscura hasta la Edad Imperial, gestionando economía con aldeanos que recolectan recursos, construyendo ejércitos con más de 35 tipos de unidades desde arqueros longbow ingleses hasta elefantes de guerra abasíes, y desarrollando tecnología militar y económica en edificios especializados. Las cuatro campañas históricas narrativas son mini-documentales jugables con videos filmados en locaciones reales que recrean los normandos conquistando Inglaterra, Juana de Arco defendiendo Francia, el auge del Imperio Mongol de Genghis Khan, y el sultanato mameluco de Egipto. El multijugador competitivo balanceado cuidadosamente ofrece partidas desde 1v1 intensas hasta épicas batallas 4v4 con sistema de clasificación ELO, torneos oficiales con soporte de Red Bull Wololo, y herramientas de observación profesional perfectas para streaming.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.4,
        cantidadReviews: 16789,
        caracteristicas: [
            {
                titulo: "Civilizaciones Históricas",
                texto: "Ocho civilizaciones únicas desde ingleses hasta mongoles, cada una con unidades, edificios y mecánicas especiales basadas en la historia real de esas culturas."
            },
            {
                titulo: "Campaña Documentada",
                texto: "Cuatro campañas históricas con videos documentales reales que mezclan jugabilidad con educación sobre batallas y períodos históricos auténticos."
            },
            {
                titulo: "Estrategia Profunda",
                texto: "Gestión de recursos, construcción de bases, desarrollo tecnológico y combate táctico. Balance perfecto entre accesibilidad y profundidad estratégica."
            }
        ],
        informacion: {
            desarrollador: "Relic Entertainment",
            editor: "Xbox Game Studios",
            fechaLanzamiento: "28 de octubre de 2021",
            genero: "Estrategia, RTS, Histórico",
            plataformas: "PC, Xbox Series X|S",
            duracionAproximada: "15-20 horas (Campañas)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 15,
            historiaExtra: 30,
            speedrunLogros: 60,
            completacionista: 100
        }
    },
    {
        img: "gran-turismo-7",
        categoria: "Carreras",
        nombre: "Gran Turismo 7",
        nombreBusqueda: "gran turismo 7 gt7",
        texto: "El simulador definitivo de automovilismo que combina 25 años de evolución de la serie con tecnología de siguiente generación para crear la experiencia de conducción más auténtica y reverente hacia la cultura del automóvil. Gran Turismo 7 es una carta de amor al automovilismo con más de 420 vehículos meticulosamente recreados desde clásicos históricos de los años 50 como el Porsche 550 Spyder hasta hypercars modernos como el Bugatti Chiron, cada uno modelado con precisión milimétrica usando escaneo 3D de los vehículos reales y datos de telemetría de fabricantes. La física de conducción ultra-realista simula cada aspecto del comportamiento vehicular: modelo de neumáticos avanzado con degradación térmica y desgaste de compuesto, aerodinámica precisa que afecta downforce y resistencia al aire, transferencia de peso dinámica, y comportamiento diferente en condiciones climáticas cambiantes con lluvia y transiciones día-noche. Compite en más de 90 trazados incluyendo circuitos legendarios escaneados con láser como Nürburgring Nordschleife, Spa-Francorchamps, Laguna Seca, Circuit de la Sarthe, y el icónico Circuito de Tokyo Expressway. El modo GT Café te guía a través de la historia del automóvil coleccionando vehículos legendarios, el modo Sport ofrece competición FIA certificada con campeonatos mundiales oficiales, y el editor de libreas permite personalización ilimitada con soporte para decalcomanías personalizadas.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.5,
        cantidadReviews: 25890,
        caracteristicas: [
            {
                titulo: "Simulación Real",
                texto: "Física de conducción ultra-realista con modelo de neumáticos avanzado, aerodinámica precisa y comportamiento auténtico de cada vehículo en diferentes condiciones."
            },
            {
                titulo: "Colección de Autos",
                texto: "Más de 400 vehículos meticulosamente recreados desde clásicos históricos hasta superdeportivos modernos. Cada auto modelado con precisión milimétrica."
            },
            {
                titulo: "Circuitos Legendarios",
                texto: "Pistas icónicas de todo el mundo escaneadas con láser. Nürburgring, Spa-Francorchamps, Laguna Seca y más circuitos con recreación perfecta."
            }
        ],
        informacion: {
            desarrollador: "Polyphony Digital",
            editor: "Sony Interactive Entertainment",
            fechaLanzamiento: "4 de marzo de 2022",
            genero: "Carreras, Simulación",
            plataformas: "PlayStation 4, PlayStation 5",
            duracionAproximada: "30-40 horas (Carrera)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 30,
            historiaExtra: 60,
            speedrunLogros: 120,
            completacionista: 200
        }
    },
    {
        img: "mario-kart-8-deluxe",
        categoria: "Carreras",
        nombre: "Mario Kart 8 Deluxe",
        nombreBusqueda: "mario kart 8 deluxe mk8",
        texto: "La experiencia definitiva de carreras arcade multijugador que une generaciones con diversión pura, accesibilidad perfecta y profundidad competitiva sorprendente. Mario Kart 8 Deluxe es la versión completa y mejorada del clásico de Wii U que incluye todo el contenido base más las expansiones DLC con 48 pistas increíblemente diseñadas que van desde circuitos clásicos remasterizados como Rainbow Road y Bowser's Castle hasta innovadores recorridos antigravedad por las paredes y techos en aeropuertos de neón futuristas. Elige entre más de 42 personajes del universo Nintendo incluyendo a Mario, Luigi, Peach, Bowser, los Inklings de Splatoon, Link de Zelda, y hasta los Animal Crossing Villagers, cada uno con estadísticas únicas de velocidad, aceleración y manejo que afectan genuinamente el rendimiento. El arsenal clásico de ítems caóticos regresa con cascarones verdes y rojos, estrellas de invencibilidad, champiñones turbo, bananas resbaladizas y el temido caparazón azul que persigue implacablemente al primer lugar. Juega localmente con hasta 4 jugadores en pantalla dividida o conecta online para carreras de 12 jugadores con matchmaking global, Battle Mode completamente renovado con 8 arenas diseñadas específicamente para combate, y el Booster Course Pass que añade 48 pistas adicionales de entregas anteriores remasterizadas.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 51234,
        caracteristicas: [
            {
                titulo: "Diversión Multijugador",
                texto: "Hasta 12 jugadores online o 4 en local con pantalla dividida. Battle Mode renovado con arenas diseñadas específicamente para combates caóticos."
            },
            {
                titulo: "Personajes y Pistas",
                texto: "48 pistas clásicas y nuevas con diseños creativos desde circuitos de neón hasta pistas antigravedad. Más de 40 personajes del universo Nintendo."
            },
            {
                titulo: "Items Caóticos",
                texto: "Arsenal clásico de items con cascarones, estrellas, champiñones y el temido caparazón azul. Estrategia y suerte se combinan en cada carrera."
            }
        ],
        informacion: {
            desarrollador: "Nintendo EPD",
            editor: "Nintendo",
            fechaLanzamiento: "28 de abril de 2017",
            genero: "Carreras, Arcade, Party Game",
            plataformas: "Nintendo Switch",
            duracionAproximada: "Variable (Multijugador)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 6,
            historiaExtra: 15,
            speedrunLogros: 40,
            completacionista: 80
        }
    },
    {
        img: "street-fighter-6",
        categoria: "Lucha",
        nombre: "Street Fighter 6",
        nombreBusqueda: "street fighter 6 sf6",
        texto: "El reinicio definitivo de la franquicia de lucha más icónica que revitaliza completamente la serie con innovaciones revolucionarias, accesibilidad mejorada y profundidad técnica expandida. Street Fighter 6 introduce el sistema Drive revolucionario que unifica mecánicas defensivas y ofensivas bajo una barra de recursos compartida usada para Drive Impact (armored attacks), Drive Parry (deflección perfecta), Drive Rush (cancelaciones aceleradas) y el devastador Drive Reversal, creando un meta-juego de gestión de recursos que recompensa decisiones inteligentes. El roster inicial de 18 luchadores mezcla veteranos rediseñados como Ryu, Chun-Li, Guile y Dhalsim con nuevos rostros carismáticos como Jamie, Kimberly, Marisa y el poderoso JP, cada uno con múltiples Super Arts personalizables y estilos visualales únicos potenciados por el motor gráfico RE Engine fotorrealista. El revolucionario World Tour es un modo historia RPG de mundo abierto donde creas tu propio luchador, exploras Metro City conociendo maestros legendarios, aprendes sus técnicas únicas combinándolas libremente, y subes de nivel participando en combates callejeros mientras descubres los secretos de la organización Nayshall. El sistema de control moderno simplificado hace que los movimientos especiales sean accesibles con un botón, perfecto para principiantes, mientras los controles clásicos mantienen la ejecución tradicional para veteranos competitivos.",
        precio: 49.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 33456,
        caracteristicas: [
            {
                titulo: "Drive System",
                texto: "Nueva mecánica revolucionaria que unifica defensas, ataques especiales y cancelaciones. Sistema accesible para principiantes pero con profundidad técnica infinita."
            },
            {
                titulo: "World Tour",
                texto: "Modo historia en mundo abierto donde creas tu personaje y aprendes de los luchadores legendarios. Combina RPG con entrenamiento de combate."
            },
            {
                titulo: "Roster Diverso",
                texto: "Luchadores clásicos como Ryu y Chun-Li junto a nuevos personajes únicos. Cada uno con estilo de juego distintivo y múltiples opciones de personalización."
            }
        ],
        informacion: {
            desarrollador: "Capcom",
            editor: "Capcom",
            fechaLanzamiento: "2 de junio de 2023",
            genero: "Lucha, Competitivo",
            plataformas: "PlayStation 4, PlayStation 5, Xbox Series X|S, PC",
            duracionAproximada: "15-20 horas (World Tour)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 15,
            historiaExtra: 25,
            speedrunLogros: 60,
            completacionista: 100
        }
    },
    {
        img: "tekken-8",
        categoria: "Lucha",
        nombre: "Tekken 8",
        nombreBusqueda: "tekken 8",
        texto: "El rey indiscutido de los juegos de lucha 3D alcanza su cenit con la octava entrega que combina el sistema de combate más profundo de la serie con gráficos Unreal Engine 5 absolutamente impresionantes. Tekken 8 concluye la saga Mishima definitivamente con una historia cinematográfica que resuelve el conflicto generacional entre Kazuya Mishima y su hijo Jin Kazama en batallas épicas que mezclan secuencias Quick Time Events espectaculares con peleas jugables intensas. El revolucionario Heat System transforma el meta-juego incentivando la agresión constante: activa el estado Heat para desbloquear movimientos especiales devastadores, cancelaciones únicas y chip damage garantizado, recompensando a jugadores ofensivos mientras penaliza el juego defensivo pasivo. El roster de 32 luchadores incluye veteranos clásicos como Paul, Law, King y Nina, junto a nuevos personajes como el poderoso luchador de Muay Thai Azucena y el misterioso Reina. Los gráficos next-gen aprovechan Unreal Engine 5 para renderizar músculo, piel y ropa con realismo fotográfico, mientras los escenarios destructibles reaccionan dinámicamente a los combates con paredes que se rompen, suelos que colapsan y efectos climáticos como lluvia y tormentas de arena que afectan visualmente cada golpe. El modo Arcade Quest te enseña fundamentos mientras exploras salones recreativos japoneses, y el multijugador online mejorado con rollback netcode garantiza matches fluidos sin lag.",
        precio: 29.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: true,
        puntaje: 4.6,
        cantidadReviews: 28901,
        caracteristicas: [
            {
                titulo: "Heat System",
                texto: "Nuevo sistema de agresión que recompensa la ofensiva constante. Activa el estado Heat para desbloquear movimientos especiales y presionar al oponente."
            },
            {
                titulo: "Gráficos Next-Gen",
                texto: "Motor Unreal Engine 5 con físicas realistas de ropa, cabello y musculatura. Escenarios destructibles y efectos climáticos que afectan visualmente los combates."
            },
            {
                titulo: "Saga Mishima",
                texto: "Conclusión épica de la rivalidad entre Kazuya y Jin. Modo historia cinematográfico con peleas espectaculares y revelaciones sobre el linaje Mishima."
            }
        ],
        informacion: {
            desarrollador: "Bandai Namco Studios",
            editor: "Bandai Namco Entertainment",
            fechaLanzamiento: "26 de enero de 2024",
            genero: "Lucha, 3D, Competitivo",
            plataformas: "PlayStation 5, Xbox Series X|S, PC",
            duracionAproximada: "12-15 horas (Historia)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 12,
            historiaExtra: 20,
            speedrunLogros: 70,
            completacionista: 120
        }
    },
    {
        img: "tetris-effect",
        categoria: "Puzzle",
        nombre: "Tetris Effect",
        nombreBusqueda: "tetris effect",
        texto: "El Tetris más hermoso y emocionalmente resonante jamás creado que transforma el puzzle más icónico de la historia en una experiencia sinestésica y casi espiritual. Desarrollado por Tetsuya Mizuguchi (creador de Rez y Lumines), Tetris Effect eleva el gameplay clásico e intocable a través de una presentación audiovisual abrumadoramente bella donde cada pieza que colocas, cada línea que completas y cada rotación genera efectos visuales y respuestas sonoras perfectamente sincronizadas con bandas sonoras originales hipnóticas. El modo Journey te lleva a través de más de 30 etapas temáticas únicas que van desde las profundidades bioluminiscentes del océano hasta las alturas infinitas del espacio exterior, pasando por desiertos místicos, selvas exuberantes, ciudades cyberpunk y paisajes abstractos, cada una con su propia paleta visual, música original y efectos de partículas que reaccionan a tu gameplay. La mecánica Zone revoluciona Tetris permitiéndote detener el tiempo temporalmente para limpiar múltiples líneas estratégicamente y alcanzar combos imposibles, añadiendo profundidad táctica sin traicionar la pureza del diseño original de Alexey Pajitnov. Perfectamente diseñado para realidad virtual opcional que intensifica la inmersión, con modos multijugador competitivos y cooperativos, y una experiencia meditativa que según estudios científicos reduce el estrés y mejora el estado de ánimo.",
        precio: 19.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 17654,
        caracteristicas: [
            {
                titulo: "Sinestesia Visual",
                texto: "Cada movimiento, rotación y línea completada genera efectos visuales y sonoros sincronizados. Experiencia multisensorial que transforma Tetris en arte interactivo."
            },
            {
                titulo: "Viaje Musical",
                texto: "Más de 30 etapas con temas musicales y visuales únicos. Desde océanos profundos hasta el espacio exterior, cada nivel es una experiencia audiovisual diferente."
            },
            {
                titulo: "Zona de Tiempo",
                texto: "Mecánica especial que detiene el tiempo y permite limpiar múltiples líneas estratégicamente. Añade profundidad al gameplay clásico sin romper su esencia."
            }
        ],
        informacion: {
            desarrollador: "Monstars, Resonair",
            editor: "Enhance Games",
            fechaLanzamiento: "9 de noviembre de 2018",
            genero: "Puzzle, Musical, Arte",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch",
            duracionAproximada: "8-12 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 3,
            historiaExtra: 10,
            speedrunLogros: 30,
            completacionista: 50
        }
    },
    {
        img: "the-witness",
        categoria: "Puzzle",
        nombre: "The Witness",
        nombreBusqueda: "the witness",
        texto: "Una obra maestra minimalista de diseño de puzzles que desafía tu percepción y comprensión del mundo a través de más de 500 acertijos interconectados ingeniosamente en una isla misteriosa y bellísima. Del creador de Braid, Jonathan Blow, The Witness es un juego de puzzle en primera persona completamente no lineal donde despiertas solo en una isla deshabitada llena de paneles de líneas aparentemente simples que esconden reglas complejas y elegantes que debes descubrir mediante observación pura y experimentación sin ningún tutorial, diálogo o texto explicativo. La genialidad radica en cómo cada área de la isla introduce sutilmente nuevas mecánicas de puzzle: los árboles de otoño enseñan sobre simetría, el área del monasterio revela patrones ocultos, el pantano incorpora reglas de Tetris, y el desierto juega con perspectiva y sombras proyectadas. Pero el verdadero ingenio emerge cuando descubres cómo estas mecánicas aparentemente aisladas se combinan en puzzles híbridos devastadoramente inteligentes que requieren aplicar conocimiento de múltiples áreas simultáneamente. La isla es un museo de arte moderno viviente con cientos de audio logs filosóficos sobre conocimiento, percepción y aprendizaje, mientras secretos ocultos recompensan la observación meticulosa del entorno con revelaciones metafísicas que cuestionan la naturaleza misma de resolver problemas.",
        precio: 9.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.5,
        cantidadReviews: 14789,
        caracteristicas: [
            {
                titulo: "Puzzles Profundos",
                texto: "Más de 500 rompecabezas de líneas con reglas que se enseñan sin texto ni tutoriales. Aprendizaje orgánico a través de observación y experimentación."
            },
            {
                titulo: "Isla Interconectada",
                texto: "Mundo abierto no lineal con diferentes biomas y áreas temáticas. Cada zona introduce nuevas mecánicas de puzzle que se entrelazan de formas inesperadas."
            },
            {
                titulo: "Misterio Filosófico",
                texto: "Narrativa ambiental sin diálogos que invita a la reflexión sobre conocimiento, percepción y comprensión. Secretos profundos para los más observadores."
            }
        ],
        informacion: {
            desarrollador: "Thekla, Inc.",
            editor: "Thekla, Inc.",
            fechaLanzamiento: "26 de enero de 2016",
            genero: "Puzzle, Exploración, Primera persona",
            plataformas: "PC, PlayStation 4, Xbox One, iOS, macOS",
            duracionAproximada: "12-20 horas",
            idiomas: "Inglés (Sin diálogos)"
        },
        tiempoJuego: {
            historiaPrincipal: 12,
            historiaExtra: 20,
            speedrunLogros: 40,
            completacionista: 60
        }
    },
    {
        img: "silent-hill-2-remake",
        categoria: "Terror",
        nombre: "Silent Hill 2 Remake",
        nombreBusqueda: "silent hill 2 remake sh2",
        texto: "El remake definitivo del survival horror psicológico más aclamado de todos los tiempos que preserva reverentemente el alma del clásico de 2001 mientras lo moderniza para una nueva generación. Bloober Team recrea magistralmente la inquietante historia de James Sunderland, quien recibe una carta de su esposa Mary invitándolo al lugar especial de Silent Hill, con el pequeño detalle de que ella murió de una enfermedad terminal hace tres años. Esta narrativa profundamente perturbadora sobre culpa, trauma, negación y la naturaleza subjetiva de la realidad se desarrolla en la niebla opresiva del pueblo maldito lleno de monstruos que son manifestaciones físicas de la psique rota de James. El remake mantiene cada beat narrativo esencial, simbolismo denso (como Pyramid Head representando el deseo de castigo de James), y los múltiples finales que cambian según tus acciones sutiles, pero lo presenta con gráficos Unreal Engine 5 fotorrealistas que hacen que cada calle desolada, cada edificio abandonado y cada criatura grotesca sea aún más perturbadora. El combate y la cámara se modernizan con perspectiva sobre el hombro estilo Resident Evil moderno manteniendo la torpeza intencional y recursos limitados del survival horror clásico. La legendaria banda sonora de Akira Yamaoka se reimagina respetando los temas originales mientras el diseño sonoro ambiental usa el silencio magistralmente para crear tensión insoportable.",
        precio: 39.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 26543,
        caracteristicas: [
            {
                titulo: "Terror Psicológico",
                texto: "Historia profunda sobre culpa, pérdida y trauma que sigue a James Sunderland en Silent Hill. Simbolismo denso con múltiples interpretaciones y finales."
            },
            {
                titulo: "Remake Moderno",
                texto: "Gráficos modernos que mantienen la atmósfera opresiva del original. Combate y cámara sobre el hombro mejorados sin perder la tensión del survival horror clásico."
            },
            {
                titulo: "Diseño Sonoro",
                texto: "Banda sonora de Akira Yamaoka reimaginada. Efectos de sonido inquietantes y uso magistral del silencio para crear tensión psicológica constante."
            }
        ],
        informacion: {
            desarrollador: "Bloober Team",
            editor: "Konami",
            fechaLanzamiento: "8 de octubre de 2024",
            genero: "Terror, Survival Horror, Psicológico",
            plataformas: "PlayStation 5, PC",
            duracionAproximada: "16-20 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 16,
            historiaExtra: 22,
            speedrunLogros: 45,
            completacionista: 60
        }
    },
    {
        img: "outlast",
        categoria: "Terror",
        nombre: "Outlast",
        nombreBusqueda: "outlast",
        texto: "El horror de supervivencia más aterrador y visceral de la década que te deja completamente indefenso armado únicamente con una cámara de video y tus instintos de supervivencia. Outlast te coloca en los zapatos de Miles Upshur, un periodista de investigación que recibe un tip anónimo sobre experimentos inhumanos en el Asilo Mount Massive abandonado en las montañas de Colorado, solo para descubrir que la institución está llena de pacientes perturbados violentamente y secretos corporativos oscuros relacionados con la Corporación Murkoff. Sin habilidades de combate ni armas, tu única opción es correr, esconderte bajo camas o dentro de armarios mientras contienes la respiración, y usar la visión nocturna de tu cámara para navegar pasillos oscuros llenos de enemigos que te persiguen implacablemente. La tensión es insoportable porque las baterías para tu cámara son limitadas, forzándote a decidir estratégicamente cuándo usar la visión nocturna y cuándo arriesgarte a moverte en la oscuridad total. El diseño de niveles claustrofóbico con pasillos estrechos, habitaciones llenas de cadáveres, bloques de celdas infestados y áreas industriales opresivas crea una atmósfera de terror constante amplificada por un diseño sonoro magistral donde cada grito distante, cada puerta que cruje y cada paso que escuchas podría ser tu fin. Los encuentros con antagonistas memorables como el aterrador Chris Walker y el perturbador Padre Martin quedan grabados permanentemente en tu memoria.",
        precio: 29.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.4,
        cantidadReviews: 22345,
        caracteristicas: [
            {
                titulo: "Terror sin Armas",
                texto: "Gameplay basado en sigilo y huida. Sin combate, solo puedes correr, esconderte y usar tu cámara con visión nocturna para sobrevivir en la oscuridad."
            },
            {
                titulo: "Atmósfera Opresiva",
                texto: "Asilo Mount Massive con pacientes perturbados y secretos oscuros. Ambientación claustrofóbica con pasillos estrechos, habitaciones inquietantes y tensión constante."
            },
            {
                titulo: "Found Footage",
                texto: "Perspectiva primera persona con cámara de video. Baterías limitadas para la visión nocturna añaden urgencia y decisiones estratégicas sobre cuándo usarla."
            }
        ],
        informacion: {
            desarrollador: "Red Barrels",
            editor: "Red Barrels",
            fechaLanzamiento: "4 de septiembre de 2013",
            genero: "Terror, Survival Horror, Primera persona",
            plataformas: "PC, PlayStation 4, Xbox One, Nintendo Switch",
            duracionAproximada: "5-7 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés"
        },
        tiempoJuego: {
            historiaPrincipal: 5,
            historiaExtra: 7,
            speedrunLogros: 15,
            completacionista: 20
        }
    },
    {
        img: "super-mario-odyssey",
        categoria: "Plataformas",
        nombre: "Super Mario Odyssey",
        nombreBusqueda: "super mario odyssey",
        texto: "La mejor aventura de plataformas 3D de Mario y posiblemente el mejor juego de plataformas jamás creado que redefine el género con creatividad ilimitada y diseño perfecto. Super Mario Odyssey abandona la estructura lineal de niveles tradicional para presentar enormes reinos sandbox repletos de secretos, cada uno con su propia estética distintiva: el fotorrealista Metro Kingdom con Nueva Donk City y sus rascacielos, el desierto mexicano del Sand Kingdom con sus ruinas tostarenas, el prehistórico Cascade Kingdom con cascadas masivas, el misterioso Cap Kingdom hecho enteramente de sombreros, y docenas más de mundos coloridos. La mecánica revolucionaria de Cappy transforma completamente el gameplay: lanza tu sombrero viviente para capturar enemigos, objetos y hasta personas, transformándote en más de 50 criaturas diferentes desde un T-Rex rugiente hasta una rana saltarina, cada una con habilidades únicas que abren nuevas formas de explorar y resolver puzzles. Los más de 880 Power Moons para coleccionar están escondidos ingeniosamente en cada rincón, recompensando la exploración curiosa, el pensamiento lateral y la ejecución precisa de plataformas con desafíos que van desde triviales hasta brutalmente difíciles en las Darker Side moons post-juego. Con controles perfectos, música memorable que mezcla orquestación épica con sintetizadores funk en Jump Up, Super Star!, y pura alegría en cada momento.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.9,
        cantidadReviews: 48901,
        caracteristicas: [
            {
                titulo: "Sandbox de Plataformas",
                texto: "Exploración libre en reinos únicos desde Nueva Donk City hasta el Reino de las Arenas. Cada mundo está repleto de Power Moons escondidos en lugares creativos."
            },
            {
                titulo: "Captura con Cappy",
                texto: "Lanza tu sombrero Cappy para capturar enemigos, objetos y personas, transformándote en ellos. Mecánica revolucionaria que expande infinitamente las posibilidades."
            },
            {
                titulo: "Creatividad Máxima",
                texto: "Diseño de niveles ingenioso con múltiples soluciones para cada desafío. Desde retos simples hasta desafíos post-juego brutalmente difíciles."
            }
        ],
        informacion: {
            desarrollador: "Nintendo EPD",
            editor: "Nintendo",
            fechaLanzamiento: "27 de octubre de 2017",
            genero: "Plataformas, Aventura, 3D",
            plataformas: "Nintendo Switch",
            duracionAproximada: "12-15 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 12,
            historiaExtra: 25,
            speedrunLogros: 60,
            completacionista: 80
        }
    },
    {
        img: "hollow-knight",
        categoria: "Plataformas",
        nombre: "Hollow Knight",
        nombreBusqueda: "hollow knight",
        texto: "La obra maestra indie definitiva del metroidvania que rivaliza y supera a los clásicos que inspiró con su exploración laberíntica, combate desafiante y mundo melancólicamente hermoso. Creado por el pequeño estudio Team Cherry de Australia, Hollow Knight te sumerge en Hallownest, un reino subterráneo vasto y olvidado habitado por insectos antropomórficos donde tú controlas al silencioso Caballero en una misión misteriosa que se revela gradualmente a través de encuentros con NPCs memorables, fragmentos de lore ambiental y tablillas antiguas. El mundo interconectado de forma orgánica se expande constantemente mientras desbloqueas habilidades como el Dash, Wall Jump, Double Jump y Crystal Heart que abren rutas secretas a áreas previamente inaccesibles, generando el rush adictivo de redescubrir zonas con nuevas capacidades y encontrar atajos inteligentes. El combate con espada es engañosamente simple pero profundamente satisfactorio con timing preciso requerido, mientras que los 47 jefes épicos desde Hornet hasta Mantis Lords y el brutal Radiance demandan dominio absoluto de mecánicas y patrones. El arte dibujado a mano frame-by-frame con animaciones fluidas crea una estética gótica memorable, complementada por una banda sonora orquestal de Christopher Larkin que oscila entre melancolía nostálgica y tensión épica.",
        precio: 14.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 38765,
        caracteristicas: [
            {
                titulo: "Metroidvania Perfecto",
                texto: "Exploración interconectada en Hallownest, un reino de insectos olvidado. Habilidades nuevas desbloquean áreas secretas creando sensación constante de descubrimiento."
            },
            {
                titulo: "Combate Preciso",
                texto: "Sistema de combate simple pero profundo con espada, hechizos y amuletos personalizables. Jefes épicos que requieren dominio de mecánicas y patrones."
            },
            {
                titulo: "Arte Hand-Drawn",
                texto: "Estilo visual dibujado a mano con animaciones fluidas. Diseño de personajes memorable y atmósfera melancólica con banda sonora orquestal emotiva."
            }
        ],
        informacion: {
            desarrollador: "Team Cherry",
            editor: "Team Cherry",
            fechaLanzamiento: "24 de febrero de 2017",
            genero: "Plataformas, Metroidvania, Indie",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch",
            duracionAproximada: "25-35 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 25,
            historiaExtra: 40,
            speedrunLogros: 70,
            completacionista: 90
        }
    },
    {
        img: "horizon-forbidden-west",
        categoria: "Aventura",
        nombre: "Horizon Forbidden West",
        nombreBusqueda: "horizon forbidden west",
        texto: "La secuela épica que expande todo lo que hizo grande al original con un mundo aún más vasto, máquinas más letales y una historia que eleva las apuestas apocalípticas. Horizon Forbidden West continúa la aventura de Aloy seis meses después de salvar Meridian, ahora viajando hacia el Oeste Prohibido (la costa oeste post-apocalíptica de Estados Unidos) para encontrar la fuente de una plaga misteriosa que está matando toda la vida en la Tierra. El nuevo mapa te lleva desde exuberantes valles de California hasta las ruinas submarinas de San Francisco, pasando por los desiertos ardientes de Nevada con Las Vegas colapsada, playas tropicales y las montañas nevadas de Yosemite, cada bioma repleto de máquinas-dinosaurio nuevas como el aterrador Slitherfang serpentino y el masivo Tremortusk mammoth. El combate evoluciona con nuevas armas especializadas, un sistema de resonador que amplifica daño, armadura mejorable con Sets especiales, un árbol de habilidades expandido con seis ramas de especialización, y mecánicas de sigilo bajo agua para infiltrar asentamientos rebeldes. La historia profundiza el misterio del viejo mundo revelando secretos devastadores sobre los creadores de GAIA, mientras Aloy enfrenta a los Zeniths, humanos inmortales que escaparon de la Tierra siglos atrás y ahora regresan con tecnología alienígena. Con gráficos de siguiente generación que muestran el poder de PS5 en cada rayo de sol filtrado por follaje denso.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.6,
        cantidadReviews: 31234,
        caracteristicas: [
            {
                titulo: "Oeste Prohibido",
                texto: "Explora nuevas tierras desde playas tropicales hasta desiertos áridos, ruinas de San Francisco y Vegas. Mundo vivo con tribus, máquinas y ecosistemas complejos."
            },
            {
                titulo: "Caza de Máquinas",
                texto: "Combate táctico contra máquinas-dinosaurio mejorado. Nuevas armas, trampas y habilidades para desarmar, escanear y dominar bestias mecánicas cada vez más peligrosas."
            },
            {
                titulo: "Misterio Antiguo",
                texto: "Aloy descubre secretos del viejo mundo y enfrenta una nueva amenaza planetaria. Historia épica con giros emocionales y respuestas sobre el pasado de la humanidad."
            }
        ],
        informacion: {
            desarrollador: "Guerrilla Games",
            editor: "Sony Interactive Entertainment",
            fechaLanzamiento: "18 de febrero de 2022",
            genero: "Aventura, Acción, Mundo Abierto, RPG",
            plataformas: "PlayStation 4, PlayStation 5, PC",
            duracionAproximada: "30-40 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 30,
            historiaExtra: 50,
            speedrunLogros: 80,
            completacionista: 100
        }
    },
    {
        img: "red-dead-redemption-2",
        categoria: "Aventura",
        nombre: "Red Dead Redemption 2",
        nombreBusqueda: "red dead redemption 2 rdr2",
        texto: "La magnum opus de Rockstar Games y posiblemente el mundo abierto más detallado, inmersivo y emocionalmente resonante jamás creado en un videojuego. RDR2 es una precuela que cuenta la historia de Arthur Morgan, pistolero leal de la banda Van der Linde liderada por el carismático Dutch, mientras intentan sobrevivir en 1899 cuando el salvaje oeste está muriendo y la civilización moderna avanza implacablemente. La campaña de 60+ horas es una tragedia shakesperiana sobre lealtad, honor, redención y el fin inevitable de una era, con personajes profundamente escritos, actuaciones capturadas por movimiento magistrales y momentos que te dejarán devastado emocionalmente. El mapa masivo abarca múltiples estados desde las montañas nevadas de Ambarino hasta los pantanos de Lemoyne, cada rincón lleno de encuentros aleatorios orgánicos, actividades secundarias infinitas y detalles obsesivos como animales que dejan huellas en nieve, NPCs con rutinas diarias completas y un sistema de honor dinámico que afecta cómo el mundo reacciona a ti. El combate combina tiroteos viscerales con el sistema Dead Eye bullet-time, mientras que la vida de forajido incluye cazar animales perfectos para craftear equipamiento, pescar, jugar poker, asaltar trenes y gestionar tu campamento donde cada miembro tiene historia y personalidad.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 58901,
        caracteristicas: [
            {
                titulo: "Salvaje Oeste Vivo",
                texto: "Mundo abierto más detallado jamás creado. Cada NPC tiene rutinas, la fauna interactúa realísticamente y el clima afecta jugabilidad. Inmersión total en 1899."
            },
            {
                titulo: "Historia Épica",
                texto: "Arthur Morgan lidera la banda de Van der Linde en sus últimos días. Narrativa cinematográfica con actuaciones capturadas y desarrollo de personajes profundo."
            },
            {
                titulo: "Realismo Extremo",
                texto: "Sistemas de supervivencia, honor, relaciones, cuidado de armas y caballo. Detalles obsesivos desde crecimiento de barba hasta descomposición de cadáveres."
            }
        ],
        informacion: {
            desarrollador: "Rockstar Studios",
            editor: "Rockstar Games",
            fechaLanzamiento: "26 de octubre de 2018",
            genero: "Aventura, Acción, Mundo Abierto, Western",
            plataformas: "PlayStation 4, Xbox One, PC",
            duracionAproximada: "50-70 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 50,
            historiaExtra: 80,
            speedrunLogros: 150,
            completacionista: 200
        }
    },
    {
        img: "devil-may-cry-5",
        categoria: "Acción",
        nombre: "Devil May Cry 5",
        nombreBusqueda: "devil may cry 5 dmc5",
        texto: "El pináculo absoluto del género hack and slash que perfecciona el combate estilizado con profundidad técnica inigualable y satisfacción pura en cada golpe. Devil May Cry 5 marca el regreso triunfal de la serie original después de una década, reuniendo al legendario Dante, su joven pupilo Nero y el misterioso V en una historia sobre un árbol demoníaco llamado Qliphoth que invade Red Grave City amenazando con consumir el mundo humano. Lo revolucionario reside en jugar con tres personajes radicalmente diferentes: Nero con sus brazos robóticos Devil Breaker intercambiables que ofrecen habilidades únicas desde garras eléctricas hasta lásers, Dante con cuatro estilos de pelea switcheables (Trickster, Swordmaster, Gunslinger, Royal Guard) y un arsenal ridículamente amplio de armas demoníacas, y V que invoca familiares para pelear mientras él recita poesía de William Blake. El sistema de ranking en tiempo real evalúa cada acción con letras desde D hasta el codiciado triple S (Smokin' Sexy Style), recompensando variedad de combos, timing perfecto, esquivas stylish y creatividad en encadenar ataques. Corre a 60fps rock-sólidos en el motor RE Engine con gráficos fotorrealistas, batallas de jefes épicas contra demonios gigantescos, y una banda sonora dynamic que se intensifica según tu performance con temas rock/metal que se vuelven legendarios.",
        precio: 29.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 24567,
        caracteristicas: [
            {
                titulo: "Combate Estiloso",
                texto: "Sistema de combate más profundo de la serie. Tres personajes jugables (Nero, Dante, V) cada uno con mecánicas únicas y arsenales completamente diferentes."
            },
            {
                titulo: "Rank de Estilo",
                texto: "Sistema de calificación en tiempo real que premia variedad de combos, esquivas perfectas y creatividad. De D hasta SSS, cada pelea es una actuación."
            },
            {
                titulo: "Gráficos RE Engine",
                texto: "Motor gráfico de Resident Evil con 60fps estables. Efectos especiales espectaculares, animaciones fluidas y diseño de enemigos y jefes memorable."
            }
        ],
        informacion: {
            desarrollador: "Capcom",
            editor: "Capcom",
            fechaLanzamiento: "8 de marzo de 2019",
            genero: "Acción, Hack and Slash, Estilizado",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S",
            duracionAproximada: "10-12 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 10,
            historiaExtra: 15,
            speedrunLogros: 40,
            completacionista: 60
        }
    },
    {
        img: "hades",
        categoria: "Acción",
        nombre: "Hades",
        nombreBusqueda: "hades",
        texto: "El roguelike perfecto que finalmente resuelve la narrativa en un género tradicionalmente repetitivo, ganando múltiples Game of the Year y redefiniendo lo que un juego independiente puede lograr. De Supergiant Games (Bastion, Transistor, Pyre) llega esta obra maestra donde controlas a Zagreo, el hijo rebelde de Hades intentando escapar del inframundo para encontrar a su madre biológica en el Monte Olimpo, mientras los dioses olímpicos te ayudan con bendiciones poderosas y cada muerte regresa al Salón de Hades donde interactúas con un elenco memorable de personajes mitológicos griegos. La genialidad está en cómo cada run fallido avanza orgánicamente la historia con miles de líneas de diálogo únicas que reaccionan dinámicamente a tus acciones: qué dioses te ayudaron, cómo moriste, a quién le regalaste néctar, con quién románceaste. El combate isométrico de acción frenética te da seis armas radicalmente diferentes desde la espada Stygius hasta los puños Malphon, cada una con cuatro aspectos legendarios que alteran completamente el playstyle, combinadas con bendiciones de dioses que crean sinergias devastadoras cuando se encadenan correctamente. El arte pintado a mano vibrante con diseño de personajes de Jen Zee es absolutamente impresionante, la banda sonora de Darren Korb mezcla rock progresivo con lira griega antigua, y la actuación de voz liderada por Logan Cunningham como Hades es fenomenal.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: true,
        proximamente: false,
        puntaje: 4.9,
        cantidadReviews: 42890,
        caracteristicas: [
            {
                titulo: "Roguelike Narrativo",
                texto: "Cada muerte avanza la historia. Zagreo intenta escapar del Hades mientras interactúa con dioses olímpicos y personajes del mito griego con diálogos únicos."
            },
            {
                titulo: "Combate Dinámico",
                texto: "Seis armas distintas con aspectos legendarios. Bendiciones de dioses que se combinan en sinergias poderosas. Cada run es diferente y emocionante."
            },
            {
                titulo: "Arte y Música",
                texto: "Estilo artístico pintado a mano vibrante. Banda sonora rock/metal que mezcla lira griega con guitarras eléctricas. Actuación de voz excepcional."
            }
        ],
        informacion: {
            desarrollador: "Supergiant Games",
            editor: "Supergiant Games",
            fechaLanzamiento: "17 de septiembre de 2020",
            genero: "Acción, Roguelike, Mitología",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch",
            duracionAproximada: "20-30 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 20,
            historiaExtra: 50,
            speedrunLogros: 90,
            completacionista: 120
        }
    },
    {
        img: "final-fantasy-xvi",
        categoria: "RPG",
        nombre: "Final Fantasy XVI",
        nombreBusqueda: "final fantasy 16 xvi ff16",
        texto: "La reinvención más audaz de Final Fantasy que abandona el combate por turnos completamente para crear un action RPG maduro, oscuro y políticamente complejo con batallas de Eikons (invocaciones) de escala épica kaiju. FFXVI te sumerge en Valisthea, un mundo medieval de fantasía oscura dividido en reinos en guerra que dependen de cristales mágicos llamados Mothercrystals, siguiendo la historia de Clive Rosfield, el primogénito de un ducado que es testigo de una tragedia familiar devastadora que lo convierte en un esclavo marcado, solo para eventualmente descubrir que puede absorber los poderes de los Eikons legendarios como Ifrit, Bahamut, Shiva y Odin. Producido por Naoki Yoshida (director de FFXIV) y dirigido por Hiroshi Takai, el juego presenta una narrativa madura estilo Game of Thrones con temas políticos complejos sobre esclavitud, religión y guerra, actua cinematográficamente con captura de movimiento completa y clasificación M por primera vez en la franquicia principal. El combate diseñado por Ryota Suzuki (Devil May Cry 5) es acción pura en tiempo real donde Clive alterna entre habilidades de diferentes Eikons equipados simultáneamente, creando combos espectaculares, mientras las batallas de Eikon vs Eikon son setpieces gigantescos semi-QTE donde controlas criaturas del tamaño de montañas destruyendo paisajes enteros.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.6,
        cantidadReviews: 29876,
        caracteristicas: [
            {
                titulo: "Combate de Acción",
                texto: "Alejándose del sistema por turnos, FF16 presenta combate hack & slash en tiempo real. Invocaciones (Eikons) masivas que controlas directamente en batallas kaiju épicas."
            },
            {
                titulo: "Fantasía Medieval Oscura",
                texto: "Narrativa madura sobre guerra, política y magia en el mundo de Valisthea. Clive Rosfield busca venganza mientras descubre verdades sobre los cristales y Dominantes."
            },
            {
                titulo: "Producción Cinematográfica",
                texto: "Dirección de Hiroshi Takai con escenas de acción espectaculares. Banda sonora épica de Masayoshi Soken y gráficos impresionantes en PS5."
            }
        ],
        informacion: {
            desarrollador: "Square Enix Creative Business Unit III",
            editor: "Square Enix",
            fechaLanzamiento: "22 de junio de 2023",
            genero: "RPG, Acción, Fantasía",
            plataformas: "PlayStation 5, PC",
            duracionAproximada: "35-50 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 35,
            historiaExtra: 50,
            speedrunLogros: 80,
            completacionista: 100
        }
    },
    {
        img: "starfield",
        categoria: "RPG",
        nombre: "Starfield",
        nombreBusqueda: "starfield",
        texto: "La primera nueva IP de Bethesda Game Studios en 25 años que lleva la ambición del estudio de Skyrim y Fallout a la inmensidad del espacio con más de 1,000 planetas explorables. Starfield te coloca en el año 2330 como miembro de Constellation, un grupo de exploradores espaciales que descubren artefactos alienígenas misteriosos conectados a una fuerza cósmica antigua, embarcándote en una aventura que combina ciencia ficción hard con filosofía existencial sobre el lugar de la humanidad en el universo. El juego usa el motor Creation Engine 2 completamente renovado para generar proceduralmente sistemas solares completos con planetas que tienen biomas, fauna, flora, recursos mineros y puntos de interés únicos como bases abandonadas, templos alienígenas y naufragios espaciales que recompensan la exploración curiosa. La personalización es absurda: crea tu personaje con trasfondo, traits y habilidades que afectan el diálogo y gameplay, diseña naves espaciales modulares pieza por pieza desde el fuselaje hasta los motores y armas, establece bases en planetas con agricultura, investigación científica y defensa automatizada, y recluta tripulación con habilidades especiales. El combate alterna entre tiroteos terrestres en primera persona con jetpacks y gravedad baja, y batallas espaciales tácticas donde gestionas energía entre escudos, armas y motores. Con facciones como United Colonies, Freestar Collective, Crimson Fleet pirates y Ryujin Industries ofreciendo misiones ramificadas.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: true,
        puntaje: 4.2,
        cantidadReviews: 18234,
        caracteristicas: [
            {
                titulo: "Exploración Galáctica",
                texto: "Más de 1000 planetas explorables en sistemas estelares generados proceduralmente. Desde mundos desérticos hasta lunas heladas con bases alienígenas y artefactos misteriosos."
            },
            {
                titulo: "Personalización Total",
                texto: "Crea tu personaje, customiza naves espaciales módulo por módulo y establece bases en planetas. RPG profundo con habilidades, facciones y decisiones morales complejas."
            },
            {
                titulo: "Combate Espacial",
                texto: "Batallas espaciales con físicas realistas y combate terrestre en primera persona. Recluta tripulación, gestiona recursos y comercia entre colonias estelares."
            }
        ],
        informacion: {
            desarrollador: "Bethesda Game Studios",
            editor: "Bethesda Softworks",
            fechaLanzamiento: "6 de septiembre de 2023",
            genero: "RPG, Ciencia Ficción, Mundo Abierto, Espacial",
            plataformas: "PC, Xbox Series X|S",
            duracionAproximada: "40-60 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 40,
            historiaExtra: 80,
            speedrunLogros: 150,
            completacionista: 250
        }
    },
    {
        img: "ea-sports-fc-24",
        categoria: "Deportes",
        nombre: "EA Sports FC 24",
        nombreBusqueda: "ea sports fc 24 fifa",
        texto: "El renacimiento de la franquicia de fútbol más grande del mundo bajo una nueva identidad después de terminar su asociación histórica con FIFA, manteniendo todo lo esencial y añadiendo innovaciones revolucionarias. EA Sports FC 24 conserva más de 19,000 jugadores reales, 700+ equipos, 30 ligas oficialmente licenciadas incluyendo Premier League, La Liga, Serie A, Bundesliga y Liga MX, además de los derechos de UEFA Champions League, Europa League y Conference League, garantizando que no pierdas nada de la experiencia auténtica. La innovación clave son los PlayStyles y PlayStyles+ que reemplazan los traits antiguos con habilidades únicas basadas en datos reales de Opta: Kevin De Bruyne domina Tiki Taka+ para pases imposibles, Erling Haaland tiene Poder de Disparo+ para remates imparables, Vinícius Jr. posee Regate Técnico+ para uno contra uno letal, haciendo que cada estrella se sienta auténticamente única. Ultimate Team evoluciona con química de equipo completamente rediseñada que premia creatividad en construcción de plantillas, Evolutions que permiten mejorar cartas dinámicamente completando objetivos, e Iconos renovados. El modo Carrera recibe mejoras solicitadas por fans con gestión de plantilla profunda, personalización de tácticas avanzadas y simulación interactiva mejorada.",
        precio: 59.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.1,
        cantidadReviews: 27654,
        caracteristicas: [
            {
                titulo: "Nueva Identidad",
                texto: "Primera entrega sin la marca FIFA. Mantiene todas las ligas oficiales, clubes y jugadores pero con identidad renovada de EA Sports FC y nuevas características."
            },
            {
                titulo: "PlayStyles",
                texto: "Nuevo sistema que refleja habilidades únicas de jugadores reales. De Bruyne tiene Tiki Taka+, Haaland Poder de Disparo+, cada estrella juega auténticamente."
            },
            {
                titulo: "Ultimate Team Evolucionado",
                texto: "FC 24 Ultimate Team con nuevos iconos, eventos y química de equipo renovada. Manager Mode mejorado y carrera de jugador más inmersiva."
            }
        ],
        informacion: {
            desarrollador: "EA Vancouver",
            editor: "Electronic Arts",
            fechaLanzamiento: "29 de septiembre de 2023",
            genero: "Deportes, Simulación, Fútbol",
            plataformas: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, PC, Nintendo Switch",
            duracionAproximada: "Ilimitada (Multijugador)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Holandés, Ruso, Árabe, Japonés"
        },
        tiempoJuego: {
            historiaPrincipal: 12,
            historiaExtra: 35,
            speedrunLogros: 120,
            completacionista: 600
        }
    },
    {
        img: "rocket-league",
        categoria: "Deportes",
        nombre: "Rocket League",
        nombreBusqueda: "rocket league",
        texto: "El fenómeno eSports que toma el concepto simple de \"fútbol con autos propulsados por cohetes\" y lo convierte en uno de los juegos competitivos más hábiles y adictivos jamás creados. Rocket League es engañosamente accesible con controles básicos que cualquiera puede aprender en minutos: acelera, salta, usa el turbo cohete y golpea la pelota hacia la portería enemiga en partidas 1v1, 2v2, 3v3 o caóticas 4v4. Pero el skill ceiling es literalmente infinito con técnicas avanzadas como aerials (volar para golpear la pelota en el aire), air dribbling (mantener la pelota en el aire mientras vuelas), flip resets (resetear tu flip tocando la pelota con las cuatro ruedas en el aire), ceiling shots (despegar del techo para shots imposibles) y wave dashes que separan a rookies de profesionales que ganan millones en el Rocket League Championship Series. La física del juego es perfectamente precisa y consistente, haciendo que cada gol espectacular se sienta totalmente ganado por habilidad pura sin RNG. Con más de 75 millones de jugadores, la escena competitiva incluye torneos oficiales de Psyonix con equipos profesionales como G2 Esports y Team Vitality, rangos competitivos desde Bronze hasta el mítico Supersonic Legend, y una personalización cosmética masiva con miles de items desde autos licenciados reales (BMW, Lamborghini, McLaren) hasta colaboraciones con Batman, Fast & Furious y Jurassic World.",
        precio: 0,
        masJugado: false,
        freeToPlay: true,
        masVendido: false,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 89012,
        caracteristicas: [
            {
                titulo: "Soccar",
                texto: "Fútbol con autos propulsados por cohetes. Física precisa y skill ceiling infinito. Desde aerials hasta flip resets, las posibilidades acrobáticas son ilimitadas."
            },
            {
                titulo: "Competitivo Global",
                texto: "Escena eSports masiva con RLCS (Rocket League Championship Series). Rangos desde Bronze hasta Supersonic Legend, partidas 1v1, 2v2, 3v3 y modos especiales."
            },
            {
                titulo: "Customización",
                texto: "Miles de items cosméticos para personalizar tu auto. Desde BMW hasta Batmobile, pinturas holográficas, goal explosions épicas y trails de motor únicos."
            }
        ],
        informacion: {
            desarrollador: "Psyonix",
            editor: "Psyonix",
            fechaLanzamiento: "7 de julio de 2015",
            genero: "Deportes, Competitivo, Arcade",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch",
            duracionAproximada: "Ilimitada (Multijugador)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 5,
            historiaExtra: 50,
            speedrunLogros: 200,
            completacionista: 1000
        }
    },
    {
        img: "farming-simulator-22",
        categoria: "Simulación",
        nombre: "Farming Simulator 22",
        nombreBusqueda: "farming simulator 22",
        texto: "El simulador agrícola más completo y auténtico del mercado que transforma la agricultura moderna en una experiencia de gestión profunda y sorprendentemente relajante. Farming Simulator 22 te coloca al mando de tu propia operación agrícola en tres mapas europeos y americanos distintos, donde puedes cultivar más de 100 variedades de plantas realistas desde cultivos tradicionales como trigo, maíz, girasoles y soya hasta productos especializados como aceitunas, uvas para vino y álamo para bioenergía, cada uno con sus propios ciclos de siembra, fertilización, cosecha y precios de mercado fluctuantes. La revolución del juego son las estaciones dinámicas que transforman completamente el gameplay: en primavera siembras bajo condiciones óptimas, el verano requiere mantenimiento constante y gestión de malezas, el otoño es tu ventana de cosecha crucial antes que llegue el invierno con nieve que limita actividades obligándote a enfocarte en ganadería y silvicultura. Conduce más de 400 vehículos y herramientas auténticas de las marcas agrícolas más prestigiosas oficialmente licenciadas como John Deere, Case IH, New Holland, Fendt, Massey Ferguson y Claas, cada máquina meticulosamente modelada con cabinas funcionales completamente detalladas. La ganadería incluye vacas, cerdos, ovejas, gallinas y ahora abejas para producción de miel, cada animal requiriendo alimentación apropiada, limpieza de establos y transporte de productos.",
        precio: 49.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.3,
        cantidadReviews: 11234,
        caracteristicas: [
            {
                titulo: "Agricultura Realista",
                texto: "Cultiva más de 100 variedades de plantas desde trigo hasta girasoles. Crianza de animales con vacas, cerdos, ovejas y gallinas que requieren cuidado constante."
            },
            {
                titulo: "Maquinaria Auténtica",
                texto: "Más de 400 máquinas y herramientas de marcas reales como John Deere, Case IH y New Holland. Cada vehículo modelado con precisión y funcionalidad real."
            },
            {
                titulo: "Gestión Completa",
                texto: "Administra finanzas, contrata trabajadores, expande tu granja y adapta estrategias según estaciones. Modo multijugador cooperativo para granjas compartidas."
            }
        ],
        informacion: {
            desarrollador: "GIANTS Software",
            editor: "GIANTS Software",
            fechaLanzamiento: "22 de noviembre de 2021",
            genero: "Simulación, Gestión, Agricultura",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S",
            duracionAproximada: "Ilimitada",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Polaco"
        },
        tiempoJuego: {
            historiaPrincipal: 30,
            historiaExtra: 80,
            speedrunLogros: 150,
            completacionista: 300
        }
    },
    {
        img: "planet-coaster",
        categoria: "Simulación",
        nombre: "Planet Coaster",
        nombreBusqueda: "planet coaster",
        texto: "El simulador definitivo de parques temáticos que te da libertad creativa absoluta para diseñar el parque de atracciones de tus sueños con herramientas de construcción increíblemente profundas. De Frontier Developments (creadores de RollerCoaster Tycoon 3), Planet Coaster eleva el género con un motor gráfico hermoso que renderiza cada visitante individualmente con animaciones únicas, emociones simuladas y necesidades que debes satisfacer. El corazón del juego es el constructor de montañas rusas pieza por pieza que te permite crear coasters personalizados desde cero: elige el tipo (madera, acero, launched, inverted, flying), coloca cada sección de riel con control milimétrico sobre ángulos e inclinaciones, ajusta velocidad y fuerzas G para el rush perfecto, y experimenta tus creaciones en primera persona con cámara POV que simula físicas realistas con sacudidas y náuseas incluidas. Pero va mucho más allá: construye edificios completamente personalizados pieza por pieza con miles de props decorativos, esculpe terreno orgánicamente para crear montañas, valles y lagos, diseña caminos serpenteantes con puentes y túneles, coloca vegetación y iluminación atmosférica. El modo Career presenta escenarios desafiantes con objetivos específicos, Sandbox ofrece presupuesto infinito para creatividad pura, y Challenge Mode te pone a prueba con finanzas realistas donde cada decisión sobre precios, personal, investigación y marketing afecta tu éxito.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.6,
        cantidadReviews: 15678,
        caracteristicas: [
            {
                titulo: "Diseño Total",
                texto: "Herramientas de construcción profundas para crear montañas rusas personalizadas pieza por pieza. Editor de terreno, caminos, edificios y decoraciones con libertad absoluta."
            },
            {
                titulo: "Gestión de Parque",
                texto: "Administra finanzas, personal, precios y felicidad de visitantes. Investiga nuevas atracciones, gestiona colas y optimiza la experiencia del parque."
            },
            {
                titulo: "Workshop Steam",
                texto: "Comparte tus creaciones y descarga miles de diseños de la comunidad. Desde réplicas de parques reales hasta montañas rusas imposibles."
            }
        ],
        informacion: {
            desarrollador: "Frontier Developments",
            editor: "Frontier Developments",
            fechaLanzamiento: "17 de noviembre de 2016",
            genero: "Simulación, Gestión, Construcción",
            plataformas: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S",
            duracionAproximada: "Variable (50+ horas)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 20,
            historiaExtra: 60,
            speedrunLogros: 100,
            completacionista: 200
        }
    },
    {
        img: "xcom-2",
        categoria: "Estrategia",
        nombre: "XCOM 2",
        nombreBusqueda: "xcom 2",
        texto: "El rey de la estrategia táctica por turnos que eleva la tensión y las apuestas con permadeath real, decisiones imposibles y la satisfacción incomparable de orquestar el plan perfecto. XCOM 2 toma lugar 20 años después que XCOM perdió la guerra contra la invasión alienígena, con la Tierra ahora ocupada por los aliens disfrazados como benefactores bajo ADVENT mientras secretamente avanzan el proyecto Avatar que amenaza la extinción humana. Como comandante de la resistencia global operando desde el Avenger (una nave madre capturada), debes liderar operaciones de guerrilla, sabotajes encubiertos y misiones de rescate mientras gestionas recursos escasos y evitas que ADVENT rastree tu localización. El combate táctico por turnos en mapas generados proceduralmente requiere pensamiento estratégico profundo: usa cobertura completa y media para protección, ejecuta flanqueos para bonus de precisión crítico, coordina habilidades de equipo como Granada + Tirador para combos devastadores, y adapta estrategias contra enemigos diversos desde Sectoids telepáticos hasta Berserkers enfurecidos y Chryssalids que infectan. La personalización de soldados es adictiva con cuatro clases base (Ranger, Grenadier, Specialist, Sharpshooter) cada una con dos árboles de habilidades divergentes que crean builds completamente diferentes, pero el verdadero peso emocional viene del permadeath: cuando un soldado con 40+ misiones completadas muere por un tiro crítico inesperado, lo sientes.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.5,
        cantidadReviews: 21890,
        caracteristicas: [
            {
                titulo: "Resistencia Global",
                texto: "20 años después de que XCOM perdiera, lidera la resistencia contra la ocupación alienígena. Misiones de guerrilla, sabotajes y operaciones encubiertas."
            },
            {
                titulo: "Combate Táctico",
                texto: "Sistema de combate por turnos profundo con cobertura, flanqueos y clases de soldados personalizables. Cada decisión puede ser la diferencia entre victoria y derrota total."
            },
            {
                titulo: "Permadeath",
                texto: "Soldados mueren permanentemente creando tensión real. Investiga tecnología alienígena, gestiona recursos limitados y toma decisiones estratégicas difíciles."
            }
        ],
        informacion: {
            desarrollador: "Firaxis Games",
            editor: "2K Games",
            fechaLanzamiento: "5 de febrero de 2016",
            genero: "Estrategia, Táctica, Por turnos, Ciencia ficción",
            plataformas: "PC, PlayStation 4, Xbox One, Nintendo Switch",
            duracionAproximada: "30-40 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 30,
            historiaExtra: 50,
            speedrunLogros: 80,
            completacionista: 120
        }
    },
    {
        img: "total-war-warhammer-iii",
        categoria: "Estrategia",
        nombre: "Total War: Warhammer III",
        nombreBusqueda: "total war warhammer 3 iii",
        texto: "La conclusión épica de la trilogía Total War: Warhammer que combina la profundidad estratégica por turnos de Civilization con batallas tácticas masivas en tiempo real de miles de unidades peleando simultáneamente en campos épicos de fantasía oscura. Warhammer III te lleva a las tierras oscuras del Este y Norte del mundo de Warhammer Fantasy: el Reino del Caos donde los cuatro dioses del Caos (Khorne dios de sangre, Tzeentch de magia, Nurgle de plaga, Slaanesh de exceso) cada uno ofrece facciones completamente únicas con mecánicas asimétricas radicalmente diferentes, más Kislev la nación humana de guerreros del hielo, el Gran Cathay imperial inspirado en China mítica, y los Demonios del Caos que pueden mezclar unidades de los cuatro dioses. El mapa de campaña por turnos te tiene gestionando economía construyendo edificios en provincias, reclutando ejércitos de hasta 20 unidades diversas desde infantería básica hasta monstruos gigantes y artillería mágica, negociando diplomacia con docenas de facciones, investigando tecnologías y navegando eventos narrativos. Pero donde brilla es en batallas en tiempo real: comanda hasta 4,000 unidades simultáneamente posicionando infantería pesada en formaciones de escudo, flanqueando con caballería rápida, bombardeando con artillería de largo alcance, y devastando con hechizos mágicos apocalípticos mientras señores legendarios como el Príncipe Demonio Be'lakor enfrentan a El Zar Katarin de Kislev en duelos épicos.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.4,
        cantidadReviews: 23456,
        caracteristicas: [
            {
                titulo: "Batallas Épicas",
                texto: "Miles de unidades en batallas en tiempo real espectaculares. Desde infantería hasta dragones, magia devastadora y monstruos gigantes en campos de batalla masivos."
            },
            {
                titulo: "Campaña por Turnos",
                texto: "Gestiona tu imperio, diplomacia, economía y conquistas en mapa estratégico. Múltiples facciones con mecánicas únicas del universo Warhammer."
            },
            {
                titulo: "Reino del Caos",
                texto: "Explora el Reino del Caos con los cuatro dioses: Khorne, Tzeentch, Nurgle y Slaanesh. Campaña narrativa épica con finales múltiples."
            }
        ],
        informacion: {
            desarrollador: "Creative Assembly",
            editor: "Sega",
            fechaLanzamiento: "17 de febrero de 2022",
            genero: "Estrategia, RTS, Por turnos, Fantasía",
            plataformas: "PC, macOS, Linux",
            duracionAproximada: "40-80 horas por campaña",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Ruso, Chino, Coreano, Polaco"
        },
        tiempoJuego: {
            historiaPrincipal: 40,
            historiaExtra: 80,
            speedrunLogros: 150,
            completacionista: 300
        }
    },
    {
        img: "need-for-speed-unbound",
        categoria: "Carreras",
        nombre: "Need for Speed Unbound",
        nombreBusqueda: "need for speed unbound nfs",
        texto: "El Need for Speed más estilizado visualmente que fusiona carreras arcade callejeras con un estilo artístico cel-shaded revolucionario que hace que cada drift, salto y derrape sea una explosión de color y expresión. Desarrollado por Criterion Games (los creadores de Burnout), Unbound te lleva a Lakeshore City, una metrópolis urbana ficticia inspirada en Chicago donde las carreras callejeras ilegales dominan las noches y tu objetivo es construir tu reputación desde cero hasta convertirte en leyenda mientras compites en The Grand, el torneo definitivo de carreras con premios masivos. El estilo visual es absolutamente único: autos fotorrealistas con renderizado PBR de siguiente generación se combinan con efectos cel-shaded animados que hacen que tus neumáticos dejen rastros de humo estilizado con colores personalizables, chispas de grafiti cuando derrapas, alas de mariposa que emergen al activar nitro, y tags de arte callejero que marcan tu territorio, todo sincronizado con una banda sonora hip-hop curada por A$AP Rocky. El sistema de riesgo-recompensa te obliga a apostar tu dinero ganado en cada carrera: mientras más tiempo corres acumulando multiplicadores sin ser arrestado, más ganas, pero si la policía te atrapa pierdes todo lo apostado esa noche. La personalización es insana con cientos de autos licenciados desde JDM clásicos hasta hypercars modernos, cada uno modificable con kits de carrocería completos, wraps personalizados layer-by-layer, performance tuning profundo y efectos visuales únicos.",
        precio: 59.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.2,
        cantidadReviews: 14567,
        caracteristicas: [
            {
                titulo: "Estilo Visual Único",
                texto: "Arte cel-shaded con efectos de grafiti y animación que mezclan realismo fotográfico con expresión artística. Efectos de humo, chispas y tags personalizados."
            },
            {
                titulo: "Carreras Callejeras",
                texto: "Compite en carreras ilegales por Lakeshore City. Construye tu reputación, gana dinero y arriesga todo evitando a la policía en persecuciones intensas."
            },
            {
                titulo: "Personalización Extrema",
                texto: "Customiza tu auto con wraps únicos, kits de carrocería, performance y efectos visuales. Cientos de opciones para crear un auto completamente personal."
            }
        ],
        informacion: {
            desarrollador: "Criterion Games",
            editor: "Electronic Arts",
            fechaLanzamiento: "2 de diciembre de 2022",
            genero: "Carreras, Arcade, Callejeras",
            plataformas: "PC, PlayStation 5, Xbox Series X|S",
            duracionAproximada: "15-25 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 15,
            historiaExtra: 30,
            speedrunLogros: 60,
            completacionista: 80
        }
    },
    {
        img: "dirt-rally-2-0",
        categoria: "Carreras",
        nombre: "Dirt Rally 2.0",
        nombreBusqueda: "dirt rally 2",
        texto: "El simulador de rally más auténtico y brutalmente difícil que separa aficionados de verdaderos pilotos virtuales con física impecable y cero margen de error. DiRT Rally 2.0 abandona completamente los arcade aids de otros juegos de Codemasters para ofrecer pura simulación hardcore donde un error en una curva ciega a 180 km/h significa estrellarse contra un árbol y terminar tu rally instantáneamente. El modelo de física simula meticulosamente cada superficie con degradación de neumáticos realista, desgaste mecánico que afecta handling, y sensación táctil diferente entre tierra, grava, nieve, hielo, asfalto mojado y barro profundo que obliga a ajustar tu estilo de conducción constantemente. Compite en ubicaciones rally legendarias escaneadas con láser desde Nueva Zelanda con sus saltos ciegos y paisajes forestales, Argentina con caminos de montaña peligrosos, España con asfalto rápido y técnico, Suecia en hielo puro, Polonia en bosques densos y Australia en tierra roja abrasiva, cada una con cientos de kilómetros de etapas auténticas. Los co-pilotos leen pace notes realistas en tiempo real (\"derecha 3 se cierra a 2, cuidado rocas\") que debes aprender a interpretar mientras manejas al límite. El modo Carrera te tiene gestionando un equipo completo contratando ingenieros, reparando daño entre etapas con tiempo limitado (¿arreglas la transmisión o los frenos?), y compitiendo en campeonatos FIA completos.",
        precio: 39.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.6,
        cantidadReviews: 16789,
        caracteristicas: [
            {
                titulo: "Simulación Pura",
                texto: "Física de conducción ultra-realista en tierra, grava, nieve y asfalto. Cada superficie se siente diferente, desgaste de neumáticos y daños mecánicos afectan rendimiento."
            },
            {
                titulo: "Rallies Legendarios",
                texto: "Recorre etapas auténticas en Nueva Zelanda, Argentina, España, Suecia y más. Ubicaciones con meteorología dinámica que transforma las condiciones."
            },
            {
                titulo: "Gestión de Equipo",
                texto: "Contrata ingenieros, gestiona reparaciones entre etapas y toma decisiones estratégicas. Un error puede costarte el campeonato completo."
            }
        ],
        informacion: {
            desarrollador: "Codemasters",
            editor: "Codemasters",
            fechaLanzamiento: "26 de febrero de 2019",
            genero: "Carreras, Simulación, Rally",
            plataformas: "PC, PlayStation 4, Xbox One",
            duracionAproximada: "Variable (Campeonatos)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés"
        },
        tiempoJuego: {
            historiaPrincipal: 20,
            historiaExtra: 50,
            speedrunLogros: 100,
            completacionista: 150
        }
    },
    {
        img: "super-smash-bros-ultimate",
        categoria: "Lucha",
        nombre: "Super Smash Bros. Ultimate",
        nombreBusqueda: "super smash bros ultimate ssbu",
        texto: "La celebración definitiva de los videojuegos que reúne a más de 89 personajes icónicos de la historia del medio en el crossover de lucha más ambicioso jamás creado. Super Smash Bros. Ultimate cumple su nombre siendo literalmente definitivo: TODOS los luchadores de las entregas anteriores regresan desde veteranos olvidados como Young Link y Pichu hasta favoritos de fans, más 23 nuevos combatientes que incluyen Inkling de Splatoon, Ridley de Metroid, Simon Belmont de Castlevania, Joker de Persona 5, Banjo-Kazooie, Terry Bogard de Fatal Fury, Steve de Minecraft, Sephiroth de FFVII, Pyra/Mythra de Xenoblade y cerrando con Sora de Kingdom Hearts en el DLC más solicitado de la historia. El combate de plataformas único invierte el concepto tradicional de barra de vida: en lugar de reducir HP, acumulas porcentaje de daño que hace a tu personaje más vulnerable a ser lanzado fuera del escenario para un K.O., creando un sistema accesible donde novatos pueden divertirse mashing botones pero con profundidad técnica infinita para competitivos que dominan wavedashing, DI (Directional Influence), ledge trumping y frame data. Con más de 100 escenarios transformables desde el clásico Final Destination hasta locaciones de Zelda, Mario, Pokémon y más, 1,000+ pistas musicales remasterizadas de toda la historia de Nintendo y videojuegos en general, modo historia World of Light de 30+ horas y soporte online mejorado con Arenas personalizadas.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.9,
        cantidadReviews: 72345,
        caracteristicas: [
            {
                titulo: "Roster Masivo",
                texto: "Más de 80 personajes jugables desde Mario, Link, Pikachu hasta Sora, Steve y Kazuya. Todos los luchadores de la historia de Smash más invitados especiales."
            },
            {
                titulo: "Mecánicas Accesibles",
                texto: "Fácil de aprender, imposible de masterizar. Combate de plataformas único donde el objetivo es lanzar oponentes fuera del escenario."
            },
            {
                titulo: "Contenido Infinito",
                texto: "Más de 100 escenarios, 1000+ pistas musicales, modo historia World of Light, torneos online y local para hasta 8 jugadores simultáneos."
            }
        ],
        informacion: {
            desarrollador: "Bandai Namco Studios, Sora Ltd.",
            editor: "Nintendo",
            fechaLanzamiento: "7 de diciembre de 2018",
            genero: "Lucha, Plataformas, Party Game",
            plataformas: "Nintendo Switch",
            duracionAproximada: "Variable (Infinito multijugador)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Holandés, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 15,
            historiaExtra: 40,
            speedrunLogros: 100,
            completacionista: 200
        }
    },
    {
        img: "dragon-ball-fighterz",
        categoria: "Lucha",
        nombre: "Dragon Ball FighterZ",
        nombreBusqueda: "dragon ball fighterz dbfz",
        texto: "El juego de Dragon Ball que los fans siempre soñaron que es también uno de los mejores juegos de lucha 2D de la generación. Desarrollado por Arc System Works (Guilty Gear, BlazBlue), FighterZ usa su revolucionaria tecnología de gráficos 2.5D para crear visuals que son indistinguibles del anime original: cada frame parece dibujado a mano con shading cel-shaded perfecto, animaciones que replican exactamente los movimientos icónicos del manga de Toriyama, efectos especiales explosivos con speed lines, impactos que quiebran la pantalla y cámaras dinámicas que cambian de ángulo en momentos climáticos. El combate es 3v3 tag-team donde seleccionas un equipo de tres luchadores de un roster de 40+ personajes que abarca toda la saga desde Goku en todas sus formas (Base, Super Saiyan, Blue, Ultra Instinct), Vegeta, Gohan, Piccolo, Freezer, Cell, Majin Buu, hasta Beerus, Hit, Jiren, Goku Black y los recién añadidos Super Baby 2 y Gogeta SS4 de GT. Cada personaje tiene sus ataques signature del anime (Kamehameha, Final Flash, Special Beam Cannon, Spirit Bomb) que lucen absolutamente espectaculares con cinematics dramáticos. El sistema es accesible con autocombos para novatos pero esconde profundidad técnica masiva con asistencias, DHCs (Delayed Hyper Combos), Sparking Blast comebacks, y combos extensos que requieren timing frame-perfect.",
        precio: 49.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 31234,
        caracteristicas: [
            {
                titulo: "Estilo Arc System Works",
                texto: "Gráficos 2.5D que parecen sacados directamente del anime. Animaciones fluidas, efectos especiales explosivos y cámaras dinámicas en cada combate."
            },
            {
                titulo: "Combate 3v3",
                texto: "Equipos de tres luchadores con asistencias, cambios rápidos y combos espectaculares. Desde Goku hasta Beerus, cada personaje tiene movimientos icónicos del anime."
            },
            {
                titulo: "Competitivo Profundo",
                texto: "Sistema accesible para casuales pero con profundidad técnica para profesionales. Escena eSports activa con Dragon Ball FighterZ World Tour."
            }
        ],
        informacion: {
            desarrollador: "Arc System Works",
            editor: "Bandai Namco Entertainment",
            fechaLanzamiento: "26 de enero de 2018",
            genero: "Lucha, 2D, Anime",
            plataformas: "PC, PlayStation 4, Xbox One, Nintendo Switch",
            duracionAproximada: "8-12 horas (Historia)",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 8,
            historiaExtra: 15,
            speedrunLogros: 50,
            completacionista: 80
        }
    },
    {
        img: "baba-is-you",
        categoria: "Puzzle",
        nombre: "Baba Is You",
        nombreBusqueda: "baba is you",
        texto: "El puzzle game más innovador y revolucionario de la década que literalmente te permite reescribir las reglas de la realidad para resolver acertijos imposibles. Creado por el desarrollador finlandés Arvi Teikari (Hempuli), Baba Is You toma un concepto simple pero absolutamente brillante: las reglas del juego no están hardcodeadas, sino que existen como bloques de texto físicos en cada nivel que puedes empujar, reorganizar y combinar para alterar fundamentalmente cómo funciona todo. Un nivel comienza con \"BABA IS YOU\" (controlas a Baba), \"WALL IS STOP\" (las paredes te bloquean) y \"FLAG IS WIN\" (tocar la bandera gana), pero puedes empujar estas palabras para crear \"WALL IS YOU\" convirtiendo cada pared en un personaje controlable, o \"ROCK IS WIN\" haciendo que tocar rocas sea la victoria, o incluso \"BABA IS WALL\" transformándote en obstáculo inmóvil, abriendo infinitas posibilidades. Los más de 200 niveles escalan en complejidad demente desde tutoriales básicos hasta puzzles que requieren manipular simultáneamente múltiples reglas existenciales, crear paradojas lógicas intencionales, y literalmente pensar en dimensiones que tu cerebro no sabía que existían. Cada solución se siente como un momento eureka de genialidad pura cuando finalmente entiendes cómo romper la realidad del nivel de forma completamente no-intuitiva.",
        precio: 14.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 19876,
        caracteristicas: [
            {
                titulo: "Reglas Manipulables",
                texto: "Las reglas del juego son objetos físicos que puedes mover. 'BABA IS YOU' puede convertirse en 'WALL IS YOU' o 'FLAG IS WIN', transformando completamente cada puzzle."
            },
            {
                titulo: "Creatividad Pura",
                texto: "Múltiples soluciones para cada nivel. Rompe las reglas de formas inesperadas, combina conceptos imposibles y piensa completamente fuera de la caja."
            },
            {
                titulo: "Dificultad Creciente",
                texto: "Más de 200 niveles que van desde introductorios hasta absolutamente demenciales. Secretos ocultos y niveles extra para los más dedicados."
            }
        ],
        informacion: {
            desarrollador: "Hempuli Oy",
            editor: "Hempuli Oy",
            fechaLanzamiento: "13 de marzo de 2019",
            genero: "Puzzle, Indie, Lógica",
            plataformas: "PC, Nintendo Switch, PlayStation 4, Xbox One, iOS, Android",
            duracionAproximada: "15-25 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 15,
            historiaExtra: 30,
            speedrunLogros: 50,
            completacionista: 70
        }
    },
    {
        img: "return-of-the-obra-dinn",
        categoria: "Puzzle",
        nombre: "Return of the Obra Dinn",
        nombreBusqueda: "return of the obra dinn",
        texto: "La obra maestra de deducción de Lucas Pope (creador de Papers, Please) que te convierte en detective forense investigando qué demonios sucedió en un barco mercante maldito. En 1807, el Obra Dinn zarpa de Londres hacia el Cabo de Buena Esperanza con 60 tripulantes y desaparece misteriosamente. Cinco años después, el barco regresa a puerto flotando a la deriva completamente abandonado, y tú eres el ajustador de seguros de la Compañía de las Indias Orientales enviado a determinar el destino de cada persona a bordo usando el Memento Mortem, un reloj de bolsillo mágico que te permite presenciar el momento exacto de la muerte de cada cadáver. Cada capítulo te muestra una escena congelada en el tiempo con audio de los últimos momentos, y debes usar pura deducción lógica para identificar las 60 personas (nombre, posición en el barco) y determinar su destino (asesinado, ahogado, desaparecido, etc.) usando contexto visual como uniformes, nacionalidad inferida por acentos, relaciones familiares, ubicaciones en el barco y proceso de eliminación. El genio está en el diseño minimalista: no hay tutoriales, no hay pistas directas, solo tu cerebro, una libreta de tripulación y la brillantez de conectar información dispersa a través de 60 escenas no-lineales. El estilo visual monocromático de 1-bit dithering inspirado en los primeros Macintosh crea una atmósfera inquietante inolvidable.",
        precio: 14.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 17654,
        caracteristicas: [
            {
                titulo: "Deducción Pura",
                texto: "Investiga qué sucedió con las 60 tripulantes del Obra Dinn. Usa un reloj mágico para presenciar el momento exacto de cada muerte y deduce identidades y destinos."
            },
            {
                titulo: "Estilo Visual Único",
                texto: "Gráficos monocromáticos estilo dithering de 1-bit que evocan los primeros juegos de Macintosh. Atmósfera inquietante y memorable."
            },
            {
                titulo: "Diseño Inteligente",
                texto: "No hay tutoriales ni pistas directas. Usa lógica, contexto visual, acentos, uniformes y relaciones para resolver el misterio completo del barco maldito."
            }
        ],
        informacion: {
            desarrollador: "Lucas Pope",
            editor: "3909 LLC",
            fechaLanzamiento: "18 de octubre de 2018",
            genero: "Puzzle, Aventura, Misterio, Deducción",
            plataformas: "PC, PlayStation 4, Xbox One, Nintendo Switch, macOS",
            duracionAproximada: "8-12 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 10,
            historiaExtra: 12,
            speedrunLogros: 15,
            completacionista: 18
        }
    },
    {
        img: "dead-space-remake",
        categoria: "Terror",
        nombre: "Dead Space Remake",
        nombreBusqueda: "dead space remake",
        texto: "El remake definitivo del survival horror espacial clásico de 2008 que moderniza cada aspecto mientras preserva religiosamente lo que hizo grande al original. Motive Studio recrea la pesadilla de Isaac Clarke, un ingeniero ordinario de la USG Kellion que responde a una llamada de auxilio de la nave minera planetaria USG Ishimura solo para descubrir que toda la tripulación de 1,000 personas ha sido masacrada y transformada en Necromorphs, horribles criaturas mutantes grotescas resultado de un artefacto alienígena llamado Marker que causa demencia religiosa y transforma cadáveres en monstruosidades. El remake aprovecha el Frostbite Engine de nueva generación para gráficos fotorrealistas que hacen que cada pasillo oscuro, cada sala de máquinas industrial y cada encuentro con Necromorphs sea más aterrador que nunca, mientras elimina TODAS las pantallas de carga haciendo la Ishimura completamente interconectada para exploración sin interrupciones. Isaac ahora tiene voz completa con actuación de Gunner Wright del Dead Space 2, añadiendo profundidad emocional mientras lucha con trauma y desesperación. El combate mantiene el desmembramiento estratégico icónico donde debes cortar extremidades específicas de cada tipo de Necromorph usando herramientas de ingeniería improvisadas como el Plasma Cutter, Line Gun, Pulse Rifle y la letal Force Gun, con recursos escasos creando tensión constante sobre cada disparo y cada uso de estasis.",
        precio: 29.99,
        masJugado: true,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.7,
        cantidadReviews: 28765,
        caracteristicas: [
            {
                titulo: "Terror Espacial",
                texto: "Isaac Clarke en la USG Ishimura infestada de Necromorphs. Atmósfera opresiva, pasillos oscuros y recursos limitados crean tensión constante."
            },
            {
                titulo: "Desmembramiento Estratégico",
                texto: "Corta las extremidades de los Necromorphs con herramientas de ingeniería improvisadas como armas. Plasma Cutter, Line Gun y más en combate visceral."
            },
            {
                titulo: "Remake Moderno",
                texto: "Gráficos de nueva generación, actuación de voz completa, Isaac ahora habla. Nave completamente interconectada sin pantallas de carga, libertad total."
            }
        ],
        informacion: {
            desarrollador: "Motive Studio",
            editor: "Electronic Arts",
            fechaLanzamiento: "27 de enero de 2023",
            genero: "Terror, Survival Horror, Ciencia ficción",
            plataformas: "PC, PlayStation 5, Xbox Series X|S",
            duracionAproximada: "12-15 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 12,
            historiaExtra: 16,
            speedrunLogros: 30,
            completacionista: 40
        }
    },
    {
        img: "amnesia-the-bunker",
        categoria: "Terror",
        nombre: "Amnesia: The Bunker",
        nombreBusqueda: "amnesia the bunker",
        texto: "La evolución radical de la franquicia Amnesia de Frictional Games que abandona el horror lineal por un sandbox de terror inmersive sim donde una criatura implacable te caza persistentemente. Ambientado en 1916 durante la Primera Guerra Mundial, despiertas como Henri Clément, un soldado francés atrapado solo en un búnker abandonado bajo tierra en las trincheras con una bestia monstruosa acechando en la oscuridad. Lo revolucionario es el enfoque semi-open world: el búnker completo está disponible desde el principio con habitaciones interconectadas, ductos de ventilación, almacenes y oficinas que puedes explorar en cualquier orden mientras buscas recursos, armas, combustible para el generador y una forma de escapar. La criatura no está scripted en locaciones específicas sino que vive dinámicamente en los túneles oscuros, respondiendo a ruido (disparos, puertas que se abren, objetos que caen) y emergiendo impredeciblemente para cazarte, forzándote a gestionar cuidadosamente cuánto ruido haces y cuándo vale la pena el riesgo. El generador central es tu salvación temporal: mientras esté encendido alimenta las luces que mantienen a la bestia en las sombras, pero el combustible es escaso obligándote a aventurarte en la oscuridad eventualmente. A diferencia de Amnesias anteriores donde estás indefenso, aquí tienes un revólver con munición limitadísima y trampas improvisadas, pero la criatura es extremadamente resistente haciendo el combate directo casi suicida.",
        precio: 49.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.5,
        cantidadReviews: 13456,
        caracteristicas: [
            {
                titulo: "Amenaza Persistente",
                texto: "Criatura cazadora que acecha constantemente en los túneles. No hay guion, reacciona a tus acciones en tiempo real. Cada partida es impredecible."
            },
            {
                titulo: "Supervivencia con Recursos",
                texto: "Gestiona munición limitada, combustible del generador y objetos. Oscuridad total cuando se apagan las luces. Crafteo, exploración y decisiones desesperadas."
            },
            {
                titulo: "Sandbox de Terror",
                texto: "Enfoque semi-abierto. Múltiples caminos, soluciones creativas a problemas y libertad para explorar el búnker a tu ritmo mientras evitas la muerte."
            }
        ],
        informacion: {
            desarrollador: "Frictional Games",
            editor: "Frictional Games",
            fechaLanzamiento: "6 de junio de 2023",
            genero: "Terror, Survival Horror, Primera Guerra Mundial",
            plataformas: "PC, PlayStation 4, Xbox One, Xbox Series X|S",
            duracionAproximada: "6-8 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano"
        },
        tiempoJuego: {
            historiaPrincipal: 6,
            historiaExtra: 8,
            speedrunLogros: 12,
            completacionista: 15
        }
    },
    {
        img: "cuphead",
        categoria: "Plataformas",
        nombre: "Cuphead",
        nombreBusqueda: "cuphead",
        texto: "Una carta de amor a las caricaturas de los años 30 de Fleischer Studios que es también uno de los boss rush más brutalmente difíciles y hermosos jamás creados. Desarrollado por los hermanos Moldenhauer de Studio MDHR durante 7 años de producción obsesiva, Cuphead es único porque absolutamente TODO está dibujado a mano frame-by-frame en papel usando técnicas de animación tradicional exactamente como se hacía en 1930, luego pintado con acuarelas y transferido a cels, resultando en 50,000+ frames de animación pura que capturan perfectamente la estética de Betty Boop, Popeye y las Silly Symphonies de Disney. La historia simple sigue a Cuphead y Mugman quienes hacen un trato con el Diablo y deben cobrar las almas de sus deudores en Inkwell Isle para pagar su deuda. El gameplay es principalmente batallas de jefes (más de 30) ultra-desafiantes con patrones de ataque complejos, múltiples fases que transforman completamente cada pelea, y dificultad Old School sin piedad que requiere memorizar patrones, timing perfecto y docenas de intentos para victorias que se sienten absolutamente ganadas. Los niveles run & gun tradicionales te tienen corriendo y disparando constantemente esquivando obstáculos y enemigos mientras recolectas monedas para comprar nuevas armas (Chaser, Spread, Lobber) y Charms que modifican tu playstyle. La banda sonora de jazz vintage auténtico con big band, ragtime y swing complementa perfectamente los visuales.",
        precio: 19.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.6,
        cantidadReviews: 26789,
        caracteristicas: [
            {
                titulo: "Arte de los Años 30",
                texto: "Cada frame dibujado a mano al estilo caricaturas de Fleischer Studios. Animación tradicional con acuarelas, jazz vintage y estética genuinamente retro."
            },
            {
                titulo: "Boss Rush Brutal",
                texto: "Principalmente batallas de jefes ultra-desafiantes. Patrones de ataque complejos, múltiples fases y dificultad Old School que premia la persistencia."
            },
            {
                titulo: "Run & Gun",
                texto: "Niveles de plataformas run & gun con disparos constantes. Armas intercambiables, Super Arts especiales y modo cooperativo local para dos jugadores."
            }
        ],
        informacion: {
            desarrollador: "Studio MDHR",
            editor: "Studio MDHR",
            fechaLanzamiento: "29 de septiembre de 2017",
            genero: "Plataformas, Run & Gun, Shoot 'em up",
            plataformas: "PC, PlayStation 4, Xbox One, Nintendo Switch",
            duracionAproximada: "8-12 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 8,
            historiaExtra: 12,
            speedrunLogros: 25,
            completacionista: 35
        }
    },
    {
        img: "ori-and-the-will-of-the-wisps",
        categoria: "Plataformas",
        nombre: "Ori and the Will of the Wisps",
        nombreBusqueda: "ori and the will of the wisps",
        texto: "La secuela que perfecciona todo lo que hizo brillar a Blind Forest convirtiéndose en el metroidvania 2D más hermoso y emotivo jamás creado. Moon Studios expande la aventura de Ori, el espíritu guardián del bosque de Nibel, quien ahora debe viajar a las tierras marchitas de Niwen para descubrir su verdadero destino después de separarse de Ku, la lechuza que adoptó como familia. El arte pintado a mano alcanza nuevas alturas de belleza con el motor Unity completamente personalizado renderizando bosques bioluminiscentes que brillan con luciérnagas, cascadas majestuosas, ruinas antiguas cubiertas de vegetación, desiertos desolados con tormentas de arena, pantanos tenebrosos y cavernas subterráneas con cristales brillantes, todo con iluminación dinámica y partículas atmosféricas que crean postales vivientes en cada pantalla. El movimiento es la plataforma más fluida y satisfactoria del género: Ori gana habilidades como triple jump, dash aéreo, planeo, grappling hook, burrow que permite excavar, y el revolucionario bash que te impulsa desde proyectiles y enemigos en cualquier dirección, permitiendo secuencias de escape apocalípticas donde el mundo colapsa detrás tuyo y debes encadenar habilidades perfectamente para sobrevivir. A diferencia del primero, ahora tienes combate profundo con arsenal completo: espadas espirituales, arcos, lanzas, martillos, shurikens, cada arma con combos únicos, además de batallas de jefes épicas monumentales.",
        precio: 29.99,
        masJugado: false,
        freeToPlay: false,
        masVendido: false,
        proximamente: false,
        puntaje: 4.8,
        cantidadReviews: 23456,
        caracteristicas: [
            {
                titulo: "Arte Pintado a Mano",
                texto: "Gráficos 2D pintados con colores vibrantes y animaciones fluidas. Bosques bioluminiscentes, desiertos áridos y pantanos tenebrosos visualmente impresionantes."
            },
            {
                titulo: "Plataformas Precisas",
                texto: "Movimiento fluido con dash, salto triple, planeo y más habilidades. Secuencias de escape épicas y platforming que requiere timing perfecto."
            },
            {
                titulo: "Combate Mejorado",
                texto: "A diferencia del primer Ori, ahora tienes arsenal variado: espadas espirituales, arcos, lanzas. Jefes épicos y sistema de combate profundo."
            }
        ],
        informacion: {
            desarrollador: "Moon Studios",
            editor: "Xbox Game Studios",
            fechaLanzamiento: "11 de marzo de 2020",
            genero: "Plataformas, Metroidvania, Aventura",
            plataformas: "PC, Xbox One, Xbox Series X|S, Nintendo Switch",
            duracionAproximada: "12-15 horas",
            idiomas: "Español, Inglés, Francés, Alemán, Italiano, Portugués, Ruso, Japonés, Coreano, Chino"
        },
        tiempoJuego: {
            historiaPrincipal: 12,
            historiaExtra: 18,
            speedrunLogros: 30,
            completacionista: 40
        }
    }
];