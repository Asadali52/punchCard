const addNewMemberBtn = document.getElementById('addNewMemberBtn');
const addNewMemberModal = document.getElementById('addNewMemberModal');
const addNewMemberClose = document.querySelectorAll('.addNewMemberClose');

const openDialPadInput = document.getElementById('openDialPadInput');
const dialPadModal = document.getElementById('dialPadModal');
const dialPadClose = document.getElementById('dialPadClose');
const dialPadInput = document.getElementById('dialPadInput');
const addDialPadValue = document.getElementById('addDialPadValue');

addNewMemberBtn.onclick = function() {
  addNewMemberModal.style.display = 'block';
}

addNewMemberClose.onclick = function() {
  addNewMemberModal.style.display = 'none';
}

openDialPadInput.onclick = function() {
  dialPadModal.style.display = 'block';
}

dialPadClose.onclick = function() {
  dialPadModal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == addNewMemberModal) {
    addNewMemberModal.style.display = 'none';
  } else if (event.target == dialPadModal) {
    dialPadModal.style.display = 'none';
  }
}

const dialPadButtons = document.querySelectorAll('.dial-btn');
dialPadButtons.forEach(button => {
  button.onclick = function() {
    dialPadInput.value += button.getAttribute('data-value');
  }
});

addDialPadValue.onclick = function() {
  openDialPadInput.value = dialPadInput.value;
  dialPadModal.style.display = 'none';
  dialPadInput.value = '';
}
