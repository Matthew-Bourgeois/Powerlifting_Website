const apiKey = 'gb131SYvgYNMPoFCItfiOwHgBnjMhzJT'; // Giphy API key

// Function to fetch GIFs from Giphy API 
function fetchGiphy(query) {
    const loader = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message'); // Element to show error message
    const resultsDiv = document.getElementById('results');

    // Clear any previous results and hide error message
    resultsDiv.innerHTML = '';
    errorMessage.style.display = 'none';

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=8`;

    loader.style.display = 'block'; // Show loader

    fetch(url)
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none'; // Hide loader

            if (data.data.length === 0) {
                // Show error message if no results
                errorMessage.textContent = 'No GIFs found. Please try a different search.';
                errorMessage.style.display = 'block';
            } else {
                displayResults(data);
            }
        })
        .catch(error => {
            loader.style.display = 'none'; // Hide loader on error
            errorMessage.textContent = 'An error occurred while fetching the GIFs. Please try again later.';
            errorMessage.style.display = 'block'; // Show error message if there's an error
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
