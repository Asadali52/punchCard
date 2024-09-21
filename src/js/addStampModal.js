document.querySelectorAll('.stampBtn').forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('addStampModal').style.display = 'block';
  });
});

document.querySelector('.add-stamp-close-btn').addEventListener('click', function() {
  document.getElementById('addStampModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  const StampModal = document.getElementById('addStampModal');
  if (event.target === StampModal) {
    StampModal.style.display = 'none';
  }
});

// ----------------------------
// redeeeem reward 

document.querySelectorAll('.redeemBtn').forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('addRedeemModal').style.display = 'block';
  });
});

document.querySelector('.add-redeem-close-btn').addEventListener('click', function() {
  document.getElementById('addRedeemModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  const RedeemModal = document.getElementById('addRedeemModal');
  if (event.target === RedeemModal) {
    RedeemModal.style.display = 'none';
  }
});

