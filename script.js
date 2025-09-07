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