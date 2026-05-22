/*
***********************************************************************
SOLUTION
***********************************************************************
*/

// Sélectionner toutes les cartes de mèmes
const memeCards = document.querySelectorAll('.meme-card');

// Ajouter les événements à chaque carte
memeCards.forEach(function(card) {
    const emoji = card.querySelector('.meme-emoji');
    const messageDiv = card.querySelector('.message-rigolo');
    const message = card.getAttribute('data-message');

    card.addEventListener('mouseenter', function() {
        // Faire tourner l'emoji
        emoji.style.transform = 'rotate(15deg) scale(1.2)';

        // Afficher le message rigolo
        messageDiv.textContent = message;
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';

        // Effet sur la carte
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', function() {
        // Remettre l'emoji droit
        emoji.style.transform = 'rotate(0deg) scale(1)';

        // Cacher le message
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(-20px)';

        // Remettre la carte normale
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});



