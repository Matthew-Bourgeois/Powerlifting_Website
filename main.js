const apiKey = 'gb131SYvgYNMPoFCItfiOwHgBnjMhzJT';

// Placeholder for main.js

// Function to fetch GIFs from Giphy API 
function fetchGiphy(query) {
    // Placeholder function code
}

// Function to display GIFs on webpage 
function displayResults(data) {
    // Placeholder function code
}

// Get elements from the HTML
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

// Event listener  form submission
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally 
    
    const query = searchInput.value.trim(); // Get  search input value
    if (query) {
        fetchGiphy(query);  // Call function  fetch GIFs based on  search 
    }
});
