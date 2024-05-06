
    // Get the modal
var modal = document.getElementById("custom-modal");

// Get the button that opens the modal
var btn = document.querySelector("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the loading animation
var loadingAnimation = document.getElementById("loading-animation");

// When the user clicks the button, open the modal
function openModal() {
  modal.style.display = "block";
  loadingAnimation.style.display = "block";
  setTimeout(function() {
    loadingAnimation.style.display = "none";
  }, 2000); // Simulating a loading animation for 2 seconds
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
  loadingAnimation.style.display = "none"; // Hide loading animation when modal is closed
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    loadingAnimation.style.display = "none"; // Hide loading animation when modal is closed
  }
}

// Submit form
document.getElementById("enquiry-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  // Here you can add your code to handle form submission, like sending data to server
  alert("Form submitted!"); // For demonstration purpose, showing an alert
  closeModal(); // Close modal after form submission
});


