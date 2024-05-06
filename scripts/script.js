
function handleLoginEvent(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLoginEvent);