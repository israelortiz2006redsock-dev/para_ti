document.addEventListener('DOMContentLoaded', () => {

    const cancionElegida = playlist[Math.floor(Math.random() * playlist.length)];
    
    // Inyectamos los datos en el HTML
    document.getElementById('album-cover').src = cancionElegida.portada;
    document.getElementById('song-name').textContent = cancionElegida.nombre;
    document.getElementById('song-link').href = cancionElegida.link;

    // --- VARIABLES DE CONFIGURACIÓN ---
    const totalFotos = 394; // Ajustado a tus ~390 fotos
    const fotosPorDia = 14;
    const estilosDisponibles = ['estilo-film', 'estilo-polaroid', 'estilo-rpg', 'estilo-vhs', 'estilo-scrapbook'];
    const hoy = new Date().toLocaleDateString();

    // --- LECTURA DEL ALMACENAMIENTO LOCAL ---
    let fechaGuardada = localStorage.getItem('fechaCarrusel');
    let estiloActual = localStorage.getItem('estiloCarrusel');
    let fotosVistas = JSON.parse(localStorage.getItem('fotosVistas')) || [];
    let fotosHoy = JSON.parse(localStorage.getItem('fotosHoy')) || [];

    // --- LÓGICA DIARIA: SI ES UN DÍA NUEVO (o primera vez) ---
    if (fechaGuardada !== hoy || !estiloActual || fotosHoy.length === 0) {
        
        // 1. Elegir un nuevo estilo sin repetir el de ayer
        let estilosValidos = estilosDisponibles.filter(estilo => estilo !== estiloActual);
        estiloActual = estilosValidos[Math.floor(Math.random() * estilosValidos.length)];
        
        // 2. Elegir 14 fotos nuevas
        fotosHoy = [];
        
        if (fotosVistas.length + fotosPorDia > totalFotos) {
            fotosVistas = []; // Reiniciar si se acaban
        }

        while (fotosHoy.length < fotosPorDia) {
            let idAleatorio = Math.floor(Math.random() * totalFotos) + 1; 
            
            if (!fotosVistas.includes(idAleatorio) && !fotosHoy.includes(idAleatorio)) {
                fotosHoy.push(idAleatorio);
                fotosVistas.push(idAleatorio);
            }
        }

        // 3. Guardar todo
        localStorage.setItem('estiloCarrusel', estiloActual);
        localStorage.setItem('fechaCarrusel', hoy);
        localStorage.setItem('fotosHoy', JSON.stringify(fotosHoy));
        localStorage.setItem('fotosVistas', JSON.stringify(fotosVistas));
    }

    // --- APLICAR CAMBIOS AL HTML ---
    const carouselContainer = document.querySelector('.carousel-container');
    // Aplicamos el estilo elegido
    carouselContainer.classList.add(estiloActual);

    // Inyectar las 14 fotos al carrusel
    const track = document.getElementById('track');
    track.innerHTML = ''; 
    
    fotosHoy.forEach(id => {
        let slide = document.createElement('div');
        slide.className = 'carousel-slide';
        
        // Busca en comentarios.js o pone texto por defecto
        let comentario = comentariosFotos[id] || `Un momento muy especial a tu lado ✨`;
        
        // Buscando archivos con .jpeg
        slide.innerHTML = `<img src="fotos/foto${id}.jpeg" onerror="this.onerror=null; this.src='fotos/foto1.jpeg';" alt="Recuerdo ${id}" data-caption="${comentario}">`;
        track.appendChild(slide);
    });

    // --- LÓGICA DEL CARRUSEL AUTOMÁTICO ---
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    
    function autoPlay() {
        if (slides.length === 0) return;
        currentIndex++;
        if (currentIndex >= slides.length) { currentIndex = 0; }
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    let carouselInterval = setInterval(autoPlay, 4000);

    // --- LÓGICA DEL MODAL (ZOOM) ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.close');
    const images = document.querySelectorAll('.carousel-slide img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            clearInterval(carouselInterval);
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.getAttribute('data-caption');
        });
    });

    function closeModal() {
        modal.style.display = "none";
        carouselInterval = setInterval(autoPlay, 4000);
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if(e.target === modal) closeModal();
    });
});

// --- LÓGICA DEL PANEL SECRETO ---
let currentCode = "";
const display = document.getElementById("secret-display");
const popup = document.getElementById("easter-egg-popup");

function pressKey(num) {
    if (currentCode.length < 8) {
        currentCode += num;
        display.textContent = currentCode;
    }
}

function clearSecret() {
    currentCode = "";
    display.textContent = "____";
}

function checkSecret() {
    const secreto = baseDeDatosSecretos[currentCode];
    
    if (secreto) {
        const imgElement = document.getElementById("peeking-image");
        const vidContainer = document.getElementById("peeking-video-container");
        const vidElement = document.getElementById("peeking-video");
        const audioElement = document.getElementById("ee-audio"); // Conectamos el audio

        if (secreto.tipo === "video") {
            vidElement.src = secreto.archivo;
            vidContainer.classList.add("show");
            vidElement.play();
            
            vidElement.onended = function() {
                vidContainer.classList.remove("show");
                setTimeout(() => { vidElement.src = ""; }, 1000);
            };
        } else {
            imgElement.src = secreto.archivo;
            
            // Si le pusiste un sonido en secretos.js, lo reproducimos
            if (secreto.sonido) {
                audioElement.src = secreto.sonido;
                audioElement.play();
            }

            imgElement.classList.add("show");
            
            setTimeout(() => {
                imgElement.classList.remove("show");
            }, 2000);
        }
        
        clearSecret(); 
    } else {
        display.style.color = "red";
        display.textContent = "ERROR";
        
        // Si quieres, aquí también podrías agregar un sonido de error en el futuro
        
        setTimeout(() => {
            clearSecret();
            display.style.color = "#55ff55";
        }, 800);
    }
}

// --- LÓGICA DEL CUESTIONARIO DE DISCORD ---
function enviarRespuesta() {
    const opciones = document.getElementsByName("discord-plan");
    let seleccion = "";
    
    // Verificamos cual opcion selecciono
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccion = opciones[i].value;
            break;
        }
    }

    // Si le da a enviar sin elegir nada
    if (seleccion === "") {
        alert("Por favor selecciona una opcion primero.");
        return;
    }

    // AQUI PON TU NUMERO REAL SIN ESPACIOS NI GUIONES
    // El 52 es el codigo de pais. Solo cambia los ultimos 10 digitos.
    const miNumero = "522224562927"; 
    
    const mensaje = "Hola! Hoy en Discord me gustaria " + seleccion + ".";
    
    // Creamos el enlace que abre WhatsApp
    const url = "https://wa.me/" + miNumero + "?text=" + encodeURIComponent(mensaje);
    
    // Abre WhatsApp en una pestaña nueva
    window.open(url, "_blank");
}