// ============================================================
//  DISCOGRAPHIE INTERACTIVE — script.js
//  Utilise l'API iTunes Search d'Apple
//  Documentation : https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI
//  Pas de clé requise, entièrement gratuite
// ============================================================


// ── SÉLECTION DES ÉLÉMENTS DU DOM ──────────────────────────
// On récupère les 3 éléments HTML dont on aura besoin.
// getElementById() cible un élément par son attribut id="..."
const input        = document.getElementById('artiste-input'); // le champ de texte
const btnRecherche = document.getElementById('btn-recherche'); // le bouton "Rechercher"
const resultat     = document.getElementById('resultat');      // la zone d'affichage


// ── FONCTION PRINCIPALE : APPEL À L'API ────────────────────
// Déclarée avec "async" car elle contient des opérations asynchrones (fetch).
// Elle reçoit le nom de l'artiste tapé par l'utilisateur.
async function fetchArtiste(nom) {

  // On affiche un message pendant que la requête s'exécute
  resultat.innerHTML = '<p style="text-align:center;color:#6B7280;padding:2rem;">Chargement...</p>';

  // ── CONSTRUCTION DE L'URL ───────────────────────────────
  // encodeURIComponent() convertit le texte en format valide pour une URL :
  // les espaces deviennent %20, les accents sont encodés, etc.
  // Ex: 'Daft Punk' → 'Daft%20Punk' / 'Björk' → 'Bj%C3%B6rk'
  //
  // Paramètres de l'URL :
  //   term=     → le nom de l'artiste à rechercher
  //   entity=album → on veut uniquement des albums (pas des chansons ou podcasts)
  //   country=fr   → catalogue français
  //   limit=50     → maximum 50 résultats
  const url = 'https://itunes.apple.com/search?term='+ encodeURIComponent(nom)+ '&entity=album&country=fr&limit=50';

  // fetch() envoie la requête HTTP GET à l'URL.
  // "await" met la fonction en pause jusqu'à réception de la réponse.
  const reponse = await fetch(url);

  // reponse.ok vaut false si le serveur renvoie une erreur (réseau, timeout...).
  // On affiche un message d'erreur et on arrête la fonction avec "return".
  if (!reponse.ok) {
    resultat.innerHTML = '<p class="erreur">Erreur lors de la recherche. Réessayez.</p>';
    return;
  }

  // reponse.json() convertit la réponse en objet JavaScript.
  // L'API iTunes renvoie un objet avec une propriété "results"
  // qui est un tableau contenant tous les résultats trouvés.
  const data = await reponse.json();

  // ── FILTRAGE DES RÉSULTATS ──────────────────────────────
  // L'API peut retourner des singles, EPs et compilations en plus des albums.
  // On utilise filter() pour ne garder que les vrais albums :
  //   - collectionType === 'Album' : uniquement les albums (pas les singles/EPs)
  //   - artistName.toLowerCase() === nom.toLowerCase() : uniquement les albums
  //     dont l'artiste principal correspond exactement au nom recherché,
  //     ce qui exclut les collaborations et compilations (ex: "Various Artists")
  const albums = data.results.filter(function(item) {
    // Ici item est un élément du tableau data.results, filter parcourt ce tableau
    return item.collectionType === 'Album'
    && item.artistName.toLowerCase() === nom.toLowerCase()
    && item.trackCount >= 5; // un vrai album a au moins 5 titres
  });

  // Si aucun album ne correspond après filtrage, on affiche un message d'erreur
  if (albums.length === 0) {
    resultat.innerHTML = '<p class="erreur">Aucun album trouvé pour cet artiste.</p>';
    return;
  }

  // On transmet le tableau d'albums filtré à la fonction d'affichage
  afficherDiscographie(albums);
}


// ── FONCTION D'AFFICHAGE ────────────────────────────────────
// Reçoit le nom recherché et le tableau d'albums filtrés.
// Construit et injecte tout le HTML dans le div#resultat.
function afficherDiscographie(albums) {

  // On récupère le nom officiel de l'artiste depuis le premier album du tableau.
  // C'est plus fiable que d'utiliser ce que l'utilisateur a tapé
  // car l'API retourne le nom avec la bonne casse (ex: "Daft Punk" et non "daft punk")
  const nomArtiste = albums[0].artistName;

  // ── TRI PAR DATE ────────────────────────────────────────
  // sort() trie le tableau en place (modifie le tableau original).
  // La fonction de comparaison reçoit deux éléments a et b :
  //   - Si le résultat est négatif, a passe avant b
  //   - Si le résultat est positif, b passe avant a
  // new Date(dateISO) convertit une date ISO ('2001-03-07T08:00:00Z') en objet Date
  // comparable mathématiquement.
  // Ici b - a donne un tri du plus récent au plus ancien.
  albums.sort(function(a, b) {
    return new Date(b.releaseDate) - new Date(a.releaseDate);
  });


  // ── BOUCLE SUR LES ALBUMS ───────────────────────────────
  // On construit une carte HTML pour chaque album du tableau.
  let albumsHTML = '';
  albums.forEach(function(album) {

    // getFullYear() extrait uniquement l'année depuis un objet Date.
    // Ex: new Date('2001-03-07T08:00:00Z').getFullYear() → 2001
    const annee = new Date(album.releaseDate).getFullYear();

    const nom      = album.collectionName; // nom de l'album
    const titres   = album.trackCount;     // nombre de titres

    // L'API fournit la pochette en 100x100 pixels.
    // On remplace '100x100' par '300x300' dans l'URL pour une meilleure résolution.
    // Ex: '.../100x100bb.jpg' → '.../300x300bb.jpg'
    const pochette = album.artworkUrl100.replace('100x100', '300x300');

    // On ajoute la carte de cet album au HTML accumulé
    albumsHTML += `
      <div class="album-card">
        <img class="album-cover" src="${pochette}" alt="${nom}">
        <div class="album-info">
          <div class="album-name">${nom}</div>
          <div class="album-year">📅 ${annee}</div>
          <div class="album-tracks">${titres} titres</div>
        </div>
      </div>`;
  });


  // ── INJECTION DANS LE DOM ────────────────────────────────
  // On assemble l'en-tête artiste + la grille d'albums
  // et on injecte tout dans le div#resultat.
  // L'opérateur ternaire (condition ? siVrai : siFaux) gère
  // l'accord du mot "album" : 1 album / 2 albums
  resultat.innerHTML = `
    <div class="artist-header">
      <img class="artist-img" src="${albums[0].artworkUrl100}" alt="${nomArtiste}">
      <div>
        <div class="artist-name">${nomArtiste}</div>
        <div class="artist-sub">${albums.length} album${albums.length > 1 ? 's' : ''}</div>
      </div>
    </div>
    <div class="section-title">Albums</div>
    <div class="albums-grid">
      ${albumsHTML}
    </div>
  `;
}


// ── ÉVÉNEMENTS ───────────────────────────────────────────────

// Écouteur sur le bouton "Rechercher" :
// Au clic, on récupère la valeur du champ et on appelle fetchArtiste().
// trim() supprime les espaces inutiles en début et fin de saisie.
// Ici on ne met PAS toLowerCase() car les noms d'artistes ont des majuscules
// et l'API en tient compte pour le filtrage par artistName.
btnRecherche.addEventListener('click', function() {
  const valeur = input.value.trim();
  if (valeur !== '') {
    fetchArtiste(valeur);
    input.value = ''; // on vide le champ après la recherche
  }
});

// Écouteur sur le champ texte :
// Si l'utilisateur appuie sur Entrée, même comportement que le clic.
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const valeur = input.value.trim();
    if (valeur !== '') {
      fetchArtiste(valeur);
      input.value = '';
    }
  }
});


// ── REMARQUE : PAS D'INITIALISATION ─────────────────────────
// Contrairement au Pokédex, on n'affiche rien au chargement.
// La page démarre vide et attend que l'utilisateur fasse une recherche.