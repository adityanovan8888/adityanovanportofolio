document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const iconMoon = document.getElementById('icon-moon');
    const iconSun = document.getElementById('icon-sun');

    // 1. Cek preferensi tema yang tersimpan di browser
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        iconMoon.classList.add('hidden');
        iconSun.classList.remove('hidden');
    } else {
        // Default ke light mode
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        iconSun.classList.add('hidden');
        iconMoon.classList.remove('hidden');
    }

    // 2. Fungsi Toggle Tema
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            // Ganti ke Dark Mode
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            iconMoon.classList.add('hidden');
            iconSun.classList.remove('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            // Ganti ke Light Mode
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            iconSun.classList.add('hidden');
            iconMoon.classList.remove('hidden');
            localStorage.setItem('theme', 'light');
        }
    });
});