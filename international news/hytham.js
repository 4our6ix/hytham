// Example JavaScript (hytham.js)

// Function to change content dynamically
document.getElementById('chair').addEventListener('click', function() {
    alert("You clicked a button!");
});

// Simple Search Input Interaction
document.getElementById('ph').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const images = document.querySelectorAll('img');
    images.forEach(function(image) {
        const altText = image.alt.toLowerCase();
        if (altText.includes(searchValue)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});
