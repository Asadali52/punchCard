document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.getElementById('closeModal');
  const verifyBtn = document.getElementById('verifyBtn');
  const otpSuccessModal = document.getElementById('otpSuccessModal');
  const closeSuccessModalBtn = document.getElementById('closeSuccessModal');

  openModalBtn.onclick = () => {
    modal.style.display = 'block';
  };

  closeModalBtn.onclick = () => {
    modal.style.display = 'none';
  };

  verifyBtn.onclick = () => {
    modal.style.display = 'none';
    otpSuccessModal.style.display = 'block';
  };

  closeSuccessModalBtn.onclick = () => {
    otpSuccessModal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
    if (event.target === otpSuccessModal) {
      otpSuccessModal.style.display = 'none';
    }
  };
});
