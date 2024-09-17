function showMenu(category) {
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => {
        if (cat.id === category) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.textContent.toLowerCase().includes(category)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
