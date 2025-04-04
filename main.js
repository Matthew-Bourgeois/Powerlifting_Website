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
    event.preventDefault(); 
    
    const query = searchInput.value.trim(); 
    if (query) {
        fetchGiphy(query);  
    }
});

// Function to fetch GIFs from the Giphy API
function fetchGiphy(query) {
    const apiKey = 'gb131SYvgYNMPoFCItfiOwHgBnjMhzJT';  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`;  // Construct API URL


    // Fetch the data from Giphy API
     fetch(url)
     .then(response => response.json())  
     .then(data => displayResults(data)) 
     .catch(error => console.log('Error fetching data:', error)); }