
const adminCredentials = {
    username: "Nitish",
    password: "Pawanyadav@9529"
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        alert("Admin logged in successfully!");
        // Redirect or load admin dashboard
    } else {
        alert("Invalid credentials!");
    }
}

window.onload = () => {
    setTimeout(() => {
        document.querySelector(".splash-screen").style.display = "none";
        document.querySelector(".login-container").classList.add("show-login");
    }, 4000);
};
