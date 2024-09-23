let timeout;

function showDropdown(element) {
  clearTimeout(timeout);
  const dropdown = element.querySelector(".dropdown-menu");
  dropdown.style.display = "block";
}

function hideDropdown(element) {
  const dropdown = element.querySelector(".dropdown-menu");
  timeout = setTimeout(() => {
    dropdown.style.display = "none";
  }, 1000);
}

//  modal
function openModal() {
  document.getElementById("deleteModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("deleteModal").style.display = "none";
}

function deleteCard() {
  alert("Card deleted!");
  closeModal();
}
