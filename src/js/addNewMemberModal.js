var modal = document.getElementById("addNewModal");
var btn = document.getElementById("add-new-btn");
let closeModal = document.querySelectorAll(".close-modal");

btn.onclick = function() {
  modal.style.display = "block";
}

closeModal.forEach(function(element) {
  element.onclick = function() {
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
