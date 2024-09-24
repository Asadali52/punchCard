
const addNewMemberModalTemplate = document.querySelector('.addNewMemberModalTemplate');
const dialPadModalTemplate = document.querySelector('.dialPadModalTemplate');


function createModalInstance(template) {
  const modal = template.cloneNode(true);
  modal.style.display = 'block';
  document.body.appendChild(modal);
  return modal;
}

function initializeAddNewMemberModal(modal) {
  const addNewMemberCloseBtns = modal.querySelectorAll('.addNewMemberClose');
  const openDialPadInput = modal.querySelector('.openDialPadInput');

  addNewMemberCloseBtns.forEach(btn => {
    btn.onclick = () => modal.style.display = 'none';
  });

  openDialPadInput.onclick = () => {
    const dialPadModal = createModalInstance(dialPadModalTemplate);
    initializeDialPadModal(dialPadModal, openDialPadInput, modal);
  };

  window.addEventListener('click', function(event) {
    if (event.target === modal && !modal.classList.contains('child-open')) {
      modal.style.display = 'none';
    }
  });
}

function initializeDialPadModal(dialPadModal, openDialPadInput, parentModal) {
  const dialPadClose = dialPadModal.querySelector('.dialPadClose');
  const dialPadInput = dialPadModal.querySelector('.dialPadInput');
  const addDialPadValue = dialPadModal.querySelector('.addDialPadValue');

  dialPadClose.onclick = () => {
    dialPadModal.style.display = 'none';
    enableParentModalClose(parentModal);
  };

  const dialPadButtons = dialPadModal.querySelectorAll('.dial-btn');
  dialPadButtons.forEach(button => {
    button.onclick = () => dialPadInput.value += button.getAttribute('data-value');
  });

  addDialPadValue.onclick = () => {
    openDialPadInput.value = dialPadInput.value;
    dialPadModal.style.display = 'none';
    dialPadInput.value = ''; 
    enableParentModalClose(parentModal);
  };

  window.addEventListener('click', function(event) {
    if (event.target === dialPadModal) {
      dialPadModal.style.display = 'none';
      enableParentModalClose(parentModal);
    }
  });

  disableParentModalClose(parentModal);
}

function disableParentModalClose(parentModal) {
  parentModal.classList.add('child-open');
}

function enableParentModalClose(parentModal) {
  parentModal.classList.remove('child-open');
}

document.querySelectorAll('.openAddNewMemberModalBtn').forEach(btn => {
  btn.addEventListener('click', function() {
    const addNewMemberModal = createModalInstance(addNewMemberModalTemplate);
    initializeAddNewMemberModal(addNewMemberModal);
  });
});
