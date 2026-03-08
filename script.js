// Selección de elementos
const audio = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');

// 1. Inicializar textos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('valentineTitle').innerText = "Para mi Princesa 🌹";
    document.getElementById('question1Text').innerText = "¿Sabes qué día es hoy?";
    document.getElementById('yesBtn1').innerText = "Mmm no...";
    document.getElementById('noBtn1').innerText = "Ni idea";
    document.getElementById('secretAnswerBtn').innerText = "¡Es el Día de la Mujer y tengo algo para ti! ❤️";
    document.getElementById('question2Text').innerText = "¿Qué tanto me amas?";
    document.getElementById('nextBtn').innerText = "Siguiente ❤️";
    document.getElementById('question3Text').innerText = "¿Me dejas ser el dueño de tus sonrisas por siempre?";
    document.getElementById('yesBtn3').innerText = "¡Sí, acepto! ❤️";
    document.getElementById('noBtn3').innerText = "No";
});

// 2. Control de Música
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "⏸️ Música: ON";
    } else {
        audio.pause();
        musicBtn.innerText = "🎵 Música: OFF";
    }
}

if(musicBtn) {
    musicBtn.addEventListener('click', toggleMusic);
}

// Iniciar música al primer toque (truco para navegadores)
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "⏸️ Música: ON";
    }
}, { once: true });

// 3. Navegación entre preguntas
function showNextQuestion(num) {
    // Aseguramos que la música suene al avanzar
    if (audio.paused) audio.play();
    
    document.querySelectorAll('.question-section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(`question${num}`).classList.remove('hidden');
}

// 4. Medidor de amor
if(loveMeter) {
    loveMeter.addEventListener('input', () => {
        loveValue.innerText = loveMeter.value;
    });
}

// 5. Función del botón que escapa (Mejorada para móvil)
function moveButton(btn) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    // Calcula límites para que no se salga de la tarjeta blanca
    const maxX = containerRect.width - btn.offsetWidth - 20;
    const maxY = containerRect.height - btn.offsetHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btn.style.position = "absolute";
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}

// 6. Función Final: Celebración y Dedicatoria
function celebrate() {
    document.getElementById('question3').classList.add('hidden');
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    const fotoURL = "https://i.postimg.cc/52NRRvDy/Whats_App_Image_2026_01_22_at_19_37_10_(1).jpg"; 

    celebration.innerHTML = `
        <h2 style="color: #d63384; font-family: 'Dancing Script', cursive; font-size: 2rem;">¡Sabía que dirías que sí! ❤️</h2>
        <img src="${fotoURL}" style="width: 85%; max-width: 300px; border-radius: 20px; border: 6px solid white; box-shadow: 0 10px 20px rgba(0,0,0,0.2); margin: 20px 0;">
        <p style="font-size: 1.1rem; color: #444; line-height: 1.5; padding: 0 10px; text-align: center;">
            "Para la mujer más hermosa que mis ojos han visto, la que se convirtió en mi todo de la forma más natural y perfecta. ❤️ 
            Eres el regalo más grande que la vida me ha dado y hoy, en el Día de la Mujer, quiero recordarte que eres mi prioridad, 
            mi reina y la dueña absoluta de mi corazón. Me sobran los motivos para amarte, pero me falta vida para demostrártelo todo. 
            Soy capaz de mover el cielo y la tierra solo por ver esa sonrisa tuya que me ilumina el alma. ¡Feliz Día de la Mujer, 
            mi vida, gracias por existir y por dejarme ser parte de tu historia! ✨🌹"
        </p>
        <p style="font-size: 2rem; margin-top: 15px;">💖✨🌷👸🌈</p>
    `;
}

// Hacer funciones globales
window.showNextQuestion = showNextQuestion;
window.moveButton = moveButton;
window.celebrate = celebrate;
