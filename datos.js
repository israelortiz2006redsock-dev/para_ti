const baseDeDatosCuriosos = [
    "El primer juego de Zelda se inspiro en las exploraciones infantiles de Shigeru Miyamoto.",
    "El logo de Minecraft en el menu principal tiene una probabilidad de 1 en 10,000 de decir 'Minceraft'.",
    "Persona 3 tiene un final secreto que solo descubren los jugadores mas dedicados.",
    "El color original del traje de Batman iba a ser rojo con alas rigidas.",
    "Sabias que en nuestra primera cita estaba tan nervioso que me dio un tic en mi ceja?",
    "sabias que las 392 fotos tienen comentarios unicos?",
    // --- Manhunt ---
    "En Manhunt, el perturbador villano Piggsy era originalmente un hombre normal que perdio la cordura al creer que era un cerdo real.",
    "Starkweather, el aterrador director de las peliculas snuff en Manhunt, fue interpretado por el reconocido actor de Hollywood Brian Cox.",
    
    // --- Manhunt 2 ---
    "Manhunt 2 fue considerado tan extremo que Rockstar tuvo que ponerle un filtro borroso a las ejecuciones para que no fuera prohibido en las tiendas.",
    "El gran giro de Manhunt 2 es que Leo, el asesino despiadado que te acompana, es en realidad una doble personalidad habitando en la mente de Danny.",
    
    // --- The Legend of Zelda: Twilight Princess ---
    "En The Legend of Zelda: Twilight Princess, el bebe Malo es tan intimidante que termina fundando su propia cadena de supermercados capitalista, la cual tiene la musica mas pegajosa de todo Hyrule.",
    "Si en Twilight Princess te acercas a un perro en la ciudad, Link puede cargarlo y correr con el por todas partes sin ninguna utilidad real, solo por diversion.",
    
    // --- Minecraft ---
    "El inconfundible diseño del Creeper en Minecraft nacio por accidente cuando su creador invirtio los valores de altura y anchura al intentar programar un cerdo.",
    "Los aterradores sonidos de los Endermen son en realidad audios de desarrolladores diciendo palabras en ingles como 'Hello' o 'What's up', pero reproducidos al reves y distorsionados.",
    
    // --- Alice: Madness Returns ---
    "En el oscuro mundo de Alice Madness Returns, un simple pimentero de cocina se convierte magicamente en una metralleta Gatling de alto calibre.",
    "El Alice: Madness Returns juego tiene una habitacion secreta donde los jugadores pueden encontrar escondido el esqueleto de Raz, el protagonista del videojuego Psychonauts.",
    
    // --- Banjo-Kazooie ---
    "El misterio mas grande de Banjo-Kazooie fue 'Stop n Swop', unos huevos secretos que los jugadores podian ver pero no recolectar, y cuyo misterio se resolvio casi 10 anos despues.",
    "En Banjo-Kazooie pesar de ser un juego para todo publico, existe un personaje que es literalmente un inodoro parlante llamado Loggo, al cual Kazooie le tiene asco.",
    
    // --- Uzumaki ---
    "Junji Ito, el autor de Uzumaki, revelo que su gran inspiracion para crear este terrorifico manga vino simplemente de observar los espirales de los inciensos para mosquitos.",
    "Dentro de lo turbio de la historia de Uzumaki, llega un punto tan absurdo donde los estudiantes se convierten en caracoles gigantes y los maestros tienen que separarlos para que no se reproduzcan.",
    
    // --- Berserk ---
    "La colosal espada de Guts, la Matadragones, es tan absurdamente grande y pesada que en la historia se describe mas como un bloque de hierro crudo que como un arma real.",
    "A pesar de la oscuridad extrema de Berserk, el elfo Puck cambia constantemente a una forma de 'castana' minimalista y comica en medio de batallas sangrientas para relajar la tension."
];

// Copiamos la lista original para ir tachando los que ya salieron
let datosDisponibles = [...baseDeDatosCuriosos];

function mostrarDatoNuevo() {
    const display = document.getElementById("fact-display");

    // Si ya nos quedamos sin datos, volvemos a llenar la lista
    if (datosDisponibles.length === 0) {
        datosDisponibles = [...baseDeDatosCuriosos];
    }

    // Elegimos un numero al azar basado en los datos que quedan
    const indiceAleatorio = Math.floor(Math.random() * datosDisponibles.length);
    
    // Obtenemos el texto
    const datoSeleccionado = datosDisponibles[indiceAleatorio];

    // Lo mostramos en pantalla
    display.textContent = datoSeleccionado;

    // Lo eliminamos de la lista disponible para que no se repita
    datosDisponibles.splice(indiceAleatorio, 1);
}

// Hacemos que se cargue un dato automaticamente al abrir la pagina
window.addEventListener('load', mostrarDatoNuevo);