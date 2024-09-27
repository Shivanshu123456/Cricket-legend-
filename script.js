function showDetails(player) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    switch (player) {
        case 'sachin':
            title.innerText = "Sachin Tendulkar";
            description.innerText = "Most runs in ODI and Test cricket. 100 international centuries.";
            break;
        case 'bradman':
            title.innerText = "Sir Don Bradman";
            description.innerText = "Highest Test batting average (99.94). 29 Test centuries.";
            break;
        case 'richards':
            title.innerText = "Vivian Richards";
            description.innerText = "8711 runs in Test cricket. Key player in two World Cup-winning teams.";
            break;
        case 'kallis':
            title.innerText = "Jacques Kallis";
            description.innerText = "Over 10,000 runs and 300 wickets in both formats. One of the greatest all-rounders.";
            break;
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
