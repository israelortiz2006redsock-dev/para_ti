// gacha.js
// Base de datos de premios y lógica de probabilidad

const premiosGacha = [
    {
        id: 1,
        nombre: "Vale por una pelicula a tu eleccion",
        rareza: "Comun",
        claseRareza: "rarity-comun",
        peso: 45, 
        mensaje: "Prepara las palomitas, hoy tu decides que vemos."
    },
     {
        id: 10,
        nombre: "Vale no darte vueltas",
        rareza: "Comun",
        claseRareza: "rarity-comun",
        peso: 45, 
        mensaje: "Durante una cita no te podre dar vueltas, puedo cargarte al menos?."
    },
    {
        id: 11,
        nombre: "un chicle ",
        rareza: "Comun",
        claseRareza: "rarity-comun",
        peso: 45, 
        mensaje: "Del sabor que quieras, habra de mandarina?."
    },
    {
        id: 12,
        nombre: "Vale por enseñarte a hacer algo al azar",
        rareza: "Comun",
        claseRareza: "rarity-comun",
        peso: 45, 
        mensaje: "Te enseñare algo de lo que se pero al azar :3."
    },
    
    {
        id: 2,
        nombre: "Cena pagada por byeppie",
        rareza: "Raro",
        claseRareza: "rarity-raro",
        peso: 35, 
        mensaje: "Vamos por unos tacos, ramen o lo que se te antoje."
    },
     {
        id: 9,
        nombre: "Minecraft toda la semana",
        rareza: "Raro",
        claseRareza: "rarity-raro",
        peso: 35, 
        mensaje: "Jugaremos minecraft toda la semana, haremos un ejercito de gatos?."
    },
    {
        id: 8,
        nombre: "Tu me amas mas por hoy",
        rareza: "Raro",
        claseRareza: "rarity-raro",
        peso: 35, 
        mensaje: "Pero yo te amo mucho tambien."
    },
    {
        id: 3,
        nombre: "Elegir el juego en Discord",
        rareza: "Epico",
        claseRareza: "rarity-epico",
        peso: 20, 
        mensaje: "Toda la noche jugaremos exactamente lo que tu quieras."
    },
    {
        id: 6,
        nombre: "Te ganaste un pin",
        rareza: "Epico",
        claseRareza: "rarity-epico",
        peso: 20, 
        mensaje: "Todos quieren uno, no?."
    },
    {
        id: 7,
        nombre: "Ramen buldak",
        rareza: "Epico",
        claseRareza: "rarity-epico",
        peso: 20, 
        mensaje: "Te comprare un ramen buldak, pican demaciado :(."
    },
    {
        id: 4,
        nombre: "Pase libre en una discusion",
        rareza: "Legendario",
        claseRareza: "rarity-legendario",
        peso: 10,  
        mensaje: "Tienes la razon automaticamente. Usalo sabiamente..."
    },
    {
        id: 5,
        nombre: "Unos chetos en la proxima cita",
        rareza: "Legendario",
        claseRareza: "rarity-legendario",
        peso: 10,  
        mensaje: "deliciosos valido una sola vez durante todo el mes..."
    }
];

function tirarGacha() {
    const boton = document.getElementById("gacha-btn");
    const resultadoDiv = document.getElementById("gacha-result");
    const nombrePremio = document.getElementById("gacha-nombre");
    const descPremio = document.getElementById("gacha-desc");
    const imagenGacha = document.getElementById("gacha-img"); // Referencia a la imagen

    // Efecto de "Cargando"
    boton.disabled = true;
    boton.textContent = "Revolviendo...";
    resultadoDiv.style.display = "none";

    // 1. Iniciamos la animación de temblor en CSS
    imagenGacha.classList.add("gacha-animada");
    
    // 2. (OPCIONAL) Si tienes un GIF, descomenta la siguiente línea y pon el nombre de tu GIF:
    // imagenGacha.src = "fotos/gachapon_girando.gif";

    setTimeout(() => {
        // Lógica de probabilidad
        let pesoTotal = premiosGacha.reduce((acc, premio) => acc + premio.peso, 0);
        let numeroAzar = Math.random() * pesoTotal;
        let premioGanado = null;

        for (let premio of premiosGacha) {
            if (numeroAzar < premio.peso) {
                premioGanado = premio;
                break;
            }
            numeroAzar -= premio.peso;
        }

        // Mostrar el premio
        nombrePremio.className = premioGanado.claseRareza; 
        nombrePremio.textContent = `[${premioGanado.rareza}] ${premioGanado.nombre}`;
        descPremio.textContent = premioGanado.mensaje;
        
        resultadoDiv.style.display = "block";
        
        // Detenemos la animación
        imagenGacha.classList.remove("gacha-animada");
        
        // (OPCIONAL) Si usaste el GIF arriba, descomenta esta línea para regresar a la imagen estática:
        // imagenGacha.src = "fotos/gachapon.png";

        // Restaurar botón
        boton.disabled = false;
        boton.textContent = "Sacar un premio";
    }, 1500); // 1.5 segundos de suspenso
}