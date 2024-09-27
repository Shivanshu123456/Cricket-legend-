// Load and display players from JSON file
document.addEventListener('DOMContentLoaded', function() {
    const featuredPlayers = document.getElementById('featured-players');
    const searchInput = document.getElementById('search');

    fetch('data/players.json')
        .then(response => response.json())
        .then(players => {
            displayPlayers(players);

            // Search functionality
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredPlayers = players.filter(player =>
                    player.name.toLowerCase().includes(searchTerm)
                );
                displayPlayers(filteredPlayers);
            });
        });

    // Function to display players
    function displayPlayers(players) {
        featuredPlayers.innerHTML = ''; // Clear previous content
        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.innerHTML = `
                <img src="${player.image}" alt="${player.name}">
                <h3>${player.name}</h3>
                <p>${player.bio}</p>
                <a href="player.html?name=${encodeURIComponent(player.name)}">View Profile</a>
            `;
            featuredPlayers.appendChild(playerCard);
        });
    }
});
