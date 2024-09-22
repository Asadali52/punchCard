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

// ---------------------------
// delete modal 

document.getElementById('deleteModalBtn').addEventListener('click', function() {
  document.getElementById('DeleteModal').style.display = 'block';
});

document.querySelector('.delete-close-btn').addEventListener('click', function() {
  document.getElementById('DeleteModal').style.display = 'none';
});

document.querySelector('.delete-modal-cancel-btn').addEventListener('click', function() {
  document.getElementById('DeleteModal').style.display = 'none'; // Hide modal
});

window.addEventListener('click', function(event) {
  const deleteModal = document.getElementById('DeleteModal');
  if (event.target === deleteModal) {
    deleteModal.style.display = 'none';
  }
});




