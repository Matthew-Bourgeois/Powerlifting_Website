const apiKey = 'gb131SYvgYNMPoFCItfiOwHgBnjMhzJT'; // Giphy API key

// Function to fetch GIFs from Giphy API 
function fetchGiphy(query) {
    const loader = document.getElementById('loading');
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=8`;

    loader.style.display = 'block'; // Show loader

    fetch(url)
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                loader.style.display = 'none'; // Hide loader after delay
                displayResults(data);
            }, 1000); // Delay in ms
        })
        .catch(error => {
            console.log('Error fetching data:', error);
            loader.style.display = 'none'; // Hide loader if error occurs
        });
}

// Function to display fetched GIFs
function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
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