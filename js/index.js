/**
 * Makes a call to shinoda API to get the watchlist films of the user
 */
async function getWatchlistFilms() {
    const userInput = document.getElementById('user-input');
    const username = userInput.value;
    localStorage.setItem('username', username);

    console.log("Importing watchlist for " + username);

    await fetch("https://shinoda-802129293606.us-central1.run.app/" + username + "/watchlist")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('films', JSON.stringify(data));
            window.location.href = 'film.html';
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}