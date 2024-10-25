const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Ganti ikon berdasarkan mode
    if (document.body.classList.contains('light-mode')) {
        modeToggle.textContent = '🌙'; // Ikon bulan untuk mode gelap
    } else {
        modeToggle.textContent = '☀️'; // Ikon matahari untuk mode terang
    }
});
