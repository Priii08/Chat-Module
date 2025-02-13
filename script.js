const badWords = ['kill', 'shit', 'bitch', 'murder', 'damn', 'bastard', 'hell', 'crap'];

const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

function censorMessage(message) {
    let censoredMessage = message;
    badWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        censoredMessage = censoredMessage.replace(regex, '*'.repeat(word.length));
    });
    return censoredMessage;
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        const censoredMessage = censorMessage(message);
        const messageElement = document.createElement('div');
        messageElement.textContent = censoredMessage;
        messageElement.classList.add('user-message'); 
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; 
        chatInput.value = ''; 
    }
}

sendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
