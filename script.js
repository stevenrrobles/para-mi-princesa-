const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const container = document.querySelector('.container');

// Lo que pasa cuando le da al botón SÍ
yesBtn.addEventListener('click', () => {
    container.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h1 style="color: #d63384; font-size: 2.5rem;">¡Sabía que dirías que sí! ❤️</h1>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZ3bmZ6ZndueGZ3bmZ6ZndueGZ3bmZ6ZndueGZ3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l41lTfuxV6mYqqjDO/giphy.gif" alt="Flores" style="width: 80%; max-width: 300px; border-radius: 15px; margin: 20px 0;">
            <p style="font-size: 1.2rem; line-height: 1.6; color: #444; font-family: 'Arial', sans-serif;">
                Para la mujer más linda del mundo, la que es mi todo y la más perfecta. <br><br>
                Te amo con todo mi corazón y soy capaz de darlo todo solo por ver una sonrisa en tu bello rostro. <br><br>
                <strong>¡Feliz Día de la Mujer, mi reina! ✨🌹</strong>
            </p>
            <button onclick="location.reload()" style="background: #ff4d6d; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; margin-top: 20px;">Volver a ver</button>
        </div>
    `;
});

// Lo que pasa cuando intenta darle al NO (Mensaje tierno)
noBtn.addEventListener('click', () => {
    alert("¡Esa opción no está permitida hoy! 🌹 Intenta con el botón de al lado, mi vida.");
});
