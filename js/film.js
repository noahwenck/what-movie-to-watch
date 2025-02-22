document.addEventListener('DOMContentLoaded', function() {
    populateFilm();
});

/**
 * Grabs a random film from the already-saved watchlist and populates the page.
 */
function populateFilm() {
    const films = JSON.parse(localStorage.getItem('films'));
    const randomIndex = Math.floor(Math.random() * films.length);
    const film = films[randomIndex];
    
    document.getElementById("film-poster").src = "data:image/png;base64," + film["Base64 Poster"];
    document.getElementById("film-name").textContent = film.Name;
    document.getElementById("film-year").textContent = film.Year;
    document.getElementById("film-language").textContent = film["Primary Language"];
    document.getElementById("film-runtime").textContent = film.Runtime + " minutes";
    document.getElementById("film-director").textContent = "Directed by " + film.Director.join(", ");
    document.getElementById("film-synopsis").textContent = film.Synopsis;
    document.getElementById("film-genre").textContent = "Genre: " + film.Genre.join(", ");
}