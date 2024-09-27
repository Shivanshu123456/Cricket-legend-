document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    
    fetch('data/players.json')
        .then(response => response.json())
        .then(players => {
            const player = players.find(p => p.name === playerName);
            if (player) {
                document.getElementById('player-name').textContent = player.name;
                document.getElementById('player-image').src = player.image;
                document.getElementById('player-bio').textContent = player.bio;
                document.getElementById('player-stats').innerHTML = `
                    <li>Matches: ${player.stats.matches}</li>
                    <li>Runs: ${player.stats.runs}</li>
                    <li>Average: ${player.stats.average}</li>
                `;
            }
        });
});
