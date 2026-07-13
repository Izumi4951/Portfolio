document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollReveal();
});

function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const cachedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', cachedTheme);
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let targetTheme = 'dark';
        if (currentTheme === 'dark') {
            targetTheme = 'light';
        }
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
    });
}

function initScrollReveal() {
    const revealedElements = document.querySelectorAll('.scroll-reveal');
    const revealOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealedElements.forEach(element => {
        observer.observe(element);
    });
}
