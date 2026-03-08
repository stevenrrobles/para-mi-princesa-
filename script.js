// Seleccionar los elementos del HTML
const container = document.querySelector('.container');
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector('#question3');
const celebration = document.querySelector('#celebration');

// Llenar los textos iniciales (para que no aparezca vacío)
document.getElementById('valentineTitle').innerText = "Para mi Princesa 🌹";
document.getElementById('question1Text').innerText = "¿Sabes qué día es hoy?";
document.getElementById('yesBtn1').innerText = "Mmm no...";
document.getElementById('noBtn1').innerText = "Ni idea";
document.getElementById('secretAnswerBtn').innerText = "¡Es el Día de la Mujer y tengo algo para ti! ❤️";
document.getElementById('question2Text').innerText = "¿Qué tanto me amas?";
document.getElementById('startText').innerText = "Te amo un";
document.getElementById('nextBtn').innerText = "Siguiente ❤️";
document.getElementById('question3Text').innerText = "¿Me dejas ser el dueño de tus sonrisas por siempre?";
document.getElementById('yesBtn3').innerText = "¡Sí, acepto! ❤️";
document.getElementById('noBtn3').innerText = "No";

// Funciones de navegación
function showNextQuestion(num) {
    document.querySelectorAll('.question-section').forEach(section => section.classList.add('hidden'));
    document.getElementById(`question${num}`).classList.remove('hidden');
}

// Función del botón que huye (opcional, para el botón NO)
function moveButton(btn) {
    btn.style.position = 'absolute';
    btn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
}

// Función Final: La Dedicatoria
function celebrate() {
    question3.classList.add('hidden');
    celebration.classList.remove('hidden');
    
    document.getElementById('celebrationTitle').innerText = "¡Sabía que dirías que sí! ❤️";
    document.getElementById('celebrationMessage').innerText = "Para la mujer más linda del mundo, la que es mi todo y la más perfecta. Te amo con todo mi corazón y soy capaz de darlo todo solo por ver una sonrisa en tu bello rostro. ¡Feliz Día de la Mujer, mi reina! ✨🌹";
    document.getElementById('celebrationEmojis').innerText = "💖✨🌷👸🌈";
}

// Escuchar los clicks del medidor de amor
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
loveMeter.addEventListener('input', () => {
    loveValue.innerText = loveMeter.value;
});

// Hacer que las funciones sean globales para que el HTML las vea
window.showNextQuestion = showNextQuestion;
window.moveButton = moveButton;
window.celebrate = celebrate;

const audio = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');

// Iniciar música al primer clic en cualquier parte
document.addEventListener('click', () => {
    audio.play().catch(e => console.log("Esperando interacción..."));
}, { once: true });

// Control manual del botón
if(musicBtn) {
    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.innerText = "⏸️ Pausar";
        } else {
            audio.pause();
            musicBtn.innerText = "🎵 Música";
        }
    });
}
