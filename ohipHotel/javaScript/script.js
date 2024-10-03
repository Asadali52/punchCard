
 const toggleButton = document.getElementById('toggle-btn');
 const sidebar = document.getElementById('sidebar');
 const closeButton = document.getElementById('close-btn');

 toggleButton.addEventListener('click', () => {
   sidebar.classList.toggle('active');
 });

 closeButton.addEventListener('click', () => {
   sidebar.classList.remove('active');
 });

 document.addEventListener('click', (event) => {
   if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
     sidebar.classList.remove('active');
   }
 });