document.getElementById('saveButton').addEventListener('click', function() {
    const nameBox = document.getElementById('nameBox');
    const messageBox = document.getElementById('messageBox');
    const messageList = document.getElementById('messageList');
    const specialMessage = document.getElementById('specialMessage');

    if (nameBox.value.trim() !== "" && messageBox.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = `${nameBox.value}: ${messageBox.value}`;
        messageList.appendChild(li);

        messageBox.value = '';

        if (messageList.children.length === 3) {
            specialMessage.innerHTML = '¡Anhelo que tus deseos se hagan realidad✨🥺!';
            sendEmail();
        }
    }
});

// Inicializa EmailJS
(function() {
    emailjs.init('pMGORd-_f1swU1fFB');
})();

function sendEmail() {
    const messages = Array.from(document.getElementById('messageList').children).map(li => li.textContent);

    emailjs.send('service_vty6apf', 'template_trvcvxs', {
        messages: messages.join('\n')
    }).then(response => {
        console.log('Email sent successfully!', response.status, response.text);
        // Limpiar la lista de mensajes después de enviar el correo
        document.getElementById('messageList').innerHTML = '';
        document.getElementById('specialMessage').textContent = '';
    }).catch(err => {
        console.error('Failed to send email:', err);
    });
}

// Capitalizar la primera letra automáticamente
document.getElementById('messageBox').addEventListener('input', function() {
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
});

// Cambiar el color del nombre según el género
document.getElementById('nameBox').addEventListener('input', function() {
    const nameBox = document.getElementById('nameBox');
    if (nameBox.value.toLowerCase().endsWith('a')) {
        nameBox.style.color = '#FF69B4';
    } else {
        nameBox.style.color = '#32CD32';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    const playMusic = () => {
        music.play();
        document.removeEventListener('click', playMusic);
    };
    document.addEventListener('click', playMusic);
});



/*
document.getElementById('saveButton').addEventListener('click', function() {
    const messageBox = document.getElementById('messageBox');
    const messageList = document.getElementById('messageList');
    const specialMessage = document.getElementById('specialMessage');

    if (messageBox.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = messageBox.value;
        messageList.appendChild(li);

        messageBox.value = '';

        if (messageList.children.length === 3) {
            specialMessage.textContent = '¡Anhelo que tus deseos <br> se hagan realidad✨🥺!';
            sendEmail();
        }
    }
});

// Inicializa EmailJS
(function() {
    emailjs.init('pMGORd-_f1swU1fFB');
})();

function sendEmail() {
    const messages = Array.from(document.getElementById('messageList').children).map(li => li.textContent);

    emailjs.send('service_vty6apf', 'template_trvcvxs', {
        messages: messages.join('\n')
    }).then(response => {
        console.log('Email sent successfully!', response.status, response.text);
        // Limpiar la lista de mensajes después de enviar el correo
        document.getElementById('messageList').innerHTML = '';
        document.getElementById('specialMessage').textContent = '';
    }).catch(err => {
        console.error('Failed to send email:', err);
    });
}
*/
