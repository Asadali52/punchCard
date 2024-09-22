const payNowBtn = document.querySelector('.pay-now-btn');
const modal = document.getElementById('payment-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

payNowBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

