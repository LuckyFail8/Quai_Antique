document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".plat")) {
        const starters = document.querySelector('.starters');
        const mainCourses = document.querySelector('.main-courses');
        const desserts = document.querySelector('.desserts');
        const drinks = document.querySelector('.drinks');
        const mealLinks = [starters, mainCourses, desserts, drinks];
        const plats = document.querySelectorAll('.plat');
    
        mealLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const category = event.target.dataset.category;
                const filteredPlats = Array.from(document.querySelectorAll(`.plat[data-category="${category}"]`));
                plats.forEach(plat => {
                    if (filteredPlats.includes(plat)) {
                        plat.style.display = 'block';
                    } else {
                        plat.style.display = 'none';
                    }
                });
            });
        });
    }
});
