// Animation sur le titre principal au survol
document.addEventListener('DOMContentLoaded', function() {
    const titre = document.querySelector('h1');
    if (titre) {
        titre.addEventListener('mouseenter', () => {
            titre.style.color = '#d1001d';
            titre.style.letterSpacing = '4px';
            titre.style.transition = 'all 0.3s';
        });
        titre.addEventListener('mouseleave', () => {
            titre.style.color = '';
            titre.style.letterSpacing = '';
        });
    }


    // Si tu as des modèles avec la classe "car", ajoute une interaction
    document.querySelectorAll('.car').forEach(car => {
        car.addEventListener('click', () => {
            alert("Vous avez sélectionné un modèle Audi !");
        });
    });
});
