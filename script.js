// script.js

document.addEventListener('DOMContentLoaded', function() {

  // --- NEW CODE TO SET BACKGROUND IMAGE ---
  fetch('https://picsum.photos/1920/1080')
    .then(response => {
      // The 'response.url' gives us the final image URL after redirects
      document.body.style.backgroundImage = `url(${response.url})`;
    })
    .catch(error => {
      console.error('Error fetching background image:', error);
    });
  // --- END OF NEW CODE ---


  // Your existing quote fetching code can go here
 
    // ...the rest of your script.js file
    // document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote').textContent = `"${data.content}"`;
      document.getElementById('author').textContent = `- ${data.author}`;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      document.getElementById('quote').textContent = "The only way to do great work is to love what you do.";
      document.getElementById('author').textContent = "- Steve Jobs";
    });
});