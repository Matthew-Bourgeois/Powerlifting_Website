const apiKey = 'gb131SYvgYNMPoFCItfiOwHgBnjMhzJT'; // Giphy API key

// Function to fetch GIFs from Giphy API 
function fetchGiphy(query) {
    const loader = document.getElementById('loading'); // Get loader element
    const resultsDiv = document.getElementById('results'); // Get results div

    loader.style.display = 'block'; // Show loader
    resultsDiv.innerHTML = ''; // Clear previous results

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=8`; // API URL

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data); // Display new GIFs
            loader.style.display = 'none'; // Hide loader after results load
        })
        .catch(error => {
            console.log('Error fetching data:', error);
            loader.style.display = 'none'; // Hide loader on error
        });
}

// Function to display fetched GIFs
function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    const gifs = data.data;

    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.classList.add('gif');
        resultsDiv.appendChild(img);
    });
}

// Event listener after DOM loads
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const query = searchInput.value.trim();
        if (query) {
            fetchGiphy(query);
        }
    });
});