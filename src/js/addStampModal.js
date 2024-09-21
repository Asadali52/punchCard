document.querySelectorAll('.stampBtn').forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('addStampModal').style.display = 'block';
  });
});

document.querySelector('.add-stamp-close-btn').addEventListener('click', function() {
  document.getElementById('addStampModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  const modal = document.getElementById('addStampModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
