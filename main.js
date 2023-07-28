

const piano_Teclas = document.querySelectorAll(".pianoTeclas .tecla");

let audio = new Audio("sounds/a.mp3");

const sonidoTecla = (tecla) => {
    audio.src = `sounds/${tecla}.mp3`;
    audio.play();
    
    const teclaPulsada = document.querySelector(`[data-tecla=${tecla}]`);
    teclaPulsada.classList.add("hover"); 
    setTimeout(()=> { teclaPulsada.classList.remove("hover");
    }, 150);
    }
//
piano_Teclas.forEach(tecla =>{
    tecla.addEventListener("click", () => sonidoTecla(tecla.dataset.tecla));
})

const teclaPulsada = (e) => {
    sonidoTecla(e.key);
}

document.addEventListener("keydown", teclaPulsada);





function isDevicePortrait() {
    return window.innerWidth <= 768 && window.innerHeight >= window.innerWidth;
}


function toggleRotateMessage(show) {
    const messageContainer = document.querySelector('.message-container');
    if (show) {
        messageContainer.style.display = 'flex'; 
    } else {
        messageContainer.style.display = 'none'; 
    }
}


function applyPianoRotation() {
    const pianoDiv = document.querySelector("div");

    if (isDevicePortrait()) { 
        pianoDiv.style.display = 'none'; 
        toggleRotateMessage(true); 
    } else {
        pianoDiv.style.display = 'flex'; 
        pianoDiv.style.transform = 'none';
        pianoDiv.style.transformOrigin = 'unset';
        pianoDiv.style.height = '220px'; 
        pianoDiv.style.width = '90%';
        pianoDiv.style.position = 'relative';
        pianoDiv.style.top = 'unset';
        pianoDiv.style.left = 'unset';
        toggleRotateMessage(false); // Ocultar el mensaje
    }
}


document.addEventListener("DOMContentLoaded", function () {
    applyPianoRotation();

    window.addEventListener("resize", function () {
        applyPianoRotation();
    });

    window.addEventListener("orientationchange", function () {
        applyPianoRotation();
    });
});
