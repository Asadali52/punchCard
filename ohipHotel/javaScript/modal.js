const loginModal = document.getElementById("loginModal");
const loginSuccessModal = document.getElementById("loginSuccessModal");

const openLoginModalBtn = document.getElementById("openLoginModal");
const loginButton = document.getElementById("loginButton");

const closeLoginModalBtn = document.getElementById("closeLoginModal");
const closeLoginSuccessModalBtn = document.getElementById("closeLoginSuccessModal");

openLoginModalBtn.onclick = function() {
    loginModal.style.display = "flex";
}

loginButton.onclick = function() {
    loginModal.style.display = "none"; 
    loginSuccessModal.style.display = "flex"; 
}

closeLoginModalBtn.onclick = function() {
    loginModal.style.display = "none";
}

closeLoginSuccessModalBtn.onclick = function() {
    loginSuccessModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == loginSuccessModal) {
        loginSuccessModal.style.display = "none";
    }
}
