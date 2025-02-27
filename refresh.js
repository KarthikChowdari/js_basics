refreshButton = document.getElementById('refresh');
const script = document.createElement("script");
script.src = "./index.js"; // Add the path of the script you want to activate
refreshButton.addEventListener('click', function() {
    
    document.head.appendChild(script);
    // location.reload(); // This will reload the page
});