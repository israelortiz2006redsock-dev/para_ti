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

    if (seleccion === "") {
        alert("Por favor selecciona una opcion primero.");
        return;
    }

    const miNumero = "522224562927"; 
    const mensaje = "Hola! Hoy en Discord me gustaria " + seleccion + ".";
    const url = "https://wa.me/" + miNumero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}

// ========================================================
// NUEVA LÓGICA: ATAQUE MASIVO DE CORAZÓN (VENTANAS RETRO)
// ========================================================

function lanzarAtaqueCorazon() {
    const canvas = document.getElementById('heart-canvas');
    canvas.innerHTML = ''; // Limpiar cualquier ejecución anterior
    canvas.style.display = 'block';

    // Crear el botón flotante para cerrar el lienzo
    const botonCierre = document.createElement('button');
    botonCierre.className = 'close-canvas-btn';
    botonCierre.innerText = 'Cerrar Corazón ❌';
    botonCierre.onclick = () => canvas.style.display = 'none';
    canvas.appendChild(botonCierre);

    const totalVentanas = 220;
    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;
    
    // Calcula qué tan grande puede ser el corazón dependiendo de la pantalla
    const escala = Math.min(window.innerWidth, window.innerHeight) / 42; 

    // Calcula el tamaño real de la ventana según el dispositivo para centrarla exacto
    const offsetAncho = window.innerWidth <= 1000 ? 50 : 80;
    const offsetAlto = window.innerWidth <= 1000 ? 45 : 65;

    for (let i = 0; i < totalVentanas; i++) {
        // Generar coordenadas en forma de corazón
        const t = (i / totalVentanas) * 2 * Math.PI;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);

        const posX = centroX + (x * escala) - offsetAncho;
        const posY = centroY - (y * escala) - offsetAlto; 

        // Elegir una foto al azar
        const numFoto = Math.floor(Math.random() * 394) + 1;

        // Recuperar la frase exacta del archivo comentarios.js
        let fraseAsociada = "¡Te amo! 🖤"; 
        if (typeof comentariosFotos !== 'undefined' && comentariosFotos[numFoto]) {
            fraseAsociada = comentariosFotos[numFoto];
        }

        // Crear la ventana falsa
        const ventana = document.createElement('div');
        ventana.className = 'fake-window';
        ventana.style.left = `${posX}px`;
        ventana.style.top = `${posY}px`;
        ventana.style.zIndex = i + 1000;

        ventana.innerHTML = `
            <div class="window-bar">
                <span>🖤 Nuestro Momento</span>
                <span style="cursor:pointer; font-weight:bold;" onclick="this.closest('.fake-window').remove()">X</span>
            </div>
            <div class="window-content">
                <img src="fotos/foto${numFoto}.jpeg" onerror="this.onerror=null; this.src='fotos/foto1.jpeg';" alt="Recuerdo">
                <div class="window-txt" title="${fraseAsociada}">${fraseAsociada}</div>
            </div>
        `;

        canvas.appendChild(ventana);

        // Hacer que aparezcan en cascada (cada 25 milisegundos)
        setTimeout(() => {
            ventana.classList.add('pop');
        }, i * 25); 
    }
}

// Permite cerrar si hace clic fuera de las ventanas
function cerrarLienzoCorazon(event) {
    if (event.target.id === 'heart-canvas') {
        document.getElementById('heart-canvas').style.display = 'none';
    }
}

// ========================================================
// NUEVA LÓGICA: LETRAS DE FELIZ CUMPLEAÑOS
// ========================================================
function mostrarFotoCumple() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('modal-caption');
    
    // Elige un número al azar de tus 394 fotos
    const numFoto = Math.floor(Math.random() * 394) + 1;
    
    // Busca la frase en tu archivo de comentarios
    let fraseAsociada = "¡Feliz Cumpleaños mi amor! 🎉"; 
    if (typeof comentariosFotos !== 'undefined' && comentariosFotos[numFoto]) {
        fraseAsociada = comentariosFotos[numFoto];
    }
    
    // Asigna la foto y la frase al modal
    modalImg.src = `fotos/foto${numFoto}.jpeg`;
    
    // Por si acaso una foto falla, que muestre la 1
    modalImg.onerror = function() { this.src = 'fotos/foto1.jpeg'; };
    
    captionText.innerHTML = `🎂 ${fraseAsociada} 🎂`;
    
    // Abre el visor de fotos
    modal.style.display = "block";
}
