const searchInput = document.getElementById('app-search');
const appItems = document.querySelectorAll('.app-item');
const themeToggle = document.getElementById('theme-toggle-checkbox');
const chatIcon = document.getElementById('chat-assistant');
const chatModal = document.getElementById('chat-modal');
const closeBtns = document.querySelectorAll('.close-btn');

// Apply theme from local storage
if (localStorage.getItem('theme') === 'light-mode') {
    document.body.classList.add('light-mode');
    themeToggle.checked = true;
}

searchInput.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    appItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
    } else {
        localStorage.removeItem('theme');
    }
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