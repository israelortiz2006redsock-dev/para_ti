const objetosInventario = [
    {
        id: 1,
        nombre: "Anillo del Compromiso Temporal",
        rareza: "Epico",
        claseRareza: "rarity-epico",
        icono: "fotos/icono_anillo.png", 
        descripcion: "Un poderoso artefacto que otorga +50 de proteccion emocional. Cuenta la leyenda que fue entregado en un momento inolvidable."
    },
    {
        id: 2,
        nombre: "Control de Player 2",
        rareza: "Legendario",
        claseRareza: "rarity-legendario",
        icono: "fotos/icono_control.png",
        descripcion: "Item indispensable para las noches de Discord. Permite invocar al companero de aventuras perfecto para cualquier juego."
    },
    {
        id: 3,
        nombre: "Ticket de Cine Arrugado",
        rareza: "Comun",
        claseRareza: "rarity-comun",
        icono: "fotos/icono_cine.png",
        descripcion: "Un pedazo de papel guardado como oro. Recuerda el momento exacto en que las luces se apagaron y supiste que no verias la pelicula."
    },
    {
        id: 4,
        nombre: "Rebanada de pizza",
        rareza: "Raro",
        claseRareza: "rarity-raro",
        icono: "fotos/icono_pizza.png",
        descripcion: "Delicioso bajo circunstancias normales. aplica efectos de veneno al consummirse."
    },
    {
        id: 5,
        nombre: "Peluche de vaca",
        rareza: "Epico",
        claseRareza: "rarity-epico",
        icono: "fotos/icono_vaca.png",
        descripcion: "Es tremenda. Intento ser programadora, aun sigue en la universidad..."
    },
      {
        id: 6,
        nombre: "Cubo de tierra",
        rareza: "Comun",
        claseRareza: "rarity-comun",
        icono: "fotos/icono_tierra.png", 
        descripcion: "Talvez una planta podria darle un buen uso."
    },
      {
        id: 7,
        nombre: "kirby cocinero",
        rareza: "Legendario",
        claseRareza: "rarity-legendario",
        icono: "fotos/icono_kirby.png", 
        descripcion: "Un poderoso artefacto que invoca a un cocinero rosa?. Arrasara con toda la cocina."
    },
      {
        id: 8,
        nombre: "Manga de terror",
        rareza: "Raro",
        claseRareza: "rarity-raro",
        icono: "fotos/icono_manga.png", 
        descripcion: "Si lo lees por demasiado tiempo algo malo podria ocurrir. Quieres ser un espiral conmigo?."
    },
      {
        id: 9,
        nombre: "Peluche de pinguino",
        rareza: "Epico",
        claseRareza: "rarity-epico",
        icono: "fotos/icono_pinguino.png", 
        descripcion: "El primero de su raza en estas tierras. le encanta el pescado."
    },
      {
        id: 10,
        nombre: "Cheetos ",
        rareza: "Legendario",
        claseRareza: "rarity-legendario",
        icono: "fotos/icono_chetos.png", 
        descripcion: "Alimento creado por los mismisimos dioses. Vamos por unos?."
    },
];

// Cantidad de espacios totales que tendra la cuadricula de juego
const totalSlots = 10;

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('inventory-grid');
    const loreTitle = document.getElementById('lore-title');
    const loreText = document.getElementById('lore-text');

    for (let i = 0; i < totalSlots; i++) {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot';
        
        // Si hay un objeto creado para esta posicion, lo metemos al cuadro
        if (objetosInventario[i]) {
            const objeto = objetosInventario[i];
            
            // Añadimos la imagen del icono
            slot.innerHTML = `<img src="${objeto.icono}" onerror="this.style.opacity=0;" alt="${objeto.nombre}">`;
            
            // Evento al hacer clic o tocar el slot
            slot.addEventListener('click', () => {
                // Quitamos la seleccion visual a todos los demas cuadros
                document.querySelectorAll('.inventory-slot').forEach(s => s.classList.remove('active'));
                // Activamos el relieve presionado en este cuadro
                slot.classList.add('active');
                
                // Actualizamos la caja de texto inferior con el Lore del item
                loreTitle.innerHTML = `<span class="${objeto.claseRareza}">[${objeto.rareza}]</span> ${objeto.nombre}`;
                loreText.textContent = objeto.descripcion;
            });
        }
        
        grid.appendChild(slot);
    }
});