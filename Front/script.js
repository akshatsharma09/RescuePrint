document.getElementById("fingerprint").addEventListener("click", function () {
    this.style.filter = "drop-shadow(0px 0px 15px lime)";
    setTimeout(() => {
        alert("Fingerprint authenticated successfully!");
        window.location.href = "../Front/Data/dashboard.html"; 
    }, 2000);
});

document.querySelector("#login-btn").addEventListener("click", () => {
    window.location.href = "../Component/Login/index.html";
})