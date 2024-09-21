document.addEventListener('DOMContentLoaded', function() {
  const tab1Btn = document.getElementById('tab1-btn');
  const tab2Btn = document.getElementById('tab2-btn');

  const tab1Content = document.getElementById('tab1-content');
  const tab2Content = document.getElementById('tab2-content');

  tab1Btn.addEventListener('click', function() {
      activateTab(tab1Btn, tab2Btn, tab1Content, tab2Content);
  });

  tab2Btn.addEventListener('click', function() {
      activateTab(tab2Btn, tab1Btn, tab2Content, tab1Content);
  });

  function activateTab(activeBtn, inactiveBtn, activeContent, inactiveContent) {
    
      activeBtn.classList.add('active');
      inactiveBtn.classList.remove('active');

      activeContent.style.display = 'block';
      inactiveContent.style.display = 'none';
  }
});

// switch button 

const switchInput = document.getElementById('switch');

switchInput.addEventListener('change', function() {
  if (this.checked) {
    console.log('Switch is ON');
  } else {
    console.log('Switch is OFF');
  }
});

// dropdown 

 const dropdownToggle = document.querySelector('.dropdown-toggle');
 const dropdownMenu = document.querySelector('.dropdown-menu');

 dropdownToggle.addEventListener('click', function (event) {
   event.stopPropagation();
   dropdownMenu.classList.toggle('show');
 });

 window.addEventListener('click', function () {
   if (dropdownMenu.classList.contains('show')) {
     dropdownMenu.classList.remove('show');
   }
 });

 dropdownMenu.addEventListener('click', function (event) {
   event.stopPropagation();
 });

 
