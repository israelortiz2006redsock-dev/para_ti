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
        
        let estilosValidos = estilosDisponibles.filter(estilo => estilo !== estiloActual);
        estiloActual = estilosValidos[Math.floor(Math.random() * estilosValidos.length)];
        
        fotosHoy = [];
        
        if (fotosVistas.length + fotosPorDia > totalFotos) {
            fotosVistas = [];
        }

        while (fotosHoy.length < fotosPorDia) {
            let idAleatorio = Math.floor(Math.random() * totalFotos) + 1; 
            
            if (!fotosVistas.includes(idAleatorio) && !fotosHoy.includes(idAleatorio)) {
                fotosHoy.push(idAleatorio);
                fotosVistas.push(idAleatorio);
            }
        }

        localStorage.setItem('estiloCarrusel', estiloActual);
        localStorage.setItem('fechaCarrusel', hoy);
        localStorage.setItem('fotosHoy', JSON.stringify(fotosHoy));
        localStorage.setItem('fotosVistas', JSON.stringify(fotosVistas));
    }

    // --- APLICAR CAMBIOS AL HTML ---
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.classList.add(estiloActual);

    const track = document.getElementById('track');
    track.innerHTML = ''; 
    
    fotosHoy.forEach(id => {
        let slide = document.createElement('div');
        slide.className = 'carousel-slide';
        
        let comentario = comentariosFotos[id] || `Un momento muy especial a tu lado ✨`;
        
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
        const audioElement = document.getElementById("ee-audio"); 

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
// LÓGICA ANTIGUA: ATAQUE MASIVO DE CORAZÓN (OCULTA POR AHORA)
// ========================================================
function lanzarAtaqueCorazon() {
    const canvas = document.getElementById('heart-canvas');
    canvas.innerHTML = ''; 
    canvas.style.display = 'block';

    const botonCierre = document.createElement('button');
    botonCierre.className = 'close-canvas-btn';
    botonCierre.innerText = 'Cerrar Corazón ❌';
    botonCierre.onclick = () => canvas.style.display = 'none';
    canvas.appendChild(botonCierre);

    const totalVentanas = 220;
    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;
    const escala = Math.min(window.innerWidth, window.innerHeight) / 42; 
    const offsetAncho = window.innerWidth <= 1000 ? 50 : 80;
    const offsetAlto = window.innerWidth <= 1000 ? 45 : 65;

    for (let i = 0; i < totalVentanas; i++) {
        const t = (i / totalVentanas) * 2 * Math.PI;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);

        const posX = centroX + (x * escala) - offsetAncho;
        const posY = centroY - (y * escala) - offsetAlto; 
        const numFoto = Math.floor(Math.random() * 394) + 1;

        let fraseAsociada = "¡Te amo! 🖤"; 
        if (typeof comentariosFotos !== 'undefined' && comentariosFotos[numFoto]) {
            fraseAsociada = comentariosFotos[numFoto];
        }

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
        setTimeout(() => { ventana.classList.add('pop'); }, i * 25); 
    }
}
function cerrarLienzoCorazon(event) {
    if (event.target.id === 'heart-canvas') {
        document.getElementById('heart-canvas').style.display = 'none';
    }
}

function mostrarFotoCumple() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('modal-caption');
    const numFoto = Math.floor(Math.random() * 394) + 1;
    
    let fraseAsociada = "¡Feliz Cumpleaños mi amor! 🎉"; 
    if (typeof comentariosFotos !== 'undefined' && comentariosFotos[numFoto]) {
        fraseAsociada = comentariosFotos[numFoto];
    }
    
    modalImg.src = `fotos/foto${numFoto}.jpeg`;
    modalImg.onerror = function() { this.src = 'fotos/foto1.jpeg'; };
    captionText.innerHTML = `🎂 ${fraseAsociada} 🎂`;
    modal.style.display = "block";
}


// PON TUS FRASES AQUÍ ADENTRO 
const frasesAniversario = [
    "Sé que hoy ha sido un día difícil...",
    "Y asumo la culpa de las cosas que pasaron.",
    "A veces la distancia hace que todo se sienta más pesado.",
    "Pero no quería que este día terminara así.",
    "Porque hoy no es un día cualquiera.",
    "Hoy cumplimos 2 años juntos.",
    "2 años de conocernos, de apoyarnos...",
    "De jugar, de reir, arreglar las cosas, y de volvernos a elegir.",
    "Perdóname por lo de hoy.",
    "Eres lo mejor que me ha pasado.",
    "Feliz 2do Aniversario mi amor. Te amo."
];

let clicApagon = 0;

function iniciarApagon() {
    const overlay = document.getElementById('apagon-overlay');
    const audio = document.getElementById('audio-aniversario');
    
    overlay.style.display = 'block';
    
    // Intenta reproducir el audio
    if(audio.src && audio.src !== window.location.href) {
        audio.play().catch(e => console.log("Asegúrate de que la canción exista en la carpeta"));
    }

    setTimeout(() => {
        overlay.classList.add('activo');
    }, 50);
    
    clicApagon = 0;
    document.getElementById('apagon-collage').innerHTML = '';
    
    const texto = document.getElementById('apagon-texto');
    texto.innerHTML = 'Toca la pantalla...';
    texto.style.opacity = 1;
    texto.style.fontSize = "1.5rem";
    texto.style.color = "#aaaaaa";
}

function avanzarApagon() {
    if (clicApagon >= frasesAniversario.length) return; 

    const texto = document.getElementById('apagon-texto');
    const collage = document.getElementById('apagon-collage');

    texto.style.opacity = 0;

    setTimeout(() => {
        // Escribir la nueva frase
        texto.innerHTML = frasesAniversario[clicApagon];
        texto.style.opacity = 1;
        texto.style.color = "#ffffff";
        texto.style.fontSize = window.innerWidth < 1000 ? "1.4rem" : "2rem";

        // Generar 8 fotos simultáneas en distintas posiciones
        const cantidadFotosPorClic = 8;
        
        for (let j = 0; j < cantidadFotosPorClic; j++) {
            const numFoto = Math.floor(Math.random() * 394) + 1;
            const img = document.createElement('img');
            img.src = `fotos/foto${numFoto}.jpeg`;
            img.className = 'apagon-foto';
            img.onerror = function() { this.src = 'fotos/foto1.jpeg'; };

            // Posiciones aleatorias en toda la pantalla
            const posX = Math.random() * (window.innerWidth - 180);
            const posY = Math.random() * (window.innerHeight - 180);
            const rotacion = (Math.random() * 40) - 20; 

            img.style.left = `${posX}px`;
            img.style.top = `${posY}px`;
            img.style.setProperty('--rotacion', `${rotacion}deg`);

            collage.appendChild(img);

            // Efecto cascada: aparecen una tras otra rápidamente
            setTimeout(() => img.classList.add('show'), 50 + (j * 150));
        }

        clicApagon++;

        // Si es la ÚLTIMA frase
        if (clicApagon === frasesAniversario.length) {
            const todasLasFotos = document.querySelectorAll('.apagon-foto');
            todasLasFotos.forEach(f => f.classList.add('collage-final'));
            
            texto.style.fontSize = window.innerWidth < 1000 ? "2rem" : "3.5rem";
            texto.style.color = "#ff8fb8";
            texto.style.textShadow = "0 0 20px rgba(255, 143, 184, 0.8)";
        }
    }, 800); 
}
