const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
  sidebar.classList.toggle('sidebar-expanded');
  overlay.style.display = sidebar.classList.contains('sidebar-expanded') ? 'block' : 'none';
}

toggleBtn.addEventListener('click', toggleSidebar);

overlay.addEventListener('click', toggleSidebar);

// global modal 

let modal = document.getElementById("bussinessModal");
let openBtn = document.getElementById("openModal");
let closeBtn = document.getElementsByClassName("close")[0];

openBtn.onclick = function() {
  modal.style.display = "flex";
}


closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
