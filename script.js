const themeToggle = document.getElementById('theme-toggle-checkbox');

// Apply theme from local storage
if (localStorage.getItem('theme') === 'light-mode') {
    document.body.classList.add('light-mode');
    if(themeToggle) {
        themeToggle.checked = true;
    }
}

if(themeToggle) {
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });
}

const loginBtn = document.getElementById('login-btn');
if(loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.location.href = 'home.html';
    });
}

const chatIcon = document.getElementById('chat-assistant');
const chatModal = document.getElementById('chat-modal');
const closeBtns = document.querySelectorAll('.close-btn');
const chatInput = document.querySelector('#chat-modal .chat-input input');
const chatSendBtn = document.querySelector('#chat-modal .chat-input .material-icons:last-child');
const chatBody = document.querySelector('#chat-modal .chat-body');

if (chatIcon) {
    chatIcon.addEventListener('click', () => {
        chatModal.classList.remove('hidden');
    });
}

if (closeBtns) {
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            chatModal.classList.add('hidden');
        });
    });
}

if (chatModal) {
    window.addEventListener('click', (e) => {
        if (e.target == chatModal) {
            chatModal.classList.add('hidden');
        }
    });
}

function addMessage(message, sender) {
    const initialMessage = document.querySelector('.chat-initial-message');
    if (initialMessage) {
        initialMessage.remove();
        chatBody.style.justifyContent = 'flex-start';
        chatBody.style.alignItems = 'stretch';
    }

    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble');
    messageBubble.textContent = message;
    messageElement.appendChild(messageBubble);
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();

    // Islamic Greetings
    if (message.includes('assalamu alaikum')) {
        return 'Wa alaikum assalam wa rahmatullah';
    }
    if (message.includes('jazakallah')) {
        return 'Wa iyyakum';
    }

    // App-related questions
    if (message.includes('what is mkan connect')) {
        return 'MKAN Connect is a digital platform for the members of Majlis Khuddamul Ahmadiyya Nigeria (MKAN) to streamline communication, manage events, and handle administrative processes.';
    }
    if (message.includes('reset password') || message.includes('forgot password')) {
        return 'You can reset your password by using the "Forgot Password" functionality on the login page.';
    }
    if (message.includes('member directory') || message.includes('find member')) {
        return 'You can find other members in the "Member Directory" app.';
    }
    if (message.includes('create event')) {
        return 'Only Admins can create events. You can view upcoming events in the "Event & Meeting Management" app.';
    }
    if (message.includes('id card') || message.includes('request card')) {
        return 'You can request a new ID card through the "ID Card Management" app.';
    }
    if (message.includes('support') || message.includes('helpdesk')) {
        return 'You can get support by creating a ticket in the "Helpdesk" app.';
    }

    // Default response
    if (message.includes('hello') || message.includes('hi')) {
        return 'Hello! How can I help you today?';
    } else if (message.includes('profile')) {
        return 'You can view your profile by clicking on the profile icon in the apps menu.';
    } else if (message.includes('events')) {
        return 'You can view upcoming events in the events app.';
    } else {
        return 'I am sorry, I am still under development and cannot understand that yet.';
    }
}

if (chatSendBtn) {
    const sendMessage = () => {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 500);
        }
    };

    chatSendBtn.addEventListener('click', sendMessage);
    chatSendBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        sendMessage();
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            chatSendBtn.click();
        }
    });
}
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 500);
        }
    });
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            chatSendBtn.click();
        }
    });
}
