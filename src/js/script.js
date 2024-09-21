const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
  sidebar.classList.toggle('sidebar-expanded');
  overlay.style.display = sidebar.classList.contains('sidebar-expanded') ? 'block' : 'none';
}

toggleBtn.addEventListener('click', toggleSidebar);

overlay.addEventListener('click', toggleSidebar);