
const loginBtn = document.getElementById('login-btn');
const themeToggle = document.getElementById('theme-toggle-checkbox');

// Apply theme from local storage
if (localStorage.getItem('theme') === 'light-mode') {
    document.body.classList.add('light-mode');
    themeToggle.checked = true;
}

loginBtn.addEventListener('click', () => {
    window.location.href = 'home.html';
});

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
    } else {
        localStorage.removeItem('theme');
    }
});
