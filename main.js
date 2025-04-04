const apiKey = 'gb131SYvgYNMPoFCItfiOwHgBnjMhzJT'; // Giphy API key

// Function to fetch GIFs from Giphy API 
function fetchGiphy(query) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=8`; // Construct API URL

    // Fetch the data from Giphy API
    fetch(url)
        .then(response => response.json())  
        .then(data => displayResults(data)) 
        .catch(error => console.log('Error fetching data:', error)); 
}

// Function to display fetched GIFs on the webpage
function displayResults(data) {
    const resultsDiv = document.getElementById('results');  // Get the results div from HTML
    resultsDiv.innerHTML = '';  // Clear any previous results

    const gifs = data.data;  // Get the GIF data from the API response

    // Loop through the GIFs and display them
    gifs.forEach(gif => {
        const img = document.createElement('img');  // Create an image element
        img.src = gif.images.fixed_height.url;  // Set the image source to the GIF URL
        img.alt = gif.title;  // Set the alt text to the GIF title
        img.classList.add('gif');  // Add a class for optional styling

        resultsDiv.appendChild(img);  // Append the image to the results div
    });
}

// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get elements from the HTML
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');

    // Event listener for form submission
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting normally (no page reload)

        const query = searchInput.value.trim();  // Get the search input value
        if (query) {
            fetchGiphy(query);  // Call function to fetch GIFs based on the search query
        }
    });
});