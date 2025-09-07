
const themeToggle = document.getElementById('theme-toggle-checkbox');
const appsIcon = document.getElementById('apps-icon');
const chatIcon = document.getElementById('chat-assistant');
const chatModal = document.getElementById('chat-modal');
const closeBtns = document.querySelectorAll('.close-btn');
const actionCards = document.querySelectorAll('.action-card');

// Apply theme from local storage
if (localStorage.getItem('theme') === 'light-mode') {
    document.body.classList.add('light-mode');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

appsIcon.addEventListener('click', () => {
    window.location.href = 'apps.html';
});

chatIcon.addEventListener('click', () => {
    chatModal.classList.remove('hidden');
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        chatModal.classList.add('hidden');
    });
});

window.addEventListener('click', (e) => {
    if (e.target == chatModal) {
        chatModal.classList.add('hidden');
    }
});

actionCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const target = e.currentTarget.dataset.target;
        console.log(`Navigating to ${target}...`);
        // In a real application, you would navigate to the corresponding page or section.
    });
});
